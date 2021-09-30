const { checkSameRoom, noMusicEmbed } = require('../../utils');
module.exports = {
        name: 'stop',
        category: 'music',
        run: async (client, message, args) => {
                if (!client.player.isPlaying(message)) return message.channel.send(noMusicEmbed());
                if (checkSameRoom(message)) return;
                await client.player.stop(message);
                await message.react('❎');
        }
}