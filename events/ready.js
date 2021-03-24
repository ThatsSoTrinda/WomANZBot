const Chariot = require('chariot.js');

class Ready extends Chariot.Event {
    constructor() {
        super('ready');
    }

    async execute() {
        Chariot.Logger.event(`Bot is ready in ${this.client.guilds.size} guilds!`);
        this.client.editStatus('Online', {
            name: `${this.client.guilds.get('428382977492254723').memberCount} cuties in this server.`,  // WomANZ Discord
            //name: `${this.client.guilds.get('505547991512252418').memberCount} cuties in this server.`, // Testing Discord
            type: 3
        });
    }
}

module.exports = new Ready();