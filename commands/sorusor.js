const Discord  = require('discord.js');
exports.run = async (client, message, args) => {

const soru = args.join(' ')
if (soru.length < 1) return message.reply('Cevaplamam için herhangi bir şey yazmalısın.');

let answers = [
'Kesinlikle evet.',
'Kesinlikle hayır.',
'Sen bilirsin.',
'Belki.',
'Olumlu görünüyor.',
`Olumlu görünmüyor.`,
`Bunu beğendim.`,
`Bunu beğenmedim.`,
`Bence haklı gibisin.`,
`Tekrar sor.`,
`Bence hayır.`,
`Bence evet.`,
`Neran Code Senin abin dostum.`,
`Bilmiyorum.`,
`Belki.`,
`Karnım aç düşünemiyorum.`,
`Götüne koyim.`,
`Yaaaaa Aşkooommmm.`,
`Bence maxx 1.`,
`Senin ben AMIK.`,


] 

const BallNumber = Math.floor(Math.random() * answers.length); 

const discord = new Discord.EmbedBuilder()
.setTitle(`${message.author.tag}`)
.setDescription(`**Soru :** \n  \`${soru}\` \n **Yanıtım :** \n \`${answers[BallNumber]}\``)
.setColor("White")
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
message.channel.send({embeds : [discord]})

}
exports.conf = {
aliases: ['tahminet', 'tahmin']
}

exports.help = {
name: 'tahminet'
}