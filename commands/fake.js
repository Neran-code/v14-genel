const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let üye = message.mentions.users.first();
  let mesaj = args.slice(1).join(" ");
  
  const embed1 = new Discord.EmbedBuilder()
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))

    .setColor("Red")
    .setDescription(
      `Birisini Etiketlemelisin. \n\n Örnek kullanım : **fake-mesaj** ***@kullanıcı*** **deneme**`
    );
  const embed2 = new Discord.EmbedBuilder()
    .setTimestamp()
    .setColor("Red")
    .setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))

    .setDescription(
      `Bir Mesaj Yazmalısın. \n\n Örnek kullanım : **fake-mesaj** ***@kullanıcı*** **deneme**`
    );

  if (!üye) return message.channel.send({ embeds: [embed1] });
  if (!mesaj) return message.channel.send({ embeds: [embed2] });


  let hook = await message.channel
.createWebhook({ name: üye.username, avatar: üye.avatarURL() })
.then(async (s) => {
   message.delete();
    await s.send({ content: `${mesaj}` });
    s.delete({ timeout: 300 });})
    .catch((err) => {
  return message.channel.send("Webhook oluşturma yetkim yok.");
});};
exports.conf = {
  aliases: ["fakemesaj"],
};

exports.help = {
  name: "fake-mesaj",
};///Neran Code