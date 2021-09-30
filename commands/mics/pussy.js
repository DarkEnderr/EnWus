const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'nsfw pussy',
    category: 'mics',
    aliases: ['pussy'],
    description: 'Cách dùng bot',
        run: async (client, message, args) => {
          if (!message.channel.nsfw) return message.channel.send("Chỉ sử dụng được trong **NSFW**")
          
          var lo = new Discord.MessageEmbed()
          .setDescription('NSFW')
          .setTimestamp()
          
          message.channel.send(lo).then(m => {
            superagent.get('https://nekobot.xyz/api/image').query({ type: 'pussy' }).end((err, response) => {
            
              var embed_nsfw = new Discord.MessageEmbed()
              .setDescription(`Image`)
              .setTimestamp()
              .setImage(response.body.message)
              
              m.edit(embed_nsfw)
            })
          })
        }
}
