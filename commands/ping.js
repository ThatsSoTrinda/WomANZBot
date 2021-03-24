const Chariot = require('chariot.js');

/**
 * This example shows how to make a command only accessible to the defined bot owner
 * by setting this.owner = true in the class constructor and using precondition testing.
 */
class Ping extends Chariot.Command {
    constructor() {
        super();

        this.name = 'ping';
        this.cooldown = 5;
        this.owner = true;
        this.help = {
            message: 'A simple ping command to test discord latency',
            usage: 'ping',
            example: 'ping',
            inline: false
        }
    }

    async execute(message, args, chariot) {
        let msg = await message.channel.createMessage("Ping...");
        msg.edit(`Ping... Pong! Latency is ${msg.timestamp - message.timestamp}ms.`)
        setTimeout(() => {
            msg.delete();
            message.delete();
        }, 5000);
    }
}

module.exports = new Ping();