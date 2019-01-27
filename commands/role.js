const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {
let text = args;
let textmention = args[2].toString(); 
textmention = args[2].substr(3, 18); // récupére l'id du role

  
     if(message.member.hasPermission(r=>["ADMINISTRATOR *", "MANAGE_ROLES *"].includes(r.name)) ) {
        
       
       if (text[1] == "create"){ 
         
       
        message.member.guild.createRole({
  name:args[2],
  color:"0x000000",
  permissions:[]
  });
       message.channel.send("Le Rôle "+args[2]+" à était crée");
       }
       
       
       else if (text[1] == "add") {
      
// message.channel.send(textmention); Affiche l'id du role
                message.member.addRole(textmention)
         
                message.reply(`Tu a le role: `+"\\<@&"+textmention+">")
       
       
     }
       
        }
  
  
}


module.exports.help = {
  name:"role"
}
