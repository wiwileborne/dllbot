const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, log) => {
var avat;
var member;
   if(message.mentions.members.size == 1) {
     member = message.mentions.members.first()
  const avatarList = message.mentions.users.map(user => {

return avat = `${user.avatarURL}`

});
   }
  else{
   member = `${message.author}`
  avat = `${message.author.avatarURL}`
  }

  
    let embed = new Discord.RichEmbed()
  .setTitle("Avatar :")
  .addField("Avatar de",member)
  .setImage(avat)
  .setColor('#275BF0')
    message.channel.send(embed)

}
module.exports.help = {
  name:"avatar"
}
