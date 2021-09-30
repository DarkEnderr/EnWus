const { getAudioUrl } = require('google-tts-api');

module.exports = {
    name: 'speak',
    aliases: ['talk', 's'],
    category: 'fun',
    description: 'Bot Speak',
    usage: '~speak, ~s',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('💬Vui lòng nhập gì đó để bot nói!');
        const string = args.join(' ');
        if (string.lenght > 200) return message.channel.send('Dưới 200 kí tự hoặc bị thông ass!');
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('Vào voice bạn mới dùng dc lệnh này');
        const audioURL = await getAudioUrl(string, {
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 5000,
        });
        try {
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play(audioURL);
                dispatcher.on('finish', () =>{
                    voiceChannel.leave();
                });
            });
        }
        catch(e) {
            message.channel.send('Bot lỗi, vui lòng thử lại sau');
            console.error(e);
        }
    },
};