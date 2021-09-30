module.exports = {
    name: 'ping',
    category: 'user',
    description: 'Xem do tre cua bot',
    usage: '~ping',
    run: (client, message, args) => {
	var ping = `${client.ws.ping}`
    			if(ping < 100) {
    				ping = '​[■□□□□□]​ Ổn định, nhanh'
    			}
    			if(ping > 100 && ping < 200){
    				ping = '​[■■□□□□]​ Khá ổn định, hơi chậm'
    			}
    			if(ping > 300 && ping < 400) {
    				ping = '​[■■■□□□] Trung bình, cũng ổn'
    			}
    			if(ping > 500 && ping < 800) {
    				ping = '​[■■■■□□]​ Trung bình, khá chậm'
    			}
			if(ping > 800  && ping < 1000){
    				ping = '​[■■■■■□]​ Không ổn định, chậm'
    			}
			if(ping > 1000  && ping < 2000) {
    				ping = '​[■■■■■□]​ Chậm, ah shit'
    			}
			if(ping > 2000) {
    				ping = '💥 ​[■■■■■■]​ Laggggg vãi loz'
    		};

	message.react('✅')
	message.channel.send(`Độ trễ của Bot: \`${client.ws.ping}\` ms | ${ping}`)
    }
}
