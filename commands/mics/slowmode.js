module.exports = {
	name: 'slowmode',
	category: 'mics',
	aliases: ['slowmode'],
run: async (client, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(`Chế độ chậm đã dc bật: ${args[0]}s`)
}
}