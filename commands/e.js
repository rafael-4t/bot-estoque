// Ajuda em: discord.gg/PEdmSZzCAv
const Discord = require("discord.js");
const edb = require("../DBRemedios.json");
//const mdb = require("../DBMedicos.json");
//const foo = require("../medicosDB.json");
//console.log(edb.Remedios[1]);

/*
var sammy = { 
  "first_name"  :  "Sammy", 
  "last_name"   :  "Shark", 
  "online"      :  true 
}
*/

var IdentidadeDiscord = [];
var stormedico = new Array();

var Inj = new Array();
Inj = edb.Remedios[0];
var Bal = new Array();
Bal = edb.Remedios[1];
var Pom = new Array();
Pom = edb.Remedios[2];
var Xar = new Array();
Xar = edb.Remedios[3];

var InjecaoCura = 0;
var Balsamo     = 0;
var PomadaZinco = 0;
var Xarope      = 0;
var PrecoTotal = 0;

var InjLimit = 0;
var BalLimit = 0;
var PomLimit = 0;
var XarLimit = 0;

function limiteMedicamentos() {
  
  if (InjecaoCura > (Inj.LimiteMedico - InjLimit) )  {    InjecaoCura = Inj.LimiteMedico - InjLimit;  }
  if (Balsamo > (Bal.LimiteMedico - BalLimit) )      {    Balsamo     = Bal.LimiteMedico - BalLimit;  }
  if (PomadaZinco > (Pom.LimiteMedico - PomLimit) )  {    PomadaZinco = Pom.LimiteMedico - PomLimit;  }
  if (Xarope > (Xar.LimiteMedico - XarLimit) )       {    Xarope      = Xar.LimiteMedico - XarLimit;  }
/*
  InjecaoCura = Inj.LimiteMedico;
  Balsamo     = Bal.LimiteMedico;
  PomadaZinco = Pom.LimiteMedico;
  Xarope      = Xar.LimiteMedico;
*/

}


/*
client.on('message', message => {
  console.log(message.author.id); // Expected output: '189746913631797249'
  console.log(message.author.username); // Expected output: 'Jimmy'
  message.channel.send(`Hello ${message.author.username}! Your id is ${message.author.id}!`);
})
*/
//IdentidadeDiscord = message.author;
//console.log(IdentidadeDiscord);


