const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
let not = args.slice(0).join(" ")
if (!not) return message.reply("> :x: | Lütfen *Bir* ___Not___ Yaz!")
message.reply("> :white_check_mark: | Notun *Başarıyla* ___Kayıt Edildi!___")
debe.set(`not_${message.author.id}`, not)
}



exports.conf = {
  aliases: ["notal","Notal","NOTAL"]
}

exports.help = {
  name: "not-al"
}///Neran Code