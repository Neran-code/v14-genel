const Discord = require("discord.js");
exports.run = async (client, message, args) => {

if (!message.member.permissions.has("0x0000000000000020")) return message.reply("**Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.**");
let neran = message.mentions.channels.first();
if (!neran) return message.reply("**:x: | Bir Kanal Etiketlemen Gerek!**");

/////Neran Code
let neranaçıklama = args.slice(1).join(" ");
if (!neranaçıklama) return message.reply("**:warning: | Ne Duyurusu Yapılacak Yazman Gerek!**");


let neranembed = new Discord.EmbedBuilder()
.setTitle("Neran Code")
.setColor(Discord.Colors.Blue)
.setDescription(`${neranaçıklama}`)
.setTimestamp()
.setFooter({ text:'Neran Code', iconURL: client.user.displayAvatarURL({dynamic: true})})
.setThumbnail(message.guild.iconURL())

neran.send({embeds: [neranembed]})

////Neran Code

}

exports.conf = {
aliases: []
}

exports.help = {
name: "embed"
}
