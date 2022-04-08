
const {
    Client,
    Message,
    MessageEmbed,
    MessageButton,
    MessageActionRow
  } = require('discord.js');

  
module.exports = {
    category: 'Configuration',
    description: 'Sends a message. Use it for adding roles with addrole command',
    permissions: ['MANAGE_ROLES'],
    minArgs: 2,
    expectedArgs: '<channel> <text>',
    expectedArgsTypes: ['CHANNEL', 'STRING'],
    // testOnly: true,
    guildOnly: true,
      /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  callback: async ({ client, interaction, message, args, Discord }) => {
    const channel =  message.mentions.channels.first() 
    if(!channel || channel.type !== 'GUILD_TEXT') {
        return 'Please tag a text channel'
    }
    args.shift()
    const text = args.join(' ')
    const embed = new MessageEmbed()
    .setColor('BLUE')
    .setAuthor(message.guild.name, message.guild.iconURL({
        dynamic: true
    }))
    .setDescription(text)
    .setTitle('AinsleyBot')
     channel.send({
        embeds: [embed],
    });


  }
}