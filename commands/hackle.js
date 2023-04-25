const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
//Erkek hacker yağ
  
 const user = message.mentions.users.first()
 if(!user) return message.channel.send("**Kimi hackleyeceğini belirt**")
  
  message.channel.send({
    embeds: [
      new EmbedBuilder()
      .setDescription("**<@"+user.id+"> Hackleniyor... 🧑‍💻**")
    .setDescription(message.author.username+  " Seni Haçkledi! H.o :smiling_imp: ")
     .setImage(`https://media.giphy.com/media/pOKrXLf9N5g76/giphy.gif`)
    ]//EssienGW
 
  })
  

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "hackle"
};
///Neran Code