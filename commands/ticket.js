module.exports = {
    description: 'make a ticket channel',
    category: "Moderation",
    callback: async ({ client, message, args, Discord }) => {
      message.delete().catch(err => console.log(err))
      let SupportTicket = await message.guild.channels.create(`${message.author.tag}`, {
        type: 'text',
        permissionOverwrites: [
          {
            id: message.guild.id,
            deny: ['VIEW_CHANNEL']
          },
          {
            id: message.author.id,
            allow: ['VIEW_CHANNEL'],
          },
          
  
        ]
      });
      SupportTicket.send(`Hello <@${message.author.id}>! Support will be here shortly.`)
      message.channel.send({ content: ` <@${message.author.id}>! Please go to ${SupportTicket}` })
    }
  }