const Discord = require('discord.js');
module.exports.run = async(client, message, args, tools) => {
  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator))
return message.reply
(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

if (args.slice(0).join(' ').length < 1) 
return message.reply('Lütfen oluşturacağım kanalın adını yaz.'); 

await message.guild.channels.create({
name: args.slice(0).join(' '),
type: Discord.ChannelType.GuildVoice,
permissionOverwrites: []
}).catch(async err => {
return message.reply(':x: | Kanal Oluşturulamadı').catch(err => { })
})
return message.reply(":white_check_mark: | Kanal oluşturuldu");
};

exports.conf = {
aliases: ["seskanalıaç"]
};
exports.help = {
name: 'ses-kanal-aç'
};///Neran Code