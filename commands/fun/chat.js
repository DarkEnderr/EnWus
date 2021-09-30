const axios = require('axios');

module.exports = {
    name: 'chat',
    category: 'fun',
    run: async (client, message, args) => {
        try {
        const res = await axios.get(`http://api.brainshop.ai/get?bid=158617&key=2Xjbu4uKMaCcKz7A&uid=1&msg=${encodeURIComponent(args.join(' '))}`);

        message.channel.send(res.data.cnt);
        }
        catch(e) {
            message.channel.send('Bot lỗi, vui lồng thử lại sau');
        }
    }
}