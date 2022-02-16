"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions = ['give', 'remove', 'has'];
exports.default = {
    category: 'Configuration',
    description: 'Gives a role to a user',
    permissions: ['MANAGE_ROLES'],
    minArgs: 3,
    expectedArgs: "<\"" + actions.join('", "') + "\"> <user @> <role @>",
    slash: 'both',
    // testOnly: true,
    guildOnly: true,
    options: [
        {
            name: 'action',
            description: "The action to perform. One of: " + actions.join(', '),
            type: 'STRING',
            required: true,
            choices: actions.map(function (action) { return ({
                name: action,
                value: action,
            }); }),
        },
        {
            name: 'user',
            description: 'The user to perform the action on',
            type: 'USER',
            required: true,
        },
        {
            name: 'role',
            description: 'The role to perform action on',
            type: 'ROLE',
            required: true,
        },
    ],
    callback: function (_a) {
        var guild = _a.guild, args = _a.args;
        var action = args.shift();
        if (!action || !actions.includes(action)) {
            return "Unknown action! Please use one of the following: " + actions.join(',');
        }
        var memberId = args.shift().replace(/[<@!&>]/g, '');
        var roleId = args.shift().replace(/[<@!&>]/g, '');
        var member = guild.members.cache.get(memberId);
        var role = guild.roles.cache.get(roleId);
        if (!member) {
            return "Could not find member with ID " + memberId;
        }
        if (!role) {
            return "Could not find role with ID " + roleId;
        }
        if (action === 'has') {
            return member.roles.cache.has(roleId)
                ? 'User has role'
                : 'User does not have role';
        }
        if (action === 'give') {
            member.roles.add(role);
            return 'Role given';
        }
        if (action === 'remove') {
            member.roles.remove(role);
            return 'Role removed';
        }
        return 'Unknown action';
    },
};
