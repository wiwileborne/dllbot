const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {

      const rando_imgs = [
        'https://media.giphy.com/media/l378w70Nxv0alv2qk/giphy.gif',
        'https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif',
        'https://media.discordapp.net/attachments/310098134548086785/358719791491579906/tumblr_o7vb7mN1xE1vu3qn9o1_500.gif',
        'https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif',
        'https://media.giphy.com/media/6bWNHVAoj7tNS/giphy.gif',
        'https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif',
        'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif',
        'https://media.giphy.com/media/ULKnZ7hW07rlS/giphy.gif',
        'https://media.giphy.com/media/jRtGjzkm8JbRC/giphy.gif',
        'https://media.giphy.com/media/AYKv7lXcZSJig/giphy.gif',
        'https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif',
        ]
            message.channel.send(`${message.author} est triste`, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            });
          console.log("sad" + log)
        
}
module.exports.help = {
  name:"sad"
}
