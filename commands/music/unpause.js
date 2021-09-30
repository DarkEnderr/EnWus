const { checkSameRoom, noMusicEmbed } = require('../../utils');

module.exports = {
        name: 'unpause',
        category: 'music',
        run: async (client, message, args) => {
                if (checkSameRoom(message)) return;
                if (!client.player.isPlaying(message)) return message.channel.send(noMusicEmbed);
                await client.player.resume(message);
                await client.player.pause(message);
                await client.player.resume(message);
                await message.react('▶');
        }
}