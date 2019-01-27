const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {
  
  
 const rando_imgs = [
        'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
        'https://media.giphy.com/media/3oEhmDMA4r9GxhwEqA/source.gif',
        'https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif',
        'https://media.giphy.com/media/u0bQN6bxXweHe/giphy.gif',
        'https://cdn.discordapp.com/attachments/289065437805805568/523467997814456340/image1.gif',
        'https://cdn.discordapp.com/attachments/289065437805805568/523467998355390465/image0.gif',
        ]
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} fait un câlin à ${member}`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
          console.log("hug" + log)
        }

}
module.exports.help = {
  name:"hug"
}
