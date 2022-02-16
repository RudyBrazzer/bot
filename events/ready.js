const client = require('../index').client

client.on('ready', async () => {
    client.user.setPresence({ activities: [{ name: "Use /prefix then use the help command", type: "PLAYING"}]})
    console.log(`${client.user.tag} is Online!`)

})
