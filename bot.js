const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-"
  

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`pixel Bot- Script By : Hamo-zine-lizer`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Zine-Hamo-lizer ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`BY - M A F I A `,"http://twitch.tv/Pixel Bot")
client.user.setStatus("dnd")
});

client.on('message', message => {
    if (message.content === 'باك') {
        message.reply('ۏڷــګــمۘ ۛ ּمۘــڼۨــﯡڕ ּڀــ؏ــڛۜــڵ:heart:️');
      }
});

client.on('message', message => {
    if (message.content === 'الرابط') {
        message.reply('تفضل حب❤️ :-https://discord.gg/remJBW5');
      }
});
      
      

client.on('message', message => {
    if (message.content === 'الشعار') {
        message.reply('!Discord | ! нσ‘,');
      }
});
      
      
client.on('message', message => {
    if (message.content === 'الشعار') {
        message.reply('!Game | !♚`ӈơ | ');
      }
});
      client.on('message', message => {
    if (message.content === '! ') {
        message.reply('wëlċömë tö ċlän thë höüsë öf hëll🎊🎉');
      }
});
  
     
client.on('message', message => {
    if (message.content === 'السلام عليكم') {
        message.reply('عليكم السلام ورحمة الله وبركاته ❤️');
      }
});
  
     
client.on('message', message => {
    if (message.content === 'برب') {
        message.reply(' ٺــۑْۧــټ ̨ﻻ̍ۙ ̨ٺــطــﯡڶ ؏ــڸــٻۧــڼۨــٰ̍ا̍😢');
      }
});
  
     
client.on('message', message => {
    if (message.content === '.') {
        message.reply('آطلق إثبات وجودك💔😊 [user]');      }
});
  
     
    
client.on('message', message => {
var prefix = "$";
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**!bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
      
      

client.login(process.env.BOT_TOKEN); 
