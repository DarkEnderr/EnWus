module.exports = {
    name: 'rule-info',
    category: 'server',
    aliases: ['rule', 'info'],
    description: 'Luật lệ EnderSMP',
    usage: 'rule-info',
    run: (client, message, args) => {
        message.channel.send(`📜 \n Ping! Bot: \`${client.ws.ping}\` ms \n 1.Không chửi nhau trong chat thường \n 2.Không spam chat \n 3.Tôn trọng quyền của mỗi người `)
    }
}