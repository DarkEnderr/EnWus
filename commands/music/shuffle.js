const { checkSameRoom } = require('../../utils');
module.exports = {
        name: 'shuffle',
        description: 'Xáo trộng bài trong danh sách chờ',
        category: 'music',
        run: async (client, message, args) => {
                if (checkSameRoom(message)) return;
                await client.player.shuffle(message);
                await message.react('⏫');
        }
}