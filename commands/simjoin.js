"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Testing',
    description: 'Simulates a join. Only for testing purposes',
    permissions: ['ADMINISTRATOR'],
    slash: 'both',
    // testOnly: true,
    callback: function (_a) {
        var member = _a.member, client = _a.client;
        client.emit('guildMemberAdd', member);
        return 'Join simulated';
    },
};
