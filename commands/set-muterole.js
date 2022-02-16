const client = require('../index'),

    {CommandInteraction} = require('discord.js'),
     Schema = require('../models/muterole')

module.exports = {
    category: 'Moderation',
    description: 'Set the role for mutes.',
    // testOnly: true,
    slash: true,
    permissions: ['MANAGE_ROLES'],
    options: [
        {
            name: 'role',
            description: 'The role to set as the mute role.',
            type: 'ROLE',
            required: true
        }
    ],
   
    /**
     *
     * @param {client} client
     * @param {CommandInteraction} interaction
     * @param {string[]} args
     */
     callback: async ({ client, interaction, args }) => {

         const role = interaction.options.getRole("role")

        const data = await Schema.findOne({Guild: interaction.guild.id})
        if (!data) {
            await Schema.create({
                Guild: interaction.guild.id,
                Role: role.id
            })
            return interaction.reply({content: `Set the mute role to ${role.toString()}`})
        } else {
            await Schema.findOneAndUpdate({Guild: interaction.guild.id}, {Role: role.id})
            return interaction.reply({content: `Changed the mute role to ${role.toString()}`})
        }
    }
}
