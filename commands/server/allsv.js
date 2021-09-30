module.exports = {
        name: 'allsv',
        category: 'server',
        description: 'all',
        usage: 'sv',
        run: (client, message, args) => {
            message.channel.send(client.guilds.cache.map(g => g.name).join('\n'))
        }
    }