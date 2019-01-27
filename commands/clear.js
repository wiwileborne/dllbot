const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {



  if(message.member.roles.some(r=>["👑 Administrateur", "Technicien"].includes(r.name)) ) {
        let text = args.slice(1).join(" ");
        if(text == "confirm")
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length; 

            message.channel.sendMessage("Suppression des messages réussie. Total des messages supprimés : "+messagesDeleted).then(message => {
    message.delete(1000)})
            console.log('Suppression des messages réussie. Total des messages supprimés : '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);})
      }


}
module.exports.help = {
  name:"clear"
}
