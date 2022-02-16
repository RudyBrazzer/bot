const DiscordJS = require('discord.js')
const { Intents } = DiscordJS
const WOKCommands = require('wokcommands')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES,
    ]
})
client.events = new DiscordJS.Collection()
require('./mongo')()

module.exports.client = client

new WOKCommands(client, {
    featuresDir: path.join(__dirname, 'features'),
    commandsDir: path.join(__dirname, 'commands'),
    // slashCmdsDir: path.join(__dirname, 'slashCmds'),
   
    typeScript: false,
    testServers: ['899244863197954048', '773067234439462913', '899644099924222012' ],
    botOwners: '478550042949582858',
    // dbOptions: {
    //     keepAlive: true
    // },
    // mongoUri: process.env.MONGO_URI,
})

.setDefaultPrefix('$')
.setColor(0xff0000)

.setCategorySettings([
    {
        name: 'Fun & Games',
        emoji: '🎮'
    },
    {
        name: 'Economy',
        emoji: '💸'
    },
    {
        name: 'Testing',
        emoji: '👀'
    },
    {
        name: 'Moderation',
        emoji: '💢'
    },

])
// Events Handler
fs.readdirSync('./events/').forEach(file => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0 ) return console.log("[EVENTS HANDLER] - Cannot find any events!")
    let check = false
     jsFiles.forEach(event => {
         const eventGet = require(`./events/${event}`)
         try {
             client.events.set(eventGet.name, eventGet)
             if(check == false) {
                 console.log(`[EVENTS HANDLER] - File ${event} was loaded!`)
                 check = true
             }
         } catch(error) {
             return console.log(error)
         }
     })
})

process.on("unhandledRejection", (reason, p) => {
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
     console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch");
     console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
     console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
    console.log(" [antiCrash] :: Multiple Resolves");
     console.log(type, promise, reason);
});

client.login(process.env.token)