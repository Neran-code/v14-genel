const Discord = require('discord.js');
const funnyWords = require('funny-words');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.channel.send(" Karıştırmak için yazı girmelisin.")
    message.channel.send(funnyWords(mesaj))
  message.react('✅')
}
module.exports.conf = {
aliases: ["karış"],
};
module.exports.help = {
  name: 'karıştır',
};///Neran Code