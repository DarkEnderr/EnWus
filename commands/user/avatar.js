const { MessageEmbed } =require('discord.js');
module.exports = {
    name: 'avatar',
    category: 'user',
    aliases: ['avt'],
    usage: '?avatar <@tag, ID>',
    run: (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 4096 })
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle('HeroMC là lũ súc vật')
        message.channel.send(avatarEmbed);
    }
}