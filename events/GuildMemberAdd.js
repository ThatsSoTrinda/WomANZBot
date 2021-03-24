const Chariot = require('chariot.js');

const welcomeMessage = `Welcome to the  **WomANZ** Community! 

Do not fret if you do not see anything in the Discord, our talented team are verifying your information before you have access to our Discord.

⭐ What to expect once you have access? ⭐ 
- A welcoming community where you can discuss career challenges you're struggling with
- A positive community focused on supporting women. While this community is a women focused initiative we are welcoming to non-binary folk or anyone who feels they would benefit from the community. 
- Occasional community based events and meetup

PLEASE ENSURE that you familiarise yourself with the following Community Guidelines: https://womanz.com.au/communityguidelines/  and head over to <#431405222980747284> to familiarize yourself with WomANZ, you will also find a link to resources if you would like to show off or utilize our assets: https://drive.google.com/open?id=1ZOWcy-NB1Wyn9vw8U8PBaW2mF-nncCnB

Also once you have been accepted into the Discord feel free to assign yourself some roles under the <#482394154626842654>  and to <#428383549964550144> 


We look forward to you being part of our community!

(If you are not a member of our community yet, and have received this link by accident... Head to our website www.womanz.com.au for more information on who we are and what we do! Alternatively, if you would like to join us, fill out this application form: https://bit.ly/WomANZForm )`



class GuildMemberAdd extends Chariot.Event {
    constructor() {
        super('guildMemberAdd');
    }

    async execute(guild, member) {
        Chariot.Logger.event(`${member.nick} just joined the server!`);
        this.client.editStatus('Online', {
            name: `${this.client.guilds.get('428382977492254723').memberCount} cuties in this server.`,  // WomANZ Discord
            //name: `${this.client.guilds.get('505547991512252418').memberCount} cuties in this server.`, // Testing Discord
            type: 3
        });

        this.client.getDMChannel(member.user.id)
                    .then(m => {
                        m.createMessage(welcomeMessage).catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
    }
}

module.exports = new GuildMemberAdd();