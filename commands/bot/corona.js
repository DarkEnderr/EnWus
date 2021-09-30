const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'corona',
	category: 'bot',
	run: async (client, message, args) => {
		const baseUrl = 'https://corona.lmao.ninja/v2';

		let url; let response; let
			corona;

		try {
			url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`);
		}

		const embed = new MessageEmbed()
			.setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Corona Cases World Wide')
			.setColor('#fb644c')
			.setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
			.addFields(
				{
					name: 'TỔng số người bị nhiễm:',
					value: corona.cases.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số người đã đắp chiếu:',
					value: corona.deaths.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số người đã hồi phục:',
					value: corona.recovered.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca đang điều trị:',
					value: corona.active.toLocaleString(),
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Số trường hợp nghiêm trọng:',
					value: corona.critical.toLocaleString(),
					inline: true,
				},
				{
					name: 'Số ca hồi phục trong ngày hôm nay:',
					value: corona.todayRecovered.toLocaleString().replace('-', ''),
					inline: true,
				},
				{
					name: 'Số ca tử vong trong ngày hôm nay:',
					value: corona.todayDeaths.toLocaleString(),
					inline: true,
				},
			);

		return message.channel.send(embed);
	},
};