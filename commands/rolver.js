const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("> :x: | **Yetersiz Yetki !**")
    let user = message.mentions.users.first();
    let rol = message.mentions.roles.first();
    if(!user) return message.reply("> :warning: | Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
    if(!rol) return message.reply("> :warning: | Lütfen Verilicek Rolü Belirtiniz.")
    
    message.guild.members.cache.get(user.id).roles.add(rol)
  
    message.reply("> *Belirtilen Rol* Başarıyla ___Verildi___")
}
exports.conf = {
  aliases: ["rolver","Rolver","ROLVER"]
};

exports.help = {
  name: "rol-ver"
};///Neran Code