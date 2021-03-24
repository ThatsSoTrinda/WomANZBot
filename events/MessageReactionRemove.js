const Chariot = require('chariot.js');
const timeout = 5000;

// IDs
const reactionMessageTestID1 = '571686679119790091';
const reactionMessageTestID2 = '675263790895595531';
const reactionMessageTestID3 = '675263805122674699';
const reactionMessageTestID4 = '675263824823320586';
const reactionMessageTestID5 = '675263840564412416';
const reactionMessageTestArray = [reactionMessageTestID1, reactionMessageTestID2, reactionMessageTestID3, reactionMessageTestID4, reactionMessageTestID5];

const reactionMessageLiveLocations = '681814700560089145';
const reactionMessageLiveCreative = '681815513030066195';
const reactionMessageLiveCommunity = '681816261554208809';
const reactionMessageLiveEsports = '681816636763668485';
const reactionMessageLivePlatform = '681816921502384156'

const reactionMessageLiveArray = [reactionMessageLiveLocations, reactionMessageLiveCreative, reactionMessageLiveCommunity, reactionMessageLiveEsports, reactionMessageLivePlatform];

const reactionMessageArray = reactionMessageLiveArray;

//State Roles
const actTestRole = '675258592332349449';
const nswTestRole = '675262154152214548';
const ntTestRole = '675262183902543882';
const nzTestRole = '675262206656512002';
const qldTestRole = '675262225149067283';
const saTestRole = '675262249400795136';
const tasTestRole = '675262272796360725';
const vicTestRole = '675262294124658708';
const waTestRole = '675262317079822347';

const actLiveRole = '482417710593212419';
const nswLiveRole = '482399119311110144';
const ntLiveRole = '482417807406137344';
const nzLiveRole = '482417906286723082';
const qldLiveRole = '482418476280184842';
const saLiveRole = '482417910250471424';
const tasLiveRole = '482418264941789186';
const vicLiveRole = '482418301629235210';
const waLiveRole = '482418307673227266';

var actRole = actLiveRole;
var nswRole = nswLiveRole;
var ntRole = ntLiveRole;
var nzRole = nzLiveRole;
var qldRole = qldLiveRole;
var saRole = saLiveRole;
var tasRole = tasLiveRole;
var vicRole = vicLiveRole;
var waRole = waLiveRole;

//Creative Roles
const creativeGenTestRole = '675592275530743848';
const emoteArtistTestRole = '675592313824739368';
const contentCreatorTestRole = '675592345676414976';
const cosplayerTestRole = '675592382150082582';
const graphicDesignerTestRole = '675592415431622656';
const photographerTestRole = '675592453272633385';

const creativeGenLiveRole = '543971495504904203';
const emoteArtistLiveRole = '562562517906489354';
const contentCreatorLiveRole = '543976493886472203';
const cosplayerLiveRole = '579809580373245966';
const graphicDesignerLiveRole = '579933377529118730';
const photographerLiveRole = '623739967222317057';

const creativeGenRole = creativeGenLiveRole;
const emoteArtistRole = emoteArtistLiveRole;
const contentCreatorRole = contentCreatorLiveRole;
const cosplayerRole = cosplayerLiveRole;
const graphicDesignerRole = graphicDesignerLiveRole;
const photographerRole = photographerLiveRole;

//Esports Roles
const esportsGenTestRole = '675592521380003860';
const casterTestRole = '675592561917952011';
const profPlayerTestRole = '675593178857996288';
const tournAdminTestRole = '675592589579386880';

const esportsGenLiveRole = '543976525289095178';
const casterLiveRole = '579933996222251029';
const profPlayerLiveRole = '579934049838039050';
const tournAdminLiveRole = '579935081666445320';

const esportsGenRole = esportsGenLiveRole;
const casterRole = casterLiveRole;
const profPlayerRole = profPlayerLiveRole;
const tournAdminRole = tournAdminLiveRole;

//Platform Roles
const mixerTestRole ='675592649197092865';
const twitchTestRole = '675592674765438986';
const youtubeTestRole = '675592700975906837';

const mixerLiveRole = '623740538553761812'
const twitchLiveRole = '623740565179072512'
const youtubeLiveRole = '623740584514945033'

const mixerRole = mixerLiveRole;
const twitchRole = twitchLiveRole;
const youtubeRole = youtubeLiveRole;

//Community Roles
const greeterTestRole = '675592725189361674';

const greeterLiveRole = '663681855660228609';
const charityLiveRole = '568022450151882772';
const movieNightLiveRole = '547996276147355670';
const gamesNightLiveRole = '681825412015587331';
const minecraftLiveRole = '564341287541669890';
const writerLiveRole = '592481112995921920';


