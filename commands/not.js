const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
    let not = debe.fetch(`not_${message.author.id}`)
    if (!not) return message.reply("> :x:| *Hiç* ___Notun___ Yok!")
const embed = new EmbedBuilder()
.setTitle("> **Buyur Kardeşim** *Notun;*")
.setDescription(not)
.setColor("#ff0000")
message.reply({embeds: [embed]})

}



exports.conf = {
  aliases: ["not","Notum","notun","NOT","NOTUM"]
}

exports.help = {
  name: "notum"
}///Neran Code