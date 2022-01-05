const Discord = require('discord.js');
client = new Discord.Client();
const db = require('quick.db');
const config = require('../config.js')

exports.run = async(client, message, args) => {
let no = "830717573322113054"; 
let yes = "830717520943644702";
let n = no;
let y = yes;

let embed = new Discord.MessageEmbed().setFooter("Developed By Elysion.").setColor("RANDOM").setTimestamp();

if (!message.member.roles.cache.has("YEKİLİ ID") && !message.member.hasPermission("ADMINISTRATOR")) return; //sahiprolu

if(!args[0]) {
message.react(no);
message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Komutu yanlış kullandınız! ${config.prefix}taglıalım aç/kapat`)).then(x => x.delete({timeout: 5000}));
return;    
}
if (args[0] === "aç") {
if(db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten aktif!`)).then(x => x.delete({timeout: 5000}));
db.set(`taglıAlım.${message.guild.id}`, "taglıAlım")
message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Taglı alım sistemi aktif edildi!`)).then(x => x.delete({timeout: 5000}));
return;    
} else if (args[0] === "kapat") {
if(!db.fetch(`taglıAlım.${message.guild.id}`)) return message.channel.send(embed.setDescription(`${client.emojis.cache.get(no)} Taglı alım sistemi zaten devre dışı!`)).then(x => x.delete({timeout: 5000}));
db.delete(`taglıAlım.${message.guild.id}`)
message.channel.send(embed.setDescription(`${client.emojis.cache.get(yes)} Taglı alım sistemi devre dışı bırakıldı!`)).then(x => x.delete({timeout: 5000}));
return;    
};

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["taglıalım"],
    permLevel: 0,
  }
  
  exports.help = {
    name: 'taglıalım',
    usage: 'taglıalım aç/kapat'
    
  }