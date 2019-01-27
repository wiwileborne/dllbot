const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {
  
  const rando_imgs = [
        'https://previews.123rf.com/images/vbaleha/vbaleha1403/vbaleha140300260/26742811-old-woman-with-pistol-on-a-white-background.jpg',
        'https://st.depositphotos.com/1912933/4286/i/950/depositphotos_42865905-stock-photo-old-woman-with-pistol.jpg',
        'https://image.shutterstock.com/image-photo/old-woman-pistol-on-white-450w-181843424.jpg',
        'https://thumbs.dreamstime.com/z/portrait-happy-old-woman-pointing-upwards-white-background-32492591.jpg',
        'https://image.shutterstock.com/display_pic_with_logo/1323004/122204155/stock-photo-old-woman-with-photo-camera-on-white-background-122204155.jpg',
        ]
              message.channel.send(``, {
                file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]   
            });
          console.log("vieille" + log)

}
module.exports.help = {
  name:"vielle"
}
