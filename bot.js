const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-"


client.on('ready', () => {
   console.log(----------------);
      console.log(pixel Bot- Script By : Hamo-zine-lizer);
        console.log(----------------);
      console.log(ON ${client.guilds.size} Servers '     Script By : Zine-Hamo-lizer ');
    console.log(----------------);
  console.log(Logged in as ${client.user.tag}!);
client.user.setGame(-help | ${client.guilds.size} Servers,"http://twitch.tv/Pixel Bot")
client.user.setStatus("dnd")
});

}); client.on('message', msg => { if (msg.content === 'باك') { msg.reply('**ولكم منور يا عسل**'); } });


client.login(process.env.BOT_TOKEN);
