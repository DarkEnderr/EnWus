const { checkSameRoom } = require('../../utils');

module.exports = {
        name: 'p',
        category: 'music',
        aliases: ['play'],
        run: async (client, message, args) => {
                if (checkSameRoom(message)) return;
                await client.player.play(message, args.join(' '), true);


        
        }
}
