const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("> :x: | **Yetersiz Yetki !**")
    let user = message.mentions.users.first();
    let rol = message.mentions.roles.first();
    if(!user) return message.reply("> :warning: | Lütfen Rolün Alınacağı Kişiyi Belirtiniz.")
    if(!rol) return message.reply("> :warning: | Lütfen Alınacak Rolü Belirtiniz.")
    
    message.guild.members.cache.get(user.id).roles.remove(rol)
  
    message.reply("> *Belirtilen Rol* Başarıyla ___Alındı___")
}
exports.conf = {
  aliases: ["rolal","Rolal","ROLAL"]
};

exports.help = {
  name: "rol-al"
};///Neran Code