module.exports = {
    name: "encomenda V13",
    author: "Rafael At",

run: async(client, message, args) => {

    let cor_das_embeds = "RANDOM";

    var foo = require("../medicosDB.json");
    IdentidadeDiscord = message.author;
    console.log("Identidade Discord")
    console.log(IdentidadeDiscord);
    //stormedico = mdb.IdentidadeDiscord;
    //console.log(stormedico);

    console.log("Id:")
    //console.log(typeof(IdentidadeDiscord.id))
    console.log(IdentidadeDiscord.id)
    var aaa = foo.results.find(item => item.id === parseInt(IdentidadeDiscord.id))
    console.log("aa:")
    console.log(aaa)

    InjLimit = aaa.Inje;
    BalLimit = aaa.Bals;
    PomLimit = aaa.Poma;
    XarLimit = aaa.Xaro;

    let embed_1 = new Discord.MessageEmbed()

    //IdentidadeDiscord = message.member.user.tag

    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
    //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**__Olá ${message.author}, os comandos com as reações estão abaixo:__**\n\n\`◀️\` ***Painel Inicial (Zerar pedido)***\n\`💉\` ***Injeção de Cura***\n\`🍀\` ***Balsamo***\n\`🥫\` ***Pomada de Zinco***\n\`🍶\` ***Xarope***\n\`❌\` ***Fechar Painel***`)
    //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(cor_das_embeds);

    message.reply({ content: `${message.author}`, embeds: [embed_1] }).then(msg => {

      msg.react("◀️")
      msg.react("⏫")
      msg.react("💉")
      msg.react("🍀")
      msg.react("🥫")
      msg.react("🍶")
      msg.react("❌")

      let filtro_1 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id; let coletor_1 = msg.createReactionCollector({ filter: filtro_1});
      let filtro_10 = (r, u) => r.emoji.name === '⏫' && u.id === message.author.id; let coletor_10 = msg.createReactionCollector({ filter: filtro_10});
      let filtro_2 = (r, u) => r.emoji.name === '💉' && u.id === message.author.id; let coletor_2 = msg.createReactionCollector({ filter: filtro_2});
      let filtro_3 = (r, u) => r.emoji.name === '🍀' && u.id === message.author.id; let coletor_3 = msg.createReactionCollector({ filter: filtro_3});
      let filtro_4 = (r, u) => r.emoji.name === '🥫' && u.id === message.author.id; let coletor_4 = msg.createReactionCollector({ filter: filtro_4});
      let filtro_5 = (r, u) => r.emoji.name === '🍶' && u.id === message.author.id; let coletor_5 = msg.createReactionCollector({ filter: filtro_5});
      let filtro_6 = (r, u) => r.emoji.name === '❌' && u.id === message.author.id; let coletor_6 = msg.createReactionCollector({ filter: filtro_6});

      coletor_1.on("collect", (ralfa) => {
        
        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário
        InjecaoCura = 0; Balsamo = 0; PomadaZinco = 0; Xarope = 0; PrecoTotal = 0;
        let embed_2 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**__Olá ${message.author}, os comandos com as reações estão abaixo:__**\n\n\`◀️\` ***Painel Inicial (Zerar pedido)***\n\`💉\` ***Injeção de Cura***\n\`🍀\` ***Balsamo***\n\`🥫\` ***Pomada de Zinco***\n\`🍶\` ***Xarope***\n\`❌\` ***Fechar Painel***`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_2] });

      });


      coletor_2.on("collect", (ralfa) => {

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "+ 1 Injeção de Cura";

        InjecaoCura++;
        limiteMedicamentos();

        let embed_3 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`** \`${categoria}\` \n ${message.author} você encomendou:\n Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_3] });

      });

      coletor_3.on("collect", (ralfa) => {

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "+ 1 Balsamo";

        Balsamo++;
        limiteMedicamentos();

        let embed_4 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`** \`${categoria}\` \n ${message.author} você encomendou:\n Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_4] });

      });

      coletor_4.on("collect", (ralfa) => {

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "+ 1 Pomada de Zinco";

        PomadaZinco++;
        limiteMedicamentos();

        let embed_5 = new Discord.MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`** \`${categoria}\` \n ${message.author} você encomendou:\n Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_5] });

      });

      coletor_5.on("collect", (ralfa) => {

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "+ 1 Xarope";

        Xarope++;
        limiteMedicamentos();

        let embed_6 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`** \`${categoria}\` \n ${message.author} você encomendou:\n Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_6] });
        
      });

      coletor_6.on("collect", (ralfa) => {

        PrecoTotal = (InjecaoCura * Inj.PrecoMedico) + (Balsamo * Bal.PrecoMedico) + (PomadaZinco * Pom.PrecoMedico) + (Xarope * Xar.PrecoMedico);

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_7 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(`Fechando painel de pedidos ...`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_7] });

        setTimeout( () => {

            msg.delete();

            let embed_8 = new Discord.MessageEmbed()

            //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
            //.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            
            .setDescription(`**O painel de pedidos foi encerrado.\n\n Seu pedido foi:\nInjeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope} \n -------------------------------------------\nTotal:                                                     ${PrecoTotal}$\n\nDiscord ID = ${IdentidadeDiscord.id}**`)
            .setColor(cor_das_embeds);

            message.reply({ content: `${message.author}`, embeds: [embed_8] });

        }, 1000);
        
      });

      coletor_10.on("collect", (ralfa) => {

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Adicionado o máximo disponível";

        InjecaoCura = 99;
        Balsamo     = 99;
        PomadaZinco = 99;
        Xarope      = 99;

        limiteMedicamentos();

        let embed_6 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`** \`${categoria}\` \n ${message.author} você encomendou:\n Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_6] });
        
      });

    })
  }  
}

