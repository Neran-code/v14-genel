const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
 return message.channel.send("Bu Komutu Kullanmak için **Yönetici** iznine sahip olman lazım !");

  let user = message.mentions.users.first();
  let sebep = args.slice(1).join(" ") || `Belirtilmemiş!`;
  let yasaklayankisi = `${message.author.tag} - ${message.author.id}`;
  
  if (!user) return message.channel.send(`Sunucudan Yasaklamak İstediğin Kişiyi Etiketle!`);

  if (user == message.author) return message.channel.send(`Kendini Yasaklayamassın! 😁`); 
 
   const embed2 = new EmbedBuilder()
   .setTitle("Sunucudan Yasaklama!")
    .setDescription(`**Yasaklayan:** ${message.author.tag} \n**Yasaklanan:** ${user.tag}\n**Yasaklama Sebebi:** ${sebep}`)
    .setImage("https://media.discordapp.net/attachments/1020759447771025511/1067159910363713567/20230123_221156.gif");

  
  const userembed = new EmbedBuilder()
    .setColor("#00daff")
    .setTitle("**YASAKLANDIN**")
    .setDescription(`**${message.guild.name}** Sunucusundan **${sebep}** Sebebiyle Yasaklandın!`)
    .setImage("https://media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?cid=790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6&rid=giphy.gif");
   
 
  const neran = message.guild.members.cache.get(user.id)
  neran.send({embeds: [userembed]})
  
    neran.ban(neran, { reason: `${sebep} sebebinden ${yasaklayankisi} tarafından yasaklandı`})
    .catch(error => message.reply("Üyeyi Yasaklamak için Yetkim Yetmiyor 😥"));

  message.channel.send({embeds: [embed2]})

 
};
exports.conf = {
    aliases: ["yasakla"]
};

exports.help = {
    name: "ban"
};///Neran Code