const Discord = require('discord.js');
const math = require('math-expression-evaluator') 

exports.run = function(client, message, args) {
    const owner = message.guild.members.cache.get(message.guild.ownerId);
message.reply(`> **Bu Sunucunun Sahibi**: <@${owner.user.id}> *Kullanıcıdır.*`)
///Neran Code

};  

exports.conf = {
aliases: ["KURUCU", "Kurucu" , "owner","OWNER"]
}; 

exports.help = {
name: 'kurucu'
};///Neran Code