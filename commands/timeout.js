const ms = require('ms')
const { GuildMember, User } = require('discord.js')
const { ICommand }  = require('wokcommands')

module.exports = {
    category: 'Moderation',
    description: 'Timeouts a member',
    slash: true,
    // testOnly: true,

    permissions: ['MUTE_MEMBERS'],

    options: [
        {
            name: 'user',
            description: 'Member to timeout',
            type: 'USER',
            required: true
        },

        {
            name: 'length',
            description: 'For how long you want to timeout a member',
            type: 'STRING',
            required: true
        },
        {
            name: 'reason',
            type: 'STRING',
            description: 'The reason for the timeout',
            required: true,
        },
    ],

        callback: async ({ client, interaction }) => {
        let user = interaction.guild.members.cache.get(interaction.options.getUser('user').id)
        let length = ms(interaction.options.getString("length"))
        let reason = interaction.options.getString("reason")

        if(!length)
        return "Please provide valid length for the timeout!"

        user.timeout(length, reason)

        return `${user} has been timed out for ${reason}`
      
    
    }

}