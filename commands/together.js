const fetch = require("node-fetch")
const Discord = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    description: 'Discord together!. Beware some activities may only be avaiable through server boosts.',
    category: 'Fun & Games',
    slash: true,
    testOnly: false,    
    options: [
        {
          type: 7,
          name: 'channel',
          description: 'voice channel',
          required: true
        },
        {
          type: 3,
          name: 'activity',
          description: 'activity',
          required: true,
          choices: [
            {
              name: 'YouTube Together',
              value: 'ytt'
            },
            {
              name: 'Poker Night',
              value: 'pn'
            },
            {
              name: 'Chess',
              value: 'chess'
            },
            {
              name: 'Betrayal.io',
              value: 'bio'
            },
            {
              name: 'Fishington.io',
              value: 'fio'
            },
               {
                    name: "lettertile",
                    value: "letter"
                },
                {
                    name: "wordsnack",
                    value: "wordsnack"
                },
                {
                    name: "sketchheads",
                    value: "doodle"
                },
                {
                    name: "awkword",
                    value: "awkword"
                },
                {
                    name: "spellcast",
                    value: "spellcast"
                },
                {
                    name: "checkers",
                    value: "checkers"
                },
                {
                    name: "puttparty",
                    value: "puttparty"
                },
                {
                    name: "sketchyartist",
                    value: "sketchy"
                }
          ]
        }
      ],
    callback: async ({ client, interaction}) => {
        const channel = await interaction.options.getChannel('channel')
        const activity = await interaction.options.getString('activity')
      
        if (activity === 'ytt') {
          fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
              max_age: 86400,
              max_uses: 0,
              target_application_id: "880218394199220334",
              target_type: 2,
              temporary: false,
              validate: null
            }),
            headers: {
              "Authorization": `Bot ${process.env.token}`,
              "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(invite => {
              if (!invite.code) return interaction.reply(":x: Cannot start minigame")
              interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
            })
        }
      
        if (activity === 'pn') {
          fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
              max_age: 86400,
              max_uses: 0,
              target_application_id: "755827207812677713",
              target_type: 2,
              temporary: false,
              validate: null
            }),
            headers: {
              "Authorization": `Bot ${process.env.token}`,
              "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(invite => {
              if (!invite.code) return interaction.reply(":x: Cannot start minigame")
              interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
            })
        }
      
        if (activity === 'chess') {
          fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
              max_age: 86400,
              max_uses: 0,
              target_application_id: "832012774040141894",
              target_type: 2,
              temporary: false,
              validate: null
            }),
            headers: {
              "Authorization": `Bot ${process.env.token}`,
              "Content-Type": "application/json"
            }
          }).then(res => res.json()).then(invite => {
            if (!invite.code) return interaction.reply(":x: Cannot start minigame")
            interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
          })
        }
      
        if (activity === 'bio') {
          fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
              max_age: 86400,
              max_uses: 0,
              target_application_id: "773336526917861400",
              target_type: 2,
              temporary: false,
              validate: null
            }),
            headers: {
              "Authorization": `Bot ${process.env.token}`,
              "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(invite => {
              if (!invite.code) return interaction.reply(":x: Cannot start minigame")
              interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
            })
        }
      
        if (activity === 'fio') {
          fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
              max_age: 86400,
              max_uses: 0,
              target_application_id: "814288819477020702",
              target_type: 2,
              temporary: false,
              validate: null
            }),
            headers: {
              "Authorization": `Bot ${process.env.token}`,
              "Content-Type": "application/json"
            }
          }).then(res => res.json())
            .then(invite => {
              if (!invite.code) return interaction.reply(":x: Cannot start minigame")
              interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
            })
        }
              
        if (activity === 'letter') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879863686565621790",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'wordsnak') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879863976006127627",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'doodle') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "902271654783242291",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'awkword') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879863881349087252",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'spellcast') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "852509694341283871",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'checkers') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832013003968348200",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'puttparty') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "763133495793942528",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }      
          if (activity === 'sketchy') {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
              method: "POST",
              body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879864070101172255",
                target_type: 2,
                temporary: false,
                validate: null
              }),
              headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
              }
            }).then(res => res.json())
              .then(invite => {
                if (!invite.code) return interaction.reply(":x: Cannot start minigame")
                interaction.reply(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)
              })
          }
    }
}