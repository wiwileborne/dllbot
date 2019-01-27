const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {



 const embed = new Discord.RichEmbed()
      .setColor(0x1ABC9C)
      .setTitle("Voilà !")
      .addField("Lien d'invitation", "https://discord.gg/JTTbgf9")
      message.channel.send(embed)
      console.log("invite" + log)


}
module.exports.help = {
  name:"invite"
}
