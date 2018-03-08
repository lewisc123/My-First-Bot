const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let sicon = message.guild.iconURL;
    const serveremebed = new Discord.RichEmbed()
    .setDescription("**Sever Infomation**")
    .setThumbnail(sicon)
    .addField("Sever Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.guild.joinedAt)
    .addField("Total Members", message.guild.memberCount);



    return message.channel.send(serveremebed);
  }



module.exports.help = {
  name: "serverinfo"
}
