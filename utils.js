const checkSameRoom = (message) => {
    if (!message.member.voice.channel) return message.reply('Bạn phải vào voice để sử dụng lệnh này!');
    if (!message.guild.me.voice.channelID || message.guild.me.voice.channelID == message.member.voice.channelID) return;
    return message.reply('Bạn phải vào chung với bot mới sử dụng dc lệnh này!');
}

const { MessageEmbed } = require('discord.js');
const noMusicEmbed = 'Bạn đang không chơi nhạc!';

module.exports = {
    checkSameRoom,
    noMusicEmbed,
}
