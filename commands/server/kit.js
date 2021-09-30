module.exports = {
    name: 'kits',
    category: 'server',
    aliases: ['kit'],
    description: 'Mua Kit 2e2a tại đây',
    usage: '?kits',
    run: (client, message, args) => {
        message.channel.send('Bảng Kit: \n ``` 💷10Ender Coins = 1kit Archer \n 💶15Ender Coins = 1kitTOTEM \n 💰20Ender Coins = 1kit NormalPVP \n 💳1Card = 5kit Super Crystal \n 1💸Super Coins = 10Kits Random ```');
    }
}