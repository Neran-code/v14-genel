const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("> :x: | **Yetersiz Yetki !**")
        let user = message.mentions.users.first();
        if(!user) return message.reply("> :warning: | Lütfen *Atılacak* ___Kullanıcıyı___ Belirtiniz.")

const üye = message.guild.members.cache.get(user.id)
üye.kick()
message.reply("> :white_check_mark: | Kullanıcıyı *Başarıyla* ___Sunucudan___ Attım.")

}
  exports.conf = {
  aliases: ["at","Kick","At","SG"]
};

exports.help = {
  name: "kick"
};///Neran Code