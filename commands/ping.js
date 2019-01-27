const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {



  message.channel.send(`Pong!`)
      console.log("ping (commande)" + log)


}
module.exports.help = {
  name:"ping"
}
