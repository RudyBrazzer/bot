const { ICommand }  = require('wokcommands')
const { MessageEmbed } = require("discord.js")
const fetch = require('axios')


module.exports = {
    category: 'Fun & Games',
    description: 'Lets you view avatar of a user per server (for nitro users) and global',
    slash: true,
    // testOnly: true,

    options: [
        {
            name: 'user',
            description: 'Gets the avatar of a member globally (non nitro)',
            type: 'SUB_COMMAND',
            options: [{
                name: 'target',
                description: 'Member to view avatar of globally (non nitro)',
                type: 'USER',
                required: false
            }]
        },

        {
            name: 'member',
            description: 'Gets the avatar of a member per server (nitro)',
            type: 'SUB_COMMAND',
            options: [{
                name: 'target',
                description: 'Member to view avatar of per server (nitro)',
                type: 'USER',
                required: false
            }]
        },

    ],

    callback: async ({ client, interaction }) => {
        const choice = interaction.options.getSubcommand()
        let target = interaction.options.getUser('target')

        if(choice === 'user') {
            if(!target) target = interaction.user
            const avatarEmbed = new MessageEmbed().setTitle(`${target.tag}`).setImage(target.displayAvatarURL({ dynamic: true, size: 4096 })).setColor('RANDOM')
            return interaction.reply({ embeds: [ avatarEmbed ] })
        }

        else if(choice == 'member') {
            if(!target) target = interaction.user

            let res = await fetch.get(`https://discord.com/api/guilds/${interaction.guild.id}/members/${target.id}`, {
                headers: {
                    Authorization: `Bot ${client.token}`
                }
            })
            if(res.data.avatar !== undefined && res.data.avatar !== null) {
                let url = `https://cdn.discordapp.com/guilds/${interaction.guild.id}/users/${target.id}/avatars/${res.data.avatar}.webp?size=4096`
                const avatarEmbed = new MessageEmbed().setTitle(`${target.tag}`).setImage(url).setColor("RANDOM")
                interaction.reply({ embeds: [ avatarEmbed ] })
            } else {
                const avatarEmbed = new MessageEmbed().setTitle(`${target.tag}`).setImage(target.displayAvatarURL({ dynamic: true, size: 4096 })).setColor('RANDOM')
                return interaction.reply({ embeds: [ avatarEmbed ] })
            }
        }
    
    }
}