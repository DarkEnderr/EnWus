module.exports = {
    name: 'setup',
    category: 'server',
    description: 'Setup',
    usage: 'setup',
    run: (client, message, args) => {
        if(message.member.roles.cache.has('876771684374433812')) {
        message.channel.send(' ` Bạn đã có role giờ thì chat đi nào, Mức độ member [■■□□□□] ` ')
        } else {
            message.channel.send(` Bạn không có role SMP, Làm ơn hãy để tôi fix cho ${member.id} `)
            message.member.roles.add('876771684374433812')
        }
    }
}