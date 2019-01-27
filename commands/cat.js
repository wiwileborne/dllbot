const Discord = require("discord.js");
const {get} = require("snekfetch");

module.exports.run = async (client, message, args, log) => {
  
  
 try {
               get('https://aws.random.cat/meow').then(response => {
                     message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
                     console.log("cat" + log);
                      })
                      } catch (e) {
                           console.log('Erreur de $cat');
                           }

}
module.exports.help = {
  name:"cat"
}
