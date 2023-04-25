const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("0x0000000000000004"))
    return message.reply("**Bu Komutu Kullanmaya Yetkin Yok !**");
///Neran Code
  if (!message.member.voice.channel)
    return message.reply("**:x: | Bir Ses Kanalında Değilsin !**");
  let csm = message.mentions.members.first();
  if (!csm)
    return message.reply(
      "**:x: | Yanına Hangi Kullanıcının Gelmesini İstiyorsan Onu Etiketlemen Gerek !**"
    );
  if (!csm.voice.channel)
    return message.reply(":x: | **Etiketlenen Kullanıcı Bir Sesli Kanalda Değil !**");
///Neran Code
  csm.voice.setChannel(message.member.voice.channelId)
  message.channel.send(":white_check_mark: |<@"+csm +"> **İsimli Kullanıcı Yanına Başarıyla Taşındı !**");
};

exports.conf = {
  aliases: ["çek","ÇEK","Çek","Taşı","Çağır"]
};
///Neran Code
exports.help = {
  name: "çek"
};