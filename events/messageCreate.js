const GuildSchema = require('../models/guild-schema')

const client = require('../index').client


client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type === 'DM') return


    let data;
    try {
        data = await GuildSchema.findOne({ guildId: message.guild.id })
        if(!data) {
            data = await GuildSchema.create({ guildId: message.guild.id })
        }
    } catch (error) {
        console.log(error)
    }


    if(data?.BLW.some(word => message.content.toLowerCase().includes(word))) {
        message.delete()
         message.channel.send(`Please do not use that word!`)
    }
})