const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
let aciklama = args.slice(0).join(" ")
if (!aciklama) return message.reply("> :warning: | **Lütfen** *Kanal* ___Açıklamasını___ Yaz!")
let kanal = message.channel
client.channels.cache.get(message.channel.id).setTopic(aciklama)
message.reply("> :white_check_mark: | **Başarıyla** *Kanal* ___Açıklaması___ Değiştirildi!")


};
exports.conf = {
  aliases: ["kanalaçıklama"]
};

exports.help = {
  name: "kanal-açıklama"
};
