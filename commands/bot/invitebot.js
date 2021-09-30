module.exports = {
    name: 'invitebot',
    category: 'bot',
    aliases: ['invbot'],
    run: (client, message, args) => {
        message.channel.send(" Add bot:https://discord.com/api/oauth2/authorize?client_id=875745984058130442&permissions=8&scope=bot ");
    }
}