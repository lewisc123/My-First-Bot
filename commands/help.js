const Discord = require("discord.js");
const fs = require("fs");
const commands = JSON.parse(fs.readFileSync("./commands.json", "utf8"));
let commandsFound = 0;
module.exports.run = async (bot, message, args) => {
const helpembed = new Discord.RichEmbed()
.setColor(0x1D82B6)





for (var cmd in commands) {

  if (commands[cmd].group === "user") {

    commandsFound++

  helpembed.addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${commands[cmd].usage}`);
  }

  helpembed.setFooter("Currently showing user commands. To view another group do Prefix help [group / commands]")
  helpembed.setDescription(`**${commandsFound} commands found** - [] Means It's required!`)
}
message.author.send(helpembed)
message.channel.send("Help Is On It's Way");
}




module.exports.help = {
  name: "help"
}
