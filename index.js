const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err,files) =>{
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't Find Commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props)
});
});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Prefix is !", {type: "PLAYING"});

});

bot.on("guildMemberAdd", async member =>{
  console.log(`${member.id} joined the server!`);

  let welcomechannel = message.guild.channel.find(`name`, "general");
  welcomechannel.send(`LOOK OUT EVERYONE! ${member} has joined the sever!`);
});
bot.on("guildMemberRemove", async member =>{
  console.log(`${member.id} left the server!`);

  let welcomechannel = message.guild.channel.find(`name`, "general");
  welcomechannel.send(`OH WOW! ${member} has said thier final goodbyes!`);
});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  // //let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  //
  // if(!prefixes[message.guild.id]){
  //   prefixes[message.guild.id] = {
  //     prefixes: botconfig.prefix
  //   };
  // }


  let prefix = botconfig.prefix;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if(commandfile) commandfile.run(bot, message, args)

});

bot.login(botconfig.token);
