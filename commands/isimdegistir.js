
const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
  ///Neran Code
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send("Gerekli Yetkin Yok!")
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
let isim = args.slice(1).join(" ")///NeranCode
if (!isim) message.reply("Lütfen bir isim girin!")
kullanıcı.setNickname(isim)
message.reply("Başarıyla kullanıcının adı değiştirildi")
///Neran Code
};
exports.conf = {
  aliases: []
};
///Neran Code
exports.help = {
  name: "isimdeğiştir"
};
