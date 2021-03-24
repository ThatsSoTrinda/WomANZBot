const Chariot = require('chariot.js');

let streamingRoleTest = "678229891631677452";
let streamingRoleLive = "568210274562211850";
let streamingRoleActive = streamingRoleLive;

class PresenceUpdate extends Chariot.Event {
    constructor() {
        super('presenceUpdate');
    }

    async execute(other, oldPresence) {
        if (other.bot) return;
	if (other.id == "109939762311225344") return;
        
        if (other.activities == null) other.activities = [];

        let isStreaming = other.activities.length > 0 ? other.activities.find(activity => activity.type == 1 && activity.url.includes('twitch.tv/')) : false;
        let hasRole = other.roles.includes(streamingRoleActive);

        if (isStreaming && !hasRole) {
            other.addRole(streamingRoleActive);
        } else if (!isStreaming && hasRole) {
            other.removeRole(streamingRoleActive);
        }
    }
}

module.exports = new PresenceUpdate();