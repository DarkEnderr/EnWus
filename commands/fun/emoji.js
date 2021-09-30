const { Util, MessageEmbed } = require('discord.js');
const { parse } = require('twemoji-parser');
module.exports = {
    name: 'emoji',
    category: 'fun',
    aliases: ['emj'],
    usage: '?emoji <ID>',
    run: (client, message, args) => {
        const emoji = args[0];
        if (!emoji) return message.channel.send("Ôi bạn ơi! Nhập gì đó đi man!");

        let custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
            .setTitle(`Nạp lần đầu hoặc chết: ${emoji}`)
            .setColor("RANDOM");
            
        if (custom.id) {
            let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
            embed.setImage(link)
                .setFooter(`Emoji ID: ${custom.id}`);
            return message.channel.send(embed);
        } else {
            let parsed = parse(emoji, { assetType: 'png' });
            embed.setImage(parsed[0].url);
            return message.channel.send(embed);
        }
    }
}