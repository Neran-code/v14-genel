
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
///Neran Code
  let voiceAdminSize = message.guild.members.cache.filter(x => x.voice.channel && x.permissions.has(PermissionsBitField.Flags.Administrator)).size || 0
  let voiceUnAdminSize = message.guild.members.cache.filter(x => x.voice.channel && !x.permissions.has(PermissionsBitField.Flags.Administrator)).size || 0
  let voiceSize =    message.guild.members.cache.filter(x => x.voice.channel).size || 0

  return message.reply({
    embeds: [
      new EmbedBuilder()
      .setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))
      .setColor("#00daff")
      .setTitle(`${message.guild.name} | Ses İnfoları`)
      .setDescription(`Sesteki *Yetkili* Kullanıcı Sayısı : **${voiceAdminSize}**\nSesteki *Yetkisiz* Kullanıcı Sayısı : **${voiceUnAdminSize}**\nSesteki *Toplam* Kullanıcı Sayısı : **${voiceSize}**`)
      .setTimestamp()  
    ]
  });
    

};
exports.conf = {
  aliases: ["voice","ses","SES","VOİCE","Ses","Voice"]
};

exports.help = {
  name: "voice"
};
