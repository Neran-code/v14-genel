const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("> :x: | **Yetersiz Yetki !**")
    let rolname = args[0]
    if (!rolname) return message.reply("> :warning: | Lütfen bir rol ismi gir!")
    message.guild.roles.create({name: rolname})
    message.reply("> *Belirtilen Rol* Başarıyla ___Açıldı___")
}
exports.conf = {
  aliases: ["rolaç","rololuştur","Rololuştur","ROLOLUŞTUR","rol-aç"]
};

exports.help = {
  name: "rol-oluştur"
};///Neran Code