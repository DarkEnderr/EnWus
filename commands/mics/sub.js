const Discord = require('discord.js');
const request = require('request-promise');
const cheerio = require('cheerio');

module.exports = {
    name: 'sub',
    category: 'mics',
    aliases: ['sub'],
    description: 'Cách dùng bot',
        run: async (client, message, args) => {
        let youtubechannelurl = 'https://www.youtube.com/channel/UCm01e4wNhVP2voJcu_6a9qw';
        let response = await request(youtubechannelurl)
        let $ = cheerio.load(response)
        let subscriberCount = $('[class="yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip"]').attr('title');
        message.reply(`Subs: ${subscriberCount} on YouTube!`)
    }
}