const Discord = require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);

module.exports.run = async (client, message, args, log) => {


message.channel.send("Le dé roule...")
        .then(message => message.edit(`Le numéro du dé est ${rand()}`));
        console.log(`dice ${rand()}`)



}
module.exports.help = {
  name:"dice"
}
