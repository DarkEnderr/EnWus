const { Client, MessageEmbed, Util, Collection, Invite } = require('discord.js');
const Discord = require("discord.js");
const client = new Client();
const kaiz = require('kaizoffical');
const Canvas = require('canvas');
const canvacord = require('canvacord');
const { addexp } = require("./handlers/xp.js");
const fs = require('quick.db');
const ytdl = require('ytdl-core');
const superagent = require('superagent');
const ytSearch = require('yt-search');
const os = require('os');
const ms = require('ms');
const chalk = require('chalk');
const db = require('quick.db');
//const { token } = require('./config.json');
const axios = require('axios');
const { readdirSync } = require('fs');
const { Player } = require("discord-player");
const player = new Player(client, {
  ytdlDownloadOptions: { filter: "audioonly" },
});

//const config = require('./config.json');
const weather = require('weather-js');
const moment = require("moment");
const m = require("moment-duration-format");
const { GiveawaysManager } = require('discord-giveaways');
const request = require('request-promise');
const cheerio = require('cheerio');
const util = require('minecraft-server-util');
const disbut = require('discord-buttons');
disbut(client);
//require('./database')();

const mongoose = require('mongoose');
const path = require('path');
const utils = require('minecraft-server-util');




const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const TicTacToe = require('discord-tictactoe');

new TicTacToe({
  language: 'en', command: ';ttt'
}).attach(client)


const memberCounter = require('./counters/member');





client.player = player;
client.on("ready", async () =>{
    console.log(`Hello, ${client.user.username} tôi đã sẵn sàng hoạt động rồi!\nBot Version: 3.8.7`)
     //memberCounter(client)



	 //your time of changing status in miliseconds for example 1 second = 1000 ms
	
    const statusArray = [`${client.guilds.cache.size} Server, WATCHING`, `${client.users.cache.size} Profile, WATCHING`, 'EnderSMPEarth!, PLAYING', ';helps now!, WATCHING', 'The Calling (feat. Laura Brehm), LISTENING', 'Alone-Alan Walker, LISTENING', 'Lofi hip hop - beat radio relax/sleep!, LISTENING', ' Commands, LISTENING', ` Never gona give you up, WATCHING`, 'Great VietNam, PLAYING',]; //What you want your statuses to be after puting the status name put a coma and a space and then the type what you want it to be note: please dont to it to STREAMING as you would have to input a twitch link

    setInterval(() => {
      client.user.setStatus('online');
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 30000) //your time of changing status in miliseconds for example 1 second = 1000 ms

    const clientDetails = {
      guilds: client.guilds.cache.size,
      users: client.users.cache.size,
      channels: client.channels.cache.size
    }



    //express
    const express = require('express');

    const app = express();

    const port = 3001 || 3001;

    app.get("/", (req, res) => {
      res.status(200).sendFile(path.join(__dirname, "..", "EnderWork-main", "pages", "index.html"))
    })

    app.get("/info", (req, res) => {
      res.status(200).send(clientDetails)
    })

    app.listen(port)
}, 360000);


client.player.on('trackStart', (message, track) => message.channel.send(`🎶 Đang chơi bài \`${track.title}\``));
client.player.on('trackAdd', (message, queue, track) => message.channel.send(`✅ Đã thêm \`${track.title}\` vào danh sách chờ. `));
client.player.on('playlistAdd', (message, queue, playlist) => message.channel.send(`📃 Đã thêm \`${playlist.tracks.length}\` bài hát vào danh sách chờ.`));






client.on("message", async message => {
    if (message.author.bot) return;
    const prefix = ';'
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
	
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        if (command.category === 'music' && !message.member.voice.channel) return message.channel.send("Vui lòng vào room voice🎶 để sử dụng lệnh");
        command.run(client, message, args, cmd);
	return addexp(message)
    }

})


client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfagHFcsxvs84_JxFb8QdpomfgrTBa3ahVLUmkPxP0ewCeTRpJBDz3VmmF3HKZeu0v7-M&usqp=CAU" })

    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `Welcome to server, ${member.user.username}!`,
      attachment
    );   
   });


   client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'goodbye');
	if (!channel) return;

   let data = await canva.welcome(member, { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfagHFcsxvs84_JxFb8QdpomfgrTBa3ahVLUmkPxP0ewCeTRpJBDz3VmmF3HKZeu0v7-M&usqp=CAU" })

    const attachment = new Discord.MessageAttachment(
      data,
      "goobye-image.png"
    );

    channel.send(
      `Goodbye, ${member.user.username}!`,
      attachment
    );   
   });


client.db = require('quick.db');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./commands/");


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});




client.login(process.env.TOKEN)
