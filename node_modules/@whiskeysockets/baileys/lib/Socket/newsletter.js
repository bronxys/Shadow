"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractNewsLetter = exports.makeNewsletterSocket = void 0;
const Types_1 = require("../Types");
const Utils_1 = require("../Utils");
const WABinary_1 = require("../WABinary");
const groups_1 = require("./groups");
const makeNewsletterSocket = (config) => {
    const sock = (0, groups_1.makeGroupsSocket)(config);
    const { query, generateMessageTag } = sock;
    const encoder = new TextEncoder();
    const newsletterQuery = async (jid, query_id, content) => (query({
        tag: "iq",
        attrs: {
            id: generateMessageTag(),
            type: "get",
            xmlns: "w:mex",
            to: WABinary_1.S_WHATSAPP_NET,
        },
        content: [{
                tag: "query",
                attrs: {
                    query_id
                },
                content: encoder.encode(JSON.stringify({
                    variables: {
                        newsLetter_id: jid,
                        ...content
                    }
                }))
            }]
    }));
    /**
     *
     * @param code https://whatsapp.com/channel/key
     */
    const getNewsletterMetadata = async (type, key, role) => {
        var _a;
        const result = await newsletterQuery(undefined, Types_1.QueryIds.METADATA, {
            input: {
                key,
                type: type.toUpperCase(),
                view_role: role || "GUEST"
            },
            fetch_viewer_metadata: true,
            fetch_full_image: true,
            fetch_creation_time: true
        });
        const node = (0, WABinary_1.getBinaryNodeChildString)(result, 'result');
        const json = JSON.parse(node);
        if (!json.data) {
            throw new Error('Error while fetch newsletter info ' + json);
        }
        return (0, exports.extractNewsLetter)((_a = json.data) === null || _a === void 0 ? void 0 : _a.xwa2_newsletter);
    };
    const getNewsletters = async () => {
        const result = await newsletterQuery(undefined, Types_1.QueryIds.GETSUBSCRIBED);
        const node = (0, WABinary_1.getBinaryNodeChildString)(result, 'result');
        const json = JSON.parse(node);
        if (!json.data) {
            throw new Error('Error while fetch subscribed newsletters ' + json);
        }
        return json.data.xwa2_newsletter_subscribed.map((v) => (0, exports.extractNewsLetter)(v));
    };
    const createNewsLetter = async (name, description, picture) => {
        var _a;
        const result = await newsletterQuery(undefined, Types_1.QueryIds.CREATE, {
            input: {
                name,
                description: description !== null && description !== void 0 ? description : null,
                picture: picture ? (await (0, Utils_1.generateProfilePicture)(picture)).img.toString('base64') : null
            }
        });
        const node = (0, WABinary_1.getBinaryNodeChildString)(result, 'result');
        const json = JSON.parse(node);
        if (!json.data) {
            throw new Error('Error while create newsletter ' + json);
        }
        return (0, exports.extractNewsLetter)((_a = json.data) === null || _a === void 0 ? void 0 : _a.xwa2_newsletter_create);
    };
    const muteNewsletter = async (jid, action) => {
        const queryId = action === 'mute' ? Types_1.QueryIds.MUTE : Types_1.QueryIds.UNMUTE;
        const result = await newsletterQuery(undefined, queryId, {
            'newsletter_id': jid
        });
        const node = (0, WABinary_1.getBinaryNodeChildString)(result, 'result');
        const json = JSON.parse(node);
        return json;
    };
    const followNewsletter = async (jid, action) => {
        const queryId = action === 'follow' ? Types_1.QueryIds.FOLLOW : Types_1.QueryIds.UNFOLLOW;
        const result = await newsletterQuery(undefined, queryId, {
            'newsletter_id': jid
        });
        const node = (0, WABinary_1.getBinaryNodeChildString)(result, 'result');
        const json = JSON.parse(node);
        return json;
    };
    const updateNewsletter = async (jid, updates) => {
        var _a;
        const { name, description, picture, reaction } = updates;
        const result = await newsletterQuery(undefined, Types_1.QueryIds.JOB_MUTATION, {
            'newsletter_id': jid,
            updates: {
                name: name || undefined,
                description: description || undefined,
                picture: picture ? typeof picture === 'string' ? picture : (await (0, Utils_1.generateProfilePicture)(picture)).img.toString('base64') : undefined,
                settings: reaction ? { 'reaction_codes': { value: reaction } } : null
            }
        });
        const node = (0, WABinary_1.getBinaryNodeChildString)(result, 'result');
        const json = JSON.parse(node);
        if (!json.data) {
            throw new Error('Error while updating newsletter ' + JSON.stringify(json));
        }
        return (0, exports.extractNewsLetter)((_a = json.data) === null || _a === void 0 ? void 0 : _a.xwa2_newsletter_update);
    };
    return {
        ...sock,
        getNewsletterMetadata,
        getNewsletters,
        createNewsLetter,
        followNewsletter,
        updateNewsletter,
        muteNewsletter
    };
};
exports.makeNewsletterSocket = makeNewsletterSocket;
const extractNewsLetter = (data) => {
    var _a, _b;
    const metadata = {
        id: data.id,
        state: data.state.type,
        creation_time: +data.thread_metadata.creation_time,
        name: data.thread_metadata.name.text,
        name_time: +data.thread_metadata.name.update_time,
        description: data.thread_metadata.description.text,
        description_time: +data.thread_metadata.description.update_time,
        invite: data.thread_metadata.invite,
        handle: data.thread_metadata.handle,
        picture: ((_a = data.thread_metadata.picture) === null || _a === void 0 ? void 0 : _a.direct_path) || null,
        preview: ((_b = data.thread_metadata.preview) === null || _b === void 0 ? void 0 : _b.direct_path) || null,
        settings: {
            reaction: data.thread_metadata.settings.reaction_codes.value
        },
        subscribers: +data.thread_metadata.subscribers_count,
        verification: data.thread_metadata.verification,
        viewer_metadata: data.viewer_metadata
    };
    return metadata;
};
exports.extractNewsLetter = extractNewsLetter;
