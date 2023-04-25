const Discord = require('discord.js');
var Jimp = require('jimp');

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.displayAvatarURL().replace("webp", "png"), (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://media.discordapp.net/attachments/552249354002628619/554073124279156748/prison_PNG29.png?width=300&height=300", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 0, 0).write(`./img/hapishane/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send({ files:[new Discord.AttachmentBuilder(`./img/hapishane/${bot.user.id}-${user.id}.png`)]})
                }, 1000);
            });
        });
    };

exports.conf = {
  aliases: ["hapis"]
};  

exports.help = {
  name: 'hapishane'
};///Neran Code