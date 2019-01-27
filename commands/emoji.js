const Discord = require("discord.js");
const {get} = require("snekfetch");

module.exports.run = async (client, message, args, log) => {
  
  
 let text = args.slice(1).join("");  
  var emoji = text
     if(message.member.roles.some(r=>["👑 Administrateur", "DJ"].includes(r.name)) ) {
       if (text == ""){ 
        
      
         message.channel.send('`$emoji lick`', {
                file: "https://cdn.glitch.com/94ceff3a-4eff-432f-a5e2-06fc042cc167%2Flick.gif"});
         
      console.log("Aide emoji")
       
       }
        }
    else
            message.delete();
            message.delete();
    message.channel.send(`de: ${message.author}`, {
      
      
                file: "https://servdiscord.000webhostapp.com/wp-content/emoji/"+emoji+".gif"
      
    
             //message.channel.send(`de: ${message.author}`, {
                //file: "https://servdiscord.000webhostapp.com/wp-content/emoji/"+emoji+".gif"
            });
    message.channel.send(`de: ${message.author}`, {file: "https://servdiscord.000webhostapp.com/wp-content/emoji/"+emoji+".png"});
          console.log("emoji" + log + " "+text)
  

}
module.exports.help = {
  name:"emoji"
}