const greeterRole = greeterLiveRole;
const charityRole = charityLiveRole;
const movieNightRole = movieNightLiveRole;
const gamesNightRole = gamesNightLiveRole;
const minecraftRole = minecraftLiveRole;
const writerRole = writerLiveRole;



class MessageReactionRemove extends Chariot.Event {
    constructor() {
        super('messageReactionRemove');
    }

    async execute(message, emoji, userID) {
        if (reactionMessageArray.includes(message.id)) {

            let member = message.channel.guild.members.get(userID);
            let roleToRemove = null;
            let roleName = null;

            if (member.nick == null) {
                Chariot.Logger.event(`${emoji.name} was removed from the role message by ${member.username}`);
            } else {
                Chariot.Logger.event(`${emoji.name} was removed from the role message by ${member.nick}`);
            }


            // State/Territory/NZ Roles
            if (emoji.name == "🏜️") {
                roleToRemove = actRole;
                roleName = "ACT";
            } else if (emoji.name == "🌞") {
                roleToRemove = nswRole;
                roleName = "NSW";
            } else if (emoji.name == "🌬️") {
                roleToRemove = ntRole;
                roleName = "NT";
            } else if (emoji.name == "🥝") {
                roleToRemove = nzRole;
                roleName = "NZ";
            } else if (emoji.name == "👡") {
                roleToRemove = qldRole;
                roleName = "QLD";
            } else if (emoji.name == "🍷") {
                roleToRemove = saRole;
                roleName = "SA";
            } else if (emoji.name == "⛰️") {
                roleToRemove = tasRole;
                roleName = "Tas";
            } else if (emoji.name == "💃") {
                roleToRemove = vicRole;
                roleName = "Vic";
            } else if (emoji.name == "👋") {
                roleToRemove = waRole;
                roleName = "WA";
            }

            //Creative Roles
            else if (emoji.name == "🎨") {
                roleToRemove = creativeGenRole;
                roleName = "Artist";
            } else if (emoji.name == "🖌️") {
                roleToRemove = emoteArtistRole;
                roleName = "Emote Artist";
            } else if (emoji.name == "📷") {
                roleToRemove = contentCreatorRole;
                roleName = "Content Creator";
            } else if (emoji.name == "👚") {
                roleToRemove = cosplayerRole;
                roleName = "Cosplayer";
            } else if (emoji.name == "🖼️") {
                roleToRemove = graphicDesignerRole;
                roleName = "Graphic Designer";
            } else if (emoji.name == "📸") {
                roleToRemove = photographerRole;
                roleName = "Photographer/Videographer";
            }

            //Esports Roles
            else if (emoji.name == "🎮") {
                roleToRemove = esportsGenRole;
                roleName = "Esports General";
            } else if (emoji.name == "📢") {
                roleToRemove = casterRole;
                roleName = "Shoutcaster/Caster";
            } else if (emoji.name == "😎") {
                roleToRemove = profPlayerRole;
                roleName = "Professional Player";
            } else if (emoji.name == "blobsadlife") {
                roleToRemove = tournAdminRole;
                roleName = "Tournament Admin/League Operations";
            }

            // Platform Roles
            else if (emoji.name == "🌝") {
                roleToRemove = twitchRole;
                roleName = "Twitch";
            } else if (emoji.name == "🖍️") {
                roleToRemove = youtubeRole;
                roleName = "YouTube";
            } else if (emoji.name == "Innocence_love") {
                roleToRemove = mixerRole;
                roleName = "Mixer";
            }

            // Community Roles
            else if (emoji.name == "hearto") {
                roleToRemove = greeterRole;
                roleName = "Greeter";
            } else if (emoji.name == "💸") {
                roleToRemove = charityRole;
                roleName = "Charity";
            } else if (emoji.name == "🎥") {
                roleToRemove = movieNightRole;
                roleName = "Movie Night";
            } else if (emoji.name == "🕹️") {
                roleToRemove = gamesNightRole;
                roleName = "Games Night";
            } else if (emoji.name == "mcake") {
                roleToRemove = minecraftRole;
                roleName = "Minecraft";
            } else if (emoji.name == "📝") {
                roleToRemove = writerRole;
                roleName = "Writer";
            }

            if (roleToRemove != null) {
                member.removeRole(roleToRemove, `User deselected the ${roleName} role.`);
                let msg = await message.channel.createMessage(`${member.mention}: ${roleName} role removed.`);
                setTimeout(() => {
                    msg.delete();
                }, timeout);

                if (member.nick == null) {
                    Chariot.Logger.event(`${roleName} role was taken from ${member.username}`)
                } else {
                    Chariot.Logger.event(`${roleName} role was taken from ${member.nick}`)
                }
            }
        }
    }
}

module.exports = new MessageReactionRemove()