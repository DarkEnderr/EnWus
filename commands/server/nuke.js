const Discord = require('discord.js');
const { usage } = require('../user/help');

module.exports = {
    name: 'nuke',
    category: 'server',
    aliases: ['nuk'],
    usage: 'Chỉ có Admin mới dùng dc',
    run: (client, message, args) => {
        //setting perms to use
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("You Don't Have Permission!")
        }
        message.channel.clone().then
        ((ch) => {
            ch.setParent(message.channel.parent);
            ch.setPosition(message.channel.position);
            message.channel.delete().then(() => {
                ch.send("**Channel Has Been Nuked** \n https://imgur.com/LIyGeCR").then(r => r.delete({ timeout: 500000}))
            })

        });
    }
}