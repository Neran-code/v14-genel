const { EmbedBuilder } = require("discord.js");
exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    const embed = new EmbedBuilder()
   .setTitle(`İşte Etiketlediğin Kullanıcının Avatarı`)   .
setThumbnail(message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL({ dynamic: true }))    
.setDescription(`**[PNG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "png")}) | [JPG](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "jpg")}) | [WEBP](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "webp")}) | [GIF](${user.displayAvatarURL({ dynamic: true, size: 1024 }).replace("webp", "gif")})**`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor("#0099ff")
    return message.reply({ embeds: [embed]}).catch(err => {})

}

exports.conf = {
aliases: ["avatar","pp","Avatar","AVATAR","Pp","PP"]
}

exports.help = {
name: "avatar"
};///Neran Code