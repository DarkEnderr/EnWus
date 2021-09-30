
const { checkSameRoom, noMusicEmbed } = require('../../utils');
module.exports = {
        name: 'skip',
        category: 'music',
        run: async (client, message, args) => {
                if (checkSameRoom(message)) return;
                if (!client.player.isPlaying(message)) return message.channel.send(noMusicEmbed);
                await client.player.skip(message);
                await message.react('⏩');
        }
}