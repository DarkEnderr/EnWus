const discord = require('discord.js')
module.exports = {
	name: "pvp",
	description: "pvp",
	run: async(client, message, args) => {
		let embed = new discord.MessageEmbed()
		.setTitle("RPS GAME")
		.setDescription("React to play!")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("⚔️")
		await msg.react("🛡️")
		await msg.react("🏹")

		const filter = (reaction, user) => {
            return ['🛡️', '🏹', '⚔️'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🛡️', '🏹', '⚔️']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
			await msg.edit(result)
        		if ((me === "🏹" && reaction.emoji.name === "⚔️") ||
                (me === "🛡️" && reaction.emoji.name === "🏹") ||
                (me === "⚔️" && reaction.emoji.name === "🛡️")) {
                    message.reply("Bạn đã thắng\n**Tao sẽ trả thù**");
            } else if (me === reaction.emoji.name) {
                return message.reply("Cân tài cân sức quá nhỉ!");
            } else {
                return message.reply("Tao đã thắng mày sẽ phải chết");
            }
        })
        .catch(collected => {
                message.reply('Time out!');
            })
}
}
