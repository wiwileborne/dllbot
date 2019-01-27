const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {

      
 if(message.member.hasPermission(r=>["ADMINISTRATOR *", "MANAGE_MESSAGES *"].includes(r.name)) ) {
        const embed = new Discord.RichEmbed()
        .setColor(0x1ABC9C)
        .setTitle("Liens utiles")
        .addField("Invitation", "https://discord.gg/JTTbgf9")
        .addField("YAGPDB.xyz Dashboard", "https://yagpdb.xyz/manage/289065437805805568/moderation")
        .addField("MEE6 DashBoard", "https://mee6.xyz/dashboard/289065437805805568")
        .addField("Code source", "https://glitch.com/edit/#!/dllbot (édité en temps réel)")
        message.channel.send(embed)
        console.log("link" + log)
      }	  
	  
	  
        
}
module.exports.help = {
  name:"link"
}
    
