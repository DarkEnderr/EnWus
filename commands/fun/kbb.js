const discord = require('discord.js')
module.exports = {
	name: "kbb",
	description: "KÉO HOẶC BÚA , Bao",
	run: async(client, message, args) => {
		let embed = new discord.MessageEmbed()
		.setTitle("RPS GAME")
		.setDescription("React to play!")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("✊")
		await msg.react("✌")
		await msg.react("✋")

		const filter = (reaction, user) => {
            return ['✊', '✌', '✋'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['✊', '✌', '✋']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
			await msg.edit(result)
        		if ((me === "✊" && reaction.emoji.name === "✌") ||
                (me === "✋" && reaction.emoji.name === "✊") ||
                (me === "✌" && reaction.emoji.name === "✋")) {
                    message.reply("Bạn thua rồi!\nkkk");
            } else if (me === reaction.emoji.name) {
                return message.reply("Hòa rồi chơi lại không men");
            } else {
                return message.reply("Bạn thắng rồi!\n**Tôi sẽ phục thù**");
            }
        })
        .catch(collected => {
                message.reply('Time out!');
            })
}
}
