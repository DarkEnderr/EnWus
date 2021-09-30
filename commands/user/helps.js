const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");


module.exports = {
  name: "helps",
  category: "user",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setDescription("Click the menu below to view help menu!");

        const embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("`queue`:xem hàng chờ 2y2c. `avatar`:Avt người dùng. `ping`:Pong `userinfo`:Xem thông tin người dùng");

        const embed2 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("`nuke`:Xóa vào tạo lại kênh");

        const embed3 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("`play`:Chơi nhạc. `skip`:Skip nhạc `stop`");
    
        const embed5 = new Discord.MessageEmbed()
        .setColor("PINK")
        .setDescription("`bot-info`:Thông tin bot. `nsfw` `ass` `clear`:Clear tin nhắn. `slowmode`:Chỉnh chế độ chậm.  `nsfw`: nsfw + <name>");
    
        const embed4 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription("`;kbb`:Để chơi kbb. `;pvp` `chat`:Chat AI `emoji`:Dùng EMOJI `fire, magik, meme, scary`:filter `send`:Cho bot nói. `speak`:Cho bot nói trong voice. `sua` `troll`");
    
        const embed6 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("`botinfo`:[NEW] `corona`:xem số ca nhiễm trên toàn thế giới, ;corrona + <country> `inviteEnderSMP invitebot reload update`: Không cần thiết lắm");
    

        const embed7 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("`Economy: bal, beg, leaderboard, pay, rob, work`");


        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('User')
        .setEmoji('👤')
        .setValue('option1')
        .setDescription('commands/user')

        let option2 = new MessageMenuOption()
        .setLabel('SERVER')
        .setEmoji('📜')
        .setValue('option2')
        .setDescription('commands/server')

        let option3 = new MessageMenuOption()
        .setLabel('MUSIC')
        .setEmoji('💤')
        .setValue('option3')
        .setDescription('commands/music')
        
        let option4 = new MessageMenuOption()
        .setLabel('Fun')
        .setEmoji('🎁')
        .setValue('option4')
        .setDescription('commands/fun')
        
        let option6 = new MessageMenuOption()
        .setLabel('Bot')
        .setEmoji('🤖')
        .setValue('option6')
        .setDescription('commands/bot')
        
        let option5 = new MessageMenuOption()
        .setLabel('Mics')
        .setEmoji('🎉')
        .setValue('option5')
        .setDescription('commands/mics')
        
        let option7 = new MessageMenuOption()
        .setLabel('Economy')
        .setEmoji('💰')
        .setValue('option7')
        .setDescription('commands/Economy')
        
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5, option6, option7)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 3600000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }
      
        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }
      

        if(b.values[0] == "option7") {
            Sendmenu.edit(embed7, select)
        }

        b.reply.defer();
    })

    //collector.on("end", (b) => {
        //Sendmenu.edit("This help menu is expired! Please retype the command to view again.")
    //})



       //---------------------------------------E N D----------------------------------------
       
       //-------------\ Join our official discord server for any help: https://discord.gg/EZDfrer
    }
  };
