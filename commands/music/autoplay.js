const { noMusicEmbed } = require('../../utils');

module.exports = {
        name: 'autoplay',
        category: 'music',
        run: async (client, message, args) => {
                const queue = await client.player.getQueue(message);
                if (!queue) return message.channel.send(noMusicEmbed());

                
                await client.player.setAutoPlay(message, !queue.autoPlay);

                message.channel.send(`✅ Đã ${queue.autoPlay ? "bật" : "tắt"} tính năng autoplay!`)
        }
}