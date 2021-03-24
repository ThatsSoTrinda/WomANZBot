const Chariot = require('chariot.js');

class GuildMemberRemove extends Chariot.Event {
    constructor() {
        super('guildMemberRemove');
    }

    async execute(guild, member) {
        Chariot.Logger.event(`${member.nick} just left the server :(`);
        this.client.editStatus('Online', {
            name: `${this.client.guilds.get('428382977492254723').memberCount} cuties in this server.`,  // WomANZ Discord
            //name: `${this.client.guilds.get('505547991512252418').memberCount} cuties in this server.`, // Testing Discord
            type: 3
        });
    }
}

module.exports = new GuildMemberRemove();