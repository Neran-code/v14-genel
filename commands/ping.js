////Neran Code

const Discord = require('discord.js')
exports.run = async(client, message, args) => {

const ping = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Red)
.setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping)
message.channel.send({embeds: [ping]})
}
////Neran Code
exports.conf = {
  aliases: ['p', 'ms']
}

exports.help = {
  name: 'ping'
}
////Neran Code