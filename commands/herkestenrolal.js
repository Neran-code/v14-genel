const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("Lütfen bir rol belirt.")
    message.guild.members.cache.forEach(arez => arez.roles.remove(rol.id))
    return message.reply(`> Herkesten **${rol.id}** *ID'li Rol Alınıyor.* **Bu İşlem Sunucunun Büyüklüğüne Göre Olarak Zaman Alabilir.**`)

};
exports.conf = {
  aliases: ["herkesten-rolal","Herkestenrolal","HERKESTENROLAL"]
};

exports.help = {
  name: "herkestenrolal"
};///Neran Code