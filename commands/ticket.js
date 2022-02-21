// i have already coded the ticket system and posted it on my server so join my server and go to js codes

const {
  Client,
  Message,
  MessageEmbed,
  MessageButton,
  MessageActionRow
} = require('discord.js');

module.exports = {
  description: 'Sends the panel of ticket system',
  permissions: ["MANAGE_MESSAGES"],
  category: 'Moderation',
  /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  callback: async ({ client, message, args, Discord }) => {
      const embed = new MessageEmbed()
          .setColor('BLUE')
          .setAuthor(message.guild.name, message.guild.iconURL({
              dynamic: true
          }))
          .setDescription(
              "__**How to make a ticket**__\n" +


              "> Click on the button that says Create Ticket\n" +

              "> Once the ticket is made you will be able to type in there"

          )
          .setTitle('Tickets')


      const bt = new MessageActionRow()
          .addComponents(
              new MessageButton()
              .setCustomId('tic')
              .setLabel('🎫 Create Ticket!')
              .setStyle('PRIMARY'),
          );

      message.channel.send({
          embeds: [embed],
          components: [bt]
      });
  }
}