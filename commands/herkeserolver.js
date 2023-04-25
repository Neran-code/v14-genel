const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("Lütfen bir rol belirt.")
    message.guild.members.cache.forEach(arez => arez.roles.add(rol.id))
    return message.reply(`> Herkese **${rol.id}** *ID'li Rol Veriliyor.* **Bu İşlem Sunucunun Büyüklüğüne Göre Olarak Zaman Alabilir.**`)

};
exports.conf = {
  aliases: ["Herkeserolver","herkese-rolver","HERKESEROLVER"]
};

exports.help = {
  name: "herkeserolver"
};///Neran Code