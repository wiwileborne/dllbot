const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {


 if(message.member.roles.some(r=>["👑 Administrateur", "Technicien"].includes(r.name)) ) {
        const embed = new Discord.RichEmbed()
        .setColor(0x1ABC9C)
        .setTitle("Listes des commandes importantes")
        .addField("$del X", "Supprime X messages")
        .addField("$clear confirm", "SSupprime tout les messages d'un channel")
        .addField('-poll "Question" CHOIX', "Créer un sondage")
        .addField("-log", "Accéder aux logs du channel")
        .addField("-rolemenu create NOMDUMENU -m IDDUMSG", "Attribution automatique à partir de réaction sur un message") 
        .addField("$say", "Ecrit un MSG a partir du bot") 
        .addField("-Warnings USER", "Liste de warn d'un membre")
        .addField("-warn USER RAISON", "Mettre un avertissement à un membre")
        .addField("-DelWarning IDWARN", "Enléve un avertissement à un membre")
        .addField("-Mute USER DURÉE RAISON", "Bannir un membre")
        .addField("-Unmute USER ", "Bannir un membre")
        .addField("-ban USER RAISON", "Bannir un membre")
        .addField("-stats", "Voir les stats du serveur")
        .addField("-Edit_Message [Nouvelle Règles]", "Modifié les règles")
        
        message.channel.send(embed);
        console.log("cmd" + log)
      }



}
module.exports.help = {
  name:"cmd"
}
