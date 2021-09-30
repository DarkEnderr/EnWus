const Discord = require('discord.js')
const colors = require('../../colors.json')
const db = require('quick.db')

module.exports = {
    name: 'pay',
    description: 'Pay a user X amount',
    usage: 'pay <user> <amount>',
    category: 'Economy',
    guildOnly: true,
    run: async (client, message, args) => {
        let User = await message.mentions.members.first() || client.users.cache.get(args[0])
        let authorBal = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let payment = Number[args[1]]

        if(authorBal < payment){
            let tooLessMoneyEmbed = new Discord.MessageEmbed()
                .setColor(colors.red)
                .setDescription()
            message.channel.send()

        }
    }
}