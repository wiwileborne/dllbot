const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {

      
	  
	  if(message.member.roles.some(r=>["👑 Administrateur", "Technicien"].includes(r.name)) ) {
      var deleteCount = parseInt(args[1], 10);
     deleteCount++
    
   const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    deleteCount--
     message.channel.send("J'ai supprimer "+deleteCount+" pour vous").then(message => {
    message.delete(1000)
     })
     }  
	  
}
module.exports.help = {
  name:"del"
}
    
