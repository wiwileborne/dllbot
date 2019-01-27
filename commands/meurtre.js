const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {
  
  if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
          const rando_imgs = [
        'https://cdn.discordapp.com/attachments/289065437805805568/530150304554156063/unknown.png',
            'http://xalimasn.com/wp-content/uploads/2018/01/meurtre.jpg',
            'http://galeriegothik.g.a.pic.centerblog.net/x2ctay3e.jpg',
            
        ]
              message.channel.send(`${message.author} assassine ${member}`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]   
            });
          console.log("meurtre" + log)
        
        }

}
module.exports.help = {
  name:"meurtre"
}
