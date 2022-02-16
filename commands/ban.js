"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Moderation',
    description: 'Bans a user',
    permissions: ['BAN_MEMBERS'],
    slash: 'both',
    // testOnly: true,
    guildOnly: true,
    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],
    callback: function (_a) {
        var _b;
        var message = _a.message, interaction = _a.interaction, args = _a.args;
        var target = message ? (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first() : interaction.options.getMember('user');
        if (!target) {
            return 'Please mention a valid user to ban.';
        }
        if (!target.bannable) {
            return {
                custom: true,
                content: 'Cannot ban that user.',
                ephemeral: true
            };
        }
        args.shift();
        var reason = args.join(' ');
        target.ban({
            reason: reason,
            days: 7
        });
        return {
            custom: true,
            content: "You banned <@" + target.id + ">",
            ephemeral: true
        };
    },
};
