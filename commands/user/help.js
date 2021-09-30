const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'help',
    aliases: ['h'],
    calegory: 'user',
    description: 'HeroMC nhu loz',
    usage: 'help [tên lệnh]',
    run: async (client, message, args) => {
        if (!args[0]) return getALL(client, message);
        return getCMD(client, message, args[0]);
    },

};

function getALL(client, message) {
    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setAuthor(' Prefix của bot là: ;\n :)) ')

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(' ')
}

    const info = client.categories
        .map(cat => stripIndent`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info));
}

function getCMD (client, message, input) {
    const embed = new MessageEmbed()
    const cmd = client.commands.get(input.toLowerCase() || client.commands.get(client.aliases.get(input.toLowerCase())));
    let info = `Không tim thấy lệnh**`;

    if (!cmd) return message.channel.send(embed.setColor('RFO').setDescription(info));

    if (cmd.name) info = `**Tên lệnh**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Tên gọi khác**: ${cmd.aliases.map(a => `${a}\``).join(', ')}`;
    if (cmd.description) info += `\n**Chi tiết lệnh**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**cách sử dụng lệnh**: ${cmd.usage}`;
        embed.setFooter('Cú pháp: <> - bắt buộc');
        
    }

    return message.channel.send(embed.setColor('GREEN').setDescription(info));
}
