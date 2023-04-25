const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
    const user = message.mentions.users.first()
    if(!user) return message.reply("**:x: | Sarılmak istediğin kişiyi etiketlemelisin**")
  //EssienGw
   message.channel.send({
     embeds: [
       new EmbedBuilder()
       .setColor("#36393F")
       .setDescription(`<@${user.id}> **adlı kişiye sarıldın <3 **`)
       .setImage("https://images-ext-2.discordapp.net/external/bqiGJpt3e44HlYBFX5fkjqPYzYTYzbBC_LMG_PuOaxY/https/media.giphy.com/media/KL7xA3fLx7bna/giphy.gif")
     ]
   })

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "sarıl"
};///Neran Code
