const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require("fs");
const {get} = require("snekfetch");
const ms = require('ms');
const { MessageEmbed } = require('discord.js')
const token = process.env.TOKEN
const express = require('express');
const app = express();
const http = require('http');
const ytdl = require("ytdl-core");
const GOOGLE_API_KEY = process.env.GGAPI;
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(GOOGLE_API_KEY);
const { Util } = require('discord.js');
var queue = new Map();
var playing = 0;


app.get("/", (request, response) => {
  console.log("Ping");
  response.sendStatus(250);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


client.on('ready', () => {
  client.user.setPresence({ game: {name : " ⁣ ⁣$help | Ver1.02 " , type: 0}}); // 
  
  console.log(`Connecté en tant que ${client.user.tag}`);
  console.log(`=========COMMANDES=========`);
});
      

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
if(jsfile.length >= 1){
  console.log(jsfile);
  }
 
  jsfile.forEach((f, i) =>{
   
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    
    client.commands.set(props.help.name, props);
  });
});







client.on('message', async message => {


if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  const log = ' par @' + message.member.user.tag + ''
  

  let prefix = process.env.pref;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(" ");
 
if (cmd[0] == prefix) {
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  
  if(commandfile) commandfile.run(client,message,args,log);
  

}
  
  
  // -------- COMMANDES -------
    
	if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix)) return undefined;
  
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(message.guild.id);

	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

  // ------ FIN COMMANDES -----
  
  
  
  
//
//
// ---------------------------Commande musique-------------------
//
//
  
  

	if (command === 'p') {
    
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('Je suis désolé, mais tu dois être dans un canal vocal pour jouer de la musique !');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send("Je ne peux pas me connecter sur ce canal vocal, assurez-vous que j'ai les bonnes permissions !");
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send("Je ne peux pas parler sur ce canal vocal, assurez-vous que j'ai les bonnes permissions !");
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); 
				await handleVideo(video2, message, voiceChannel, true); 
			}
      
			return message.channel.send(`✅ Carpla: **${playlist.title}** a été ajouté dans le carpla !`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					message.channel.send(`
__**Sélection d'une musique:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Wesh tape une valleur de 1 à 10 dans le chat pour choisir un titre parmis cette séléction.
					`);
					
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('Aucune valeur saisie ou valeur invalide, annulation de la sélection vidéo.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('🆘 Il n\'y a aucun résultat de recherche!');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	} else if (command === 's') {
    
		if (!message.member.voiceChannel) return message.channel.send("Vous n'êtes pas dans le canal vocal du bot!");
		if (!serverQueue) return message.channel.send("Il n'y a rien que je puisse skip jouer pour toi.");
		serverQueue.connection.dispatcher.end('Skip !');
		return undefined;
    
	} else if (command === 'd') {
    
		if (!message.member.voiceChannel) return message.channel.send("Vous n'êtes pas dans le canal vocal du bot!");
		if (!serverQueue) return message.channel.send("Le Bot Musique est déja déconnecter !");
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Déconnection du channel..');
    var plays = 0;
		return undefined;
    
	} else if (command === 'voluvme') {
    if(message.member.roles.some(r=>["👑 Administrateur", "DJ"].includes(r.name)) ) {
		if (!message.member.voiceChannel) return message.channel.send("Vous n'êtes pas dans le canal vocal du bot!");
		if (!serverQueue) return message.channel.send("Il n'y a aucune chanson actuellement.");
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
    }
	} else if (command === 'c') {
		if (!serverQueue) return message.channel.send("Il n'y a aucune musique actuellement.");
		return message.channel.send(`🎶 En train de jouer : **${serverQueue.songs[0].title}**`);
	} else if (command === 'q') {
		if (!serverQueue) return message.channel.send("Il n'y a aucune musique dans le carpla.");
		return message.channel.send(`
__**Carpla:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**En train de jouer :** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'p') {
    if(message.member.roles.some(r=>["👑 Administrateur", "DJ"].includes(r.name)) ) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send("⏸ J'ai mis la musique en pause pour vous !");
    }
		
		return message.channel.send("Il n'y a rien à mettre en pause.");
    }
	} else if (command === 'r') {
    if(message.member.roles.some(r=>["👑 Administrateur", "DJ"].includes(r.name)) ) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send("▶ J'ai repris la musique pour vous !");
		}
		return message.channel.send("Il n'y a rien a reprendre actuellement.");
    }
  } 
  
})



//
//
// ---------------------------FONCTION-------------------
//
//


async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`Je n'ai pas pu rejoindre le channel vocale : ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`Je n'ai pas pu rejoindre le channel vocale : ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** a été ajouté dans le carpla !`);
	}
	return undefined;
}


function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
    var plays = 0;
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url),{ liveBuffer:500000,quality: 'lowest',filter: 'audioonly' })
		.on('end', reason => {
			if (reason === "Le flux n'est pas généré assez rapidement.") console.log('Chanson terminée.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Commence à jouer: **${song.title}**`)
  
   var plays = 1;
    
  
}




client.login(token);
