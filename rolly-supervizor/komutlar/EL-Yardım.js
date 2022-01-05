const Discord = require('discord.js')
const config = require("../config.js");
exports.run = async (client, message, args) => {
        message.channel.send(new Discord.MessageEmbed().setDescription(`\
.afk [sebep]
.avatar \`@Rolly/ID\`
.ban \`@Rolly/ID\` [sebep]
.ban-bilgi \`@Rolly/ID\`
.family
.join
.dashboard
.ekip
.kayıtsız\`@Rolly/ID\`
.0092 \`@Rolly/ID\`
.isim \`@Rolly/ID\`
.jail \`@Rolly/ID\` [süre] [sebep]
.mute \`@Rolly/ID\` [süre] [sebep]
.voice-mute \`@Rolly/ID\` [süre] [sebep]
.unjail \`@Rolly/ID\`
.unmute \`@Rolly/ID\`
.unban \`@Rolly/ID\`
.kes \`@Rolly/ID\`
.ekip/ekle/sil/bilgi \`@Rolly/ID\`
.voice-unmute \`@Rolly/ID\`
.çek \`@Rolly/ID\`
.git \`@Rolly/ID\`
.kes \`@Rolly/ID\`
.kb \`@Rolly/ID\`
.fgit \`@Rolly/ID\`
.fçek \`@Rolly/ID\`
.ses-kontrol \`@Rolly/ID\`
.sicil-temizle \`@Rolly/ID\`
.sicil \`@Rolly/ID\`
.erkek \`@Rolly/ID\`
.kız   \`@Rolly/ID\`
.isimler \`@Rolly/ID\`
.cihaz \`@Rolly/ID\`
.uyarı ekle/sil/bilgi \`@Rolly/ID\`
.rolbilgi \`@Rol-Adı\` 
.spotyengel \`aç/kapat\` 
.rolinfo \`@Rol-Adı\`
.rolver \`@Rolly/İD\`
.rollog \`@Rol-Adı\`
.zengin [isim]
.say
.ses
.sil
.snipe
.toplutaşı
.yetkilises
.tagaldı \`@Rolly/İD\`
.tagliste \`@Rolly/İD\`
-----------------------

.vocal \`@Rolly/ID\`
.designer \`@Rolly/ID\`
.sponsor \`@Rolly/ID\`
.şair \`@Rolly/ID\`

`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
            .setFooter('Rolly was here ?')

            
        )
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["yardım"],
        permLevel: 0,
      }
      
      exports.help = {
        name: "yardım"
      };