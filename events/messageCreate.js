const GuildSchema = require('../models/guild-schema')
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const client = require('../index').client


client.on('messageCreate', async message => {
    const array = require(`../scam.json`)
    if (array.some(word => message.content.toLowerCase().includes(word))) {
        message.delete()
        const embed = new MessageEmbed()
            .setTitle("Scam detected")
            .setColor("#ff0000")
            .setDescription("Please don't send any scam messages. Thank you.")
            .setFooter("Antiscam Automod")
        message.channel.send({ embeds: [embed] }).then(m => { setTimeout(() => { m.delete() }, 60000) })
    }
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