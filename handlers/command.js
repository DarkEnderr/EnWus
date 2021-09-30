const { readdirSync, readdir } = require('fs');
const ascii = require('ascii-table');
const { Client } = require('discord.js');

let table = new ascii('lệnh');
table.setHeading("Tên file", "Tình trạng");

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
        
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);

            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✔ Ready');
            } else {
                table.addRow(file, '❌ not ready');
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });

    console.log(table.toString());
}