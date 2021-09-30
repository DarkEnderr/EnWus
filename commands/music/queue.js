const Pagination = require('discord-paginationembed');
const { MessageEmbed } = require('discord.js');
const { noMusicEmbed } = require('../../utils');

module.exports = {
        name: 'queue',
        aliases: ['queuemusic'],
        category: 'music',
        run: async (client, message, args) => {
                const queue = await client.player.getQueue(message);
                if (!queue) return message.channel.send(noMusicEmbed());

                if (queue.tracks.length === 1) {
                        const embed = new MessageEmbed()
                        .setColor("CYAN")
                        .setAuthor(`Danh sách nhạc chờ ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
                        .addField("Bài hát đang chơi", `[${queue.tracks[0].title}](${queue.tracks[0].url})\n*Người yêu cầu nhạc ${queue.tracks[0].requestedBy}*\n`);
                return message.channel.send(embed);
                }

                let i = 0;

                const FieldsEmbed = new Pagination.FieldsEmbed();

                FieldsEmbed.embed
                .setColor('RED')
                .setAuthor(`Danh sách nhạc chờ ${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
                        .addField("Bài hát đang chơi", `[${queue.tracks[0].title}](${queue.tracks[0].url})\n*Người yêu cầu nhạc ${queue.tracks[0].requestedBy}*\n`);

                FieldsEmbed.setArray(queue.tracks[1] ? queue.tracks.slice(1, queue.tracks.length) : [])
                        .setAuthorizedUsers([message.author.id])
                        .setChannel(message.channel)
                        .setElementsPerPage(5)
                        .setPageIndicator(true)
                        .formatField("Queue", (track) => `${++i}. [${track.title}](${track.url})\n*Người yêu cầu ${track.requestedBy}*\n`)

                FieldsEmbed.build();
        },
};