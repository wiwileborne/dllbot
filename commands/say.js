const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {
  console.log("say : " + log);
  
     if(message.member.hasPermission(r=>["ADMINISTRATOR *", "MANAGE_MESSAGES *"].includes(r.name)) ) {
        let text = args.slice(1).join(" ");
        message.delete();
        message.channel.send(text);
        console.log("say : " + text + log)
        }
  
}


module.exports.help = {
  name:"say"
}
