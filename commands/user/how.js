module.exports = {
    name: 'how',
    category: 'user',
    aliases: ['h'],
    description: 'Cách dùng bot',
    usage: '📜  \n avatar để xem avatar ng dùng \n ping để xem độ trễ của bot \n send để cho bot nói trong chat \n speak để bot nói trong voice \n emoji để dùng emoji \n chat để nói chuyện với AI ',
    run: (client, message, args) => {
        message.channel.send(' >>> 📜   `avatar để xem avatar ng dùng`  `ping để xem độ trễ của bot`  `send để cho bot nói trong chat`  `speak để bot nói trong voice`  `emoji để dùng emoji`  `chat để nói chuyện với AI` ')
    }
}