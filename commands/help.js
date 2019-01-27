const Discord = require("discord.js");

module.exports.run = async (client, message, args, log) => {


let text = args.slice(1).join("");   
     if (text == ""){ 
      const embed = new Discord.RichEmbed()
      .setColor(0x1ABC9C)
      .setTitle("Listes des commandes")
      .addField("$cmd", "Afficher les commandes d'Administrateur importantes (Admin et Technicien)")
      .addField("$link", "Afficher les liens utiles pour (Admin et Technicien)")
      .addField("$invite", "Afficher le lien d'invitation")
      .addField("$ping", "Tester le bot")
      .addField("$dice", "Sort un chiffre aléatoire entre 1 et 6")
      .addField("$cat", "Affiche une image de chat aléatoire")
      .addField("$hug (utilisateur)", "Faite un câlin à quelqu'un !")
      .addField("$sad", "Vous êtes triste")
      .addField("$avatar", "Affiche votre avatar")
      .addField("$meurtre @membre", "Assassine un membre")
      .addField("$help musique", "Affiche l'aide musique")
      .addField("$ms", "Affiche ta latence et celle du bot")
      .addField("⭐ Devs ", "@kodle#1362 et @wiwileborne#3935")
      .addField("⭐ Site", "https://www.kodle.me/dllbot.html")
      message.channel.send(embed);
      console.log("help" + log)
        }
    else if(message.member.hasPermission(r=>["ADMINISTRATOR *", "MANAGE_MESSAGES *"].includes(r.name)) || message.member.roles.some(r=>["⁣ ⁣ ⁣  ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ DJ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣ ⁣⁣ ⁣"].includes(r.name)) ) {
        if(text == "musique"){
          const embed = new Discord.RichEmbed()
      .setColor(0x1ABC9C)
      .addField("$play RECHERCHE", "Fait une recherche sur YT,si un tableau s'affiche entrer le nombre de la mus voulut")
      .addField("$play LIEN", "Joue la musique voulut")    
      .addField("$skip", "Passe la musique")
      .addField("$disconnect", "Déconnecte le Bot musique")
      .addField("$current", "Affiche la musique jouer")  
      .addField("$volume X", "Set le Volume de base du Bot Musique")
      .addField("$pause", "Met en pause la musique")
      .addField("$resume", "Reprend la musique")
      message.channel.send(embed);
      console.log("help musique" + log)  
          }
        }
    else if(text == "musique"){      
       const embed = new Discord.RichEmbed()
      .setColor(0x1ABC9C)
      .addField("$play RECHERCHE", "Fait une recherche sur YT,si un tableau s'affiche entrer le nombre de la mus voulut")
      .addField("$play LIEN", "Joue la musique voulut")    
      .addField("$skip", "Passe la musique")
      .addField("$disconnect", "Déconnecte le Bot musique")
      .addField("$current", "Affiche la musique jouer")  
      message.channel.send(embed);
      console.log("help musique" + log)   
    } 



}
module.exports.help = {
  name:"help"
}
