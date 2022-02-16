const https = require('https');
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, Discord} = require('discord.js')
const axios = require('axios')

module.exports = {
    description: 'Get random meme from Reddit',
    slash: 'both',
    // testOnly: true,
    category: 'Fun & Games',

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    callback: async ({ client, interaction, message, args }) => {
        let res = await axios.default.get(
            `https://www.reddit.com/r/memes/random/.json`
        );
        if (!res || !res.data || !res.data.length)
        return  `An error occured`
    
        res = res.data[0].data.children[0].data;
        const Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setURL(`https://www.reddit.com${res.permalink}`)
        .setTitle(`${res.title}, 👍 ${res.ups} 💬 ${res.num_comments} `)
        .setImage(res.url)
        .setDescription('M E M E')
        
        return Embed


    },
}