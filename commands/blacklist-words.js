const schema = require('../models/guild-schema')
const discord = require('discord.js')

module.exports = {
    category: 'Moderation',
    description: 'Blacklist or Whitelist certain words from your server.',
    slash: true,
    // testOnly: true,
    permissions: ['MANAGE_MESSAGES'],

    options: [
        {
        name: 'action',
        description: 'Choose whether you want to add or remove ceratin words',
        type: 'STRING',
        choices: [
            {
                name: "add",
                value: "add",
            },
            {
                name: "remove",
                value: "remove"
            }
        ],
        required: true,
    },
    {
        name: 'word',
        description: 'The word you want to blacklist or whitelist',
        type: 'STRING',
        required: true,
    },
],

    callback: async ({ client, interaction }) => {

        const choice = interaction.options.getString("action")
        // console.log(choice)
        const word = interaction.options.getString('word')
    
        let data;
        try {
            data = await schema.findOne({ guildId: interaction.guild.id })
            if(!data) {
                data = await schema.create({ guildId: interaction.guild.id })
            }
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    
        if(choice == 'add') {
            const wordToBeAdded = word.toLowerCase()
            if(data.BLW.includes(wordToBeAdded)) return interaction.reply('This word is already in the blacklisted words.')
    
            interaction.reply(`Successfully added \`${word}\` to the blacklisted words`)
            data.BLW.push(wordToBeAdded)
            await data.save()
        }
    
        if(choice == 'remove') {
            const wordToBeRemoved = word.toLowerCase()
            if(!data.BLW.includes(wordToBeRemoved)) return interaction.reply('This word is not in the blacklisted words')
            let array = data.BLW
    
            array = array.filter(x => x !== wordToBeRemoved)
            data.BLW = array
            interaction.reply(`Successfully removed \`${word}\` from the blacklisted words`)

            await data.save()
        }
    },

}