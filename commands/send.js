"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Configuration',
    description: 'Sends a message. Use it for adding roles with addrole command',
    permissions: ['MANAGE_ROLES'],
    minArgs: 2,
    expectedArgs: '<channel> <text>',
    expectedArgsTypes: ['CHANNEL', 'STRING'],
    slash: 'both',
    // testOnly: true,
    guildOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction, args = _a.args;
        var channel = (message ? message.mentions.channels.first() : interaction.options.getChannel('channel'));
        if (!channel || channel.type !== 'GUILD_TEXT') {
            return 'Please tag a text channel.';
        }
        args.shift(); // remove the channel from the arguements array
        var text = args.join(' ');
        channel.send(text);
        if (interaction) {
            interaction.reply({
                content: 'Sent message',
                ephemeral: true
            });
        }
    }
};
