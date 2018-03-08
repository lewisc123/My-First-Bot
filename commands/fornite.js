const Discord = require("discord.js");
const Fortnite = require("fortnite");
const stats = new Fortnite("be5a05ed-4d88-45a1-9724-b48a0c41954d");

module.exports.run = async (bot, message, args) => {
 let platform;
 let username;

 if(!args[0]) return message.channel.send("**Please Include The Platform: xbl, psn or pc!** *The Command Should Look Like *!fortnite platform username.*");

 if(!args[1]) return message.channel.send("**Please Include The Username!** The Command Should Look Like *!fortnite platform username.*")

 platform = args.shift();
 username = args.join(" ");

 stats.getInfo(username, platform).then( data => {



const Fortnitembed = new Discord.RichEmbed()
.setColor("#42c2f4")
.setTitle(`Stats for ${data.username}`)
.addField(`**Top Placement**\n**Top 3s: *${data.lifetimeStats[0].value}*\n**Top 5s**:
   *${data.lifetimeStats[1].value}*\n *Top 6s**: *${data.lifetimeStats[3].value}*\n
**Top 12s**: *${data.lifetimeStats[4].value}*\n**Top 25s**: *${data.lifetimeStats[5].value}*`)
.setThumbnail("https://ih0.redbubble.net/image.505935508.2355/flat,1000x1000,075,f.u5.jpg")
.addField("Total Score", data.lifetimeStats[6].value, true)
.addField("Matches Played", data.lifetimeStats[7].value, true)
.addField("Wins", data.lifetimeStats[8].value, true)
.addField("Win Percentage", data.lifetimeStats[9].value, true)
.addField("Kills", data.lifetimeStats[10].value, true)
.addField("K/D Ratio", data.lifetimeStats[11].value, true)
.addField("Kills Per Minute", data.lifetimeStats[12].value, true)
.addField("Time Played", data.lifetimeStats[13].value, true)
.addField("Average Survival Time", data.lifetimeStats[14].value, true)

 message.channel.send(Fortnitembed);

})
.catch(error => {
    message.channel.send("Username Not Found!");

})
};




module.exports.help = {
  name: "fortnite"
}
