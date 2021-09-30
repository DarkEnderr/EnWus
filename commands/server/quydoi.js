module.exports = {
    name: 'quydoi',
    category: 'server',
    aliases: ['quydoi'],
    description: 'Mua Kit 2e2a tại đây',
    usage: 'quydoi',
    run: (client, message, args) => {
        message.channel.send(' Bảng quy đổi \n ```1💷Ender Coins = 100💰Bits\n1💳Card = 1000💷Ender Coins\n1💸Super Coins = 10💳Card ``` ');
    }
}