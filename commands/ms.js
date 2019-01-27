const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {



const m = await message.channel.send("Voici voilà!");
      message.channel.send(`Ta latence: ${m.createdTimestamp - message.createdTimestamp}ms \nLatence du bot: ${Math.round(client.ping)}ms`)
      console.log("ms (commande)" + log)


}
module.exports.help = {
  name:"ms"
}
