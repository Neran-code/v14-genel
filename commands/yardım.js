const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
 ///Neran Code
    const value = args[0]
  const embed = new diskord.EmbedBuilder()
  .setTitle("Neran Code - Kategoriler")
  .setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
  .setColor("#EB459E")
  .setTimestamp()  
  .setDescription(`**+yardım eğlence |** Eğlence Komutlarını Gösterir.\n**+yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n**+yardım yetkili |** Yetkili Komutlarını Gösterir.\n**+yardım ayarlamalı |** Ayarlamalı Komutları Gösterir.`)
  if(!args[0]) return message.channel.send({embeds: [embed]})

///Neran Code
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("Yetkili Yardım Komutları")
.setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
  .setColor("#EB459E")
  .setTimestamp()  
.setDescription("**+ban | **Belirlenen Kullanıcıyı Sunucudan Yasaklar\n**+kick | **Belirlenen Kullanıcıyı Sunucudan Atar\n**+unban | **Belirlenen Kullanıcının Yasağını Kaldırır\n**+yaz | **Bota Mesaj Yazdırır\n**+embed | **Embed Mesaj Atar\n**+rolal | **Kullanıcıdan Rol Alır\n**+rolver | **Kullanıcıya Rol Verir\n**+rololuştur | **Rol Oluşturur\n**+sil | **Mesaj Siler\n**+herkestenrolal | **Herkesten Rol Alır\n**+herkeserolver | **Herkese Rol Verir\n**+emojiekle | **Emoji Ekler\n**+çek | **Sesteki Kullanıcıyı Yanına Çeker\n**+küfürengel | **Küfür Engel Sistemi\n**+reklamengel | **Reklam Engel Sistemi\n**+sa-as | **SA-AS Açar/Kapatır\n**+yavaşmod |** Yavaş Mod Ayarlar\n**+seskanalıaç |** Ses Kanalı Açar açar\n**+otorol |** Otorol Sistemi Ayarlar\n**+sayaç |** Sayaç Ayarlar\n**+isimdeğiştir |** Belirtdiyiniz Kullanıcının İsmini Değişir\n**+oylama |** Oylama Yaparsınız\n**+otocevap |** Belirtilen Mesaja Oto Cevap Ekler")
message.channel.send({embeds: [embed]})
}
  ///Neran Code
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("Eğlence Yardım Komutları")
.setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
  .setColor("#EB459E")
  .setTimestamp()  
.setDescription("**+slot | **Slot Döndürür\n**+hackle | **Hacker Olursun\n**+yılan | **Yılan Oyunu Açar\n**+şanslısayım | **Şanslı Sayını Tahmin Eder\n**+emojiyazı | **Emoji Ile Yazı Yazdırır\n**+aşkölçer | **Aşk Ölçer\n**+kaçcm | **Kaç Santim Olduğunu Söyler\n**+tahminet | **Bot Dediğini Tahmin Eder\n**+adamol |** Adam Olursun\n**+hapisat |** Kullanıcıyı Hapise Atarsın\n**+fakemesaj |** Fake Mesaj Atarsınız")
message.channel.send({embeds: [embed]})
  ///Neran Code
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("Kullanıcı Yardım Komutları")
.setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
  .setColor("#EB459E")
  .setTimestamp()  
.setDescription("**+ses | **Sesteki Kullanıcılar Hakkında Bilgi Verir\n**+say | **Sunucudaki Kullanıcılar Hakkında Bilgi Verir\n**+radyo | **Radyo Dinletir\n**+ping | **Botun Pingini Gösterir\n**+notum | **Notunuzu Gösterir\n**+notal | **Not Alırsın \n**+kurucu | **Sunucunun Sahibini Gösterir\n**+istatistik | **Bot Hakkında Istatistikleri Gösterir\n**+avatar | **Kullanıcının Avatarını Gösterir\n**+afk | **AFK Kalırsın\n**+banner | ** Kullanıcının Kullandığı Banneri Gösterir\n**+sunucubilgi |** Sunucu Istatistiklerini Atar\n**+kullanıcı-bilgi |** Etiketlediyiniz Kullanıcı Hakkında Bilgi Verir")
message.channel.send({embeds: [embed]})
///Neran Code
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("Ayarlamalı Yardım Komutları")
.setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
  .setColor("#EB459E")
  .setTimestamp()  
.setDescription("**+küfürengel | **Küfür Engel Sistemi\n**+reklamengel | **Reklam Engel Sistemi\n**+sa-as | **SA-AS Açar/Kapatır\n**+yavaşmod |** Yavaş Mod Ayarlar\n**+otorol | **Otorol Sistemi Ayarlarsınız\n**+sayaç | **Sayaç Sistemi Ayarlarsınız\n**+ototag |** Oto Tag Sistemi Ayarlarsınız\n**+otocevap |** Belirtilen Mesaja Oto Cevap Eklersiniz")
message.channel.send({embeds: [embed]})
///Neran Code

}
}

////Neran Code
exports.conf = {
  aliases: ["yardım", "y" , "YARDIM" ]
}

exports.help = {
  name: "yardım"
}
///Neran Code