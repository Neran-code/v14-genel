const {
  PermissionsBitField,
  EmbedBuilder,
  ButtonStyle,
  Client,
  GatewayIntentBits,
  ChannelType,
  Partials,
  ActionRowBuilder,
  SelectMenuBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  InteractionType,
  SelectMenuInteraction,
  ButtonBuilder,
} = require("discord.js");
const config = require("./config.js");
const db = require("croxydb");
console.log(
  `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
);
const Discord = require("discord.js");
const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildBans, 
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions, 
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.DirectMessages, 
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.MessageContent, 
  ],
});

module.exports = client;

require("./events/message.js");
require("./events/ready.js");

client.login(process.env.TOKEN);

////Bu Altyapı 100% Neran Codeye Aittir Kullanılması ücretsizdir fakat çalınması kesinlikle yasaktır

//Neran Code 2023
client.on("messageCreate", (message) => {
  let saas = db.fetch(`saas_${message.guild.id}`);
  if (!saas) return;

  if (saas) {
    let selaamlar = message.content.toLowerCase();
    if (
      selaamlar === "sa" ||
      selaamlar === "slm" ||
      selaamlar === "sea" ||
      selaamlar === " selamünaleyküm" ||
      selaamlar === "Selamün Aleyküm" ||
      selaamlar === "selam"
    ) {
      message.channel.send(
        `<@${message.author.id}> Aleykümselam, Hoşgeldin ☺️`
      );
    }
  }
});




///Neran Code
client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.channel.send("Artık Afk Değilsiniz");
  }
///Neran Code
  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("Etiketlediyiniz Kullanıcı Şuanda Afk");
  }
});

client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let kufur = db.fetch(`kufurengel_${message.guild.id}`)
  if(!kufur) return;
  ///Neran Code
  if(kufur) {
  const kufurler = [
    
    "amk",
    "piç",
    "yarrak",
    "oç",
    "göt",
    "amq",
    "yavşak",
    "amcık",
    "amcı",
    "orospu",
    "sikim",
    "sikeyim",
    "aq",
    "mk",
    "sg",
    "sik",
    "siktirgit",
    "kahbe",
    "anneni"
  ]
  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Küfür Engel Sistemi Aktif! `)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {

  const linkler = [
    
    ".com.tr",
    ".net",
    ".org",
    ".tk",
    ".cf",
    ".gf",
    "https://",
    ".gq",
    "http://",
    ".com",
    ".gg",
    ".porn",
    ".edu",
    ".me"
       
  ]
  
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktif! `)
}
}
})
////Sayaç
client.on('guildMemberAdd', async member => {
  let sayac = db.fetch(`sayac_${member.guild.id}`)
  let kalan = sayac.sayi - member.guild.memberCount || '?'
  if(!kalan) return;
  if(!sayac) return;
  
  client.channels.cache.get(sayac.kanal).send(":mega: Hoşgeldin **"+member.user.username+"** Seninle Beraber `"+member.guild.memberCount+"` Kişi Olduk, `"+sayac.sayi+"` Kişi Olmamıza Son `"+kalan+"` Kişi Kaldı! :mega:")
  
});
client.on('guildMemberRemove', async member => {
  
  let sayac = db.fetch(`sayac_${member.guild.id}`)
  let kalan = sayac.sayi - member.guild.memberCount
  if(!sayac) return;
  
  client.channels.cache.get(sayac.kanal).send(":mega: Görüşürüz **"+member.user.username+"** Senin Yüzünden `"+member.guild.memberCount+"` Kişi Olduk! :mega:")
  
});
///Sayaç Son
///Oto Rol
client.on('guildMemberAdd', async member => {
  
  let otorol = db.fetch(`otorol_${member.guild.id}`)
  if(!otorol) return;
  
  client.channels.cache.get(otorol.kanal).send(":mega: **"+member.user.tag+"** Kullanıcı Katıldı! Gerekli Rolleri Verdim. :mega:")
  member.roles.add(otorol.rol).catch(() => {})
  
});
///Oto Rol Son
///
///Oto Cevap
client.on("messageCreate", async message => {
  
  const cmd = db.fetch(`otocevap_${message.content}`)
  if(!cmd) return;
  
  if(cmd) {
    message.reply({ content: `${cmd.answer}` })
  }

});
///Oto Cevap Son
///
////OTO TAG
client.on("guildMemberAdd", async member => {
  let ototag = db.get(`ototag_${member.guild.id}`);;
  if (ototag) return member.setNickname(`${ototag} ${member.user.username}`)
})
////OTO TAG SON
////
///Neran Code 2023❤