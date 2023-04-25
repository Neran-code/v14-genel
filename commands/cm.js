const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///Neran Code

  const random = Math.floor(Math.random() * 99) + 1
  
  message.channel.send(`Malafatın tam **${random}cm** :flushed:`)//EssiEnGw 1 Milyar Km

}

  exports.conf = {
  aliases: ["kaç-cm"]
};

exports.help = {
  name: "kaçcm"
};