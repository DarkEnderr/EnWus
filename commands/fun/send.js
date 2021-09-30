module.exports = {
    name: 'send',
    category: 'fun',
    aliases: ['msg'],
    usage: '~send <@msg>',
    run: (client, message, args) => {
        if (message.deletable) message.delete();
        message.channel.send(args.join(' '));
    }
}