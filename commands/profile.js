const { MessageEmbed } = require('discord.js')
const { ICommand }  = require('wokcommands')
const schema = require('../models/profile-schema')

module.exports = {
    category: 'Fun & Games',
    description: 'Create or view custom profiles!',
    slash: true,
    // testOnly: true,
    options: [{
        name: 'option',
        description: 'Choose something to edit',
        type: "STRING",
        choices: [
            {
                name: 'name',
                value: 'user_name'
            },
            {
                name: 'age',
                value: 'user_age'
            },            {
                name: 'hobby',
                value: 'user_hobby'
            },            {
                name: 'id',
                value: 'user_id'
            },            {
                name: 'lookup',
                value: 'lookup'
            },
        ],
        required: true,
    }],
    callback: async ({ client, interaction }) => {
        const choice = interaction.options.getString("option")
        let data;
        try {
            data = await schema.findOne({ UserId: interaction.user.id })
            if(!data) data = await schema.create({ UserId: interaction.user.id })
        } catch(error) {
            console.log(error)
        }

        if(choice == 'user_name') {
            await interaction.reply('Please send your name')
            const filter = msg => msg.author.id === interaction.user.id
            await interaction.channel.awaitMessages({ filter: filter, max: 1 }).then(async col => {
            if(!data.CustomId) await interaction.followUp(`Successfully set your name to ${col.first().content}\n\n You did not set a profile ID, so users cant look you up yet`)
            else await interaction.followUp(`Successfully set your name to ${col.first().content}`)
            data.UserName = col.first().content
            await data.save()
            })
        }

        if(choice == 'user_age') {
            await interaction.reply('Please send your age in numbers')
            const filter = msg => msg.author.id === interaction.user.id
            await interaction.channel.awaitMessages({ filter: filter, max: 1 }).then(async col => {
            if(isNaN(col.first().content)) return await interaction.followUp("Please reuse the slash command and submit a valid age")
            if(!data.CustomId) await interaction.followUp(`Successfully set your age to ${col.first().content}\n\n You did not set a profile ID, so users cant look you up yet`)
            else await interaction.followUp(`Successfully set your age to ${col.first().content}`)
            data.UserAge = col.first().content
            await data.save()
            })
        }
        if(choice == 'user_hobby') {
            await interaction.reply('Please send your hobby')
            const filter = msg => msg.author.id === interaction.user.id
            await interaction.channel.awaitMessages({ filter: filter, max: 1 }).then(async col => {
            if(!data.CustomId) await interaction.followUp(`Successfully set hobby to:\n\`\`\`${col.first().content}\`\`\`\n\n You did not set a profile ID, so users cant look you up yet`)
            else await interaction.followUp(`Successfully set hobby to:\n\`\`\`${col.first().content}\`\`\``)
            data.UserHobby = col.first().content
            await data.save()
            })
        }
        if(choice == 'user_id') {
            await interaction.reply('Please send your unique custom id that people are going to search you with')
            const filter = msg => msg.author.id === interaction.user.id
            await interaction.channel.awaitMessages({ filter: filter, max: 1 }).then(async col => {
            await interaction.followUp(`Successfully set your custom ID to \`${col.first().content}\``)
            data.CustomId = col.first().content
            await data.save()
            })
        }

        if(choice == 'lookup') {
            await interaction.reply('Please send the custom id of the user to search them')
            const filter = msg => msg.author.id === interaction.user.id
            await interaction.channel.awaitMessages({ filter: filter, max: 1 }).then(async col => {
                let searchedUser = await schema.findOne({ CustomId: col.first().content })
                if(!searchedUser) return await interaction.followUp("This user cannot be found!")
                const Embed = new MessageEmbed()
                .setTitle(`${searchedUser.UserName}'s Profile!`)
                .addFields([
                    {
                        name: 'Name:',
                        value: `${searchedUser.UserName}`
                    },
                    {
                        name: 'Age:',
                        value: `${searchedUser.UserAge}`
                    },                    {
                        name: 'Hobby:',
                        value: `${searchedUser.UserHobby}`
                    },                    {
                        name: 'CustomID:',
                        value: `${searchedUser.CustomId}`
                    },
                ])
                .setColor("RANDOM")

                await interaction.followUp({ embeds: [ Embed ] })
            })
        }


    }
}