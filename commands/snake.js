const Discord = require("discord.js");
const { Snake } = require("discord-gamecord")
exports.run = async (client, message, args) => {

new Snake({
        message: message,
        embed: {
         title: 'Yılan Oyunu',  
         OverTitle: "Oyun Bitti.",},
          snake: { head: ':green_circle:', body: ':green_square:', tail: ':green_circle:' },
          emojis: {
          board: ':black_large_square:',
          food: ':apple:',
          up: ':arrow_up:',
          right: ':arrow_right:',
          down: ':arrow_down:',
          left: ':arrow_left:',},
          othersMessage: 'Butonları kullanmak için oyunu sen başlatmalısın.',
       }).startGame();},
  exports.conf = {
  aliases: ['yılan']};

exports.help = {
  name: "snake"
};///Neran Code