const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
   const slots = ["⭐", "🔔","🍋"]
   const slot = ["⭐", "⭐", "🍒"]
   const slot2 = ["⭐", "⭐", "🍒"]
   const sonuc = `**${slots[Math.floor( Math.random() * 3 )]} : ${slots[Math.floor( Math.random() * 3 )]} : ${slots[Math.floor( Math.random() * 3 )]}**`
   const sonuc2 = `**${slot[Math.floor( Math.random() * 3 )]} : ${slot[Math.floor( Math.random() * 3 )]} : ${slot[Math.floor( Math.random() * 3 )]}**`
   const sonuc3 = `**${slot2[Math.floor( Math.random() * 3 )]} : ${slot2[Math.floor( Math.random() * 3 )]} : ${slot2[Math.floor( Math.random() * 3 )]}**`
   const embed = new EmbedBuilder()
   .setColor("#ff0000")
   .setDescription(`> ***Slot Döndü***
   **-------------**
${sonuc}
${sonuc2} ** <-** 
${sonuc3}
   **-------------**
   `)
   message.channel.send("**Slot Dönüyor...**").then(msg => {
       setTimeout(() => {
         
         msg.delete()
         message.channel.send({embeds: [embed]})  
         
       }, 3000);
   });
  
};
exports.conf = {
  aliases: ["Slot","SLOT"]
};

exports.help = {
  name: "slot"
};///Neran Code