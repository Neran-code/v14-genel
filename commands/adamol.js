const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
var user = message.mentions.users.first() || message.author;
if (!message.guild) user = message.author;
message.channel.send(`Fotoğraf işleniyor, lütfen bekleyin...`).then(async m => {

Jimp.read('https://cdn.discordapp.com/attachments/617672562281021459/617793751527718923/adamol_icin.jpg', (err, image) => {
image.resize(301, 168)
Jimp.read(user.displayAvatarURL().replace("webp", "png"), (err, avatar) => { //Dcs Ekibi
avatar.resize(100, 100)
image.composite(avatar, 70, 10).write(`./img/rip/${client.user.id}-${user.id}.png`);
setTimeout(function() {
m.edit({ content:"adam oldun karşim!!", files: [new Discord.AttachmentBuilder(`./img/rip/${client.user.id}-${user.id}.png`)]})
}, 1000);
});

})
})
}
exports.conf = {
aliases: ['adamol']
};
exports.help = {
name: 'adamol'
};///Neran Code