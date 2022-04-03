// Ajuda em: discord.gg/PEdmSZzCAv
const Discord = require("discord.js");
const fs = require('fs');
const fileName = 'medicosDB.json';
const edb = require("../DBRemedios.json");

var IdentidadeDiscord = [];
var IdentidadeDiscordNick = [];

//var stormedico = new Array();

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
var PresoTotal = 0;

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

function lerBanco (){
  var rawdata = fs.readFileSync(fileName);
  var foo = JSON.parse(rawdata);
  //console.log(foo);
  return foo;
}


function salvarNovoLimite() {
  
  //console.log("salvarNovoLimite")
  aaa.Inje = aaa.Inje + InjecaoCura;
  aaa.Bals = aaa.Bals + Balsamo;
  aaa.Poma = aaa.Poma + PomadaZinco;
  aaa.Xaro = aaa.Xaro + Xarope;

  if (foo !== undefined){ 
    fs.writeFile(fileName, JSON.stringify(foo, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
      //console.log(JSON.stringify(foo));
      console.log('Escrenvendo em: ' + fileName);
    });
  }
}

module.exports = {
    name: "encomenda V13",
    author: "Rafael At",

run: async(client, message, args) => {

    let cor_das_embeds = "RANDOM";

    foo = lerBanco();
    
    IdentidadeDiscord = message.author;
    IdentidadeDiscordNick = message.member.nickname;
    
    console.log("Id Discord (Pedido):")
    //console.log(typeof(IdentidadeDiscord.id))
    console.log(IdentidadeDiscord.id)
    console.log(message.member.nickname)
    
    var aaa = foo.results.find(item => item.id === IdentidadeDiscord.id)//parseInt(IdentidadeDiscord.id))
    //var aaab = foo.results.find(item => item.id === "1")//parseInt(IdentidadeDiscord.id))
    
    //console.log(aaa)
    if (aaa === undefined){ 
      console.log("Criando novo usuário:")
      console.log(IdentidadeDiscord.id) 
      //foo.results = 
      
      var adicaoBD = {
        "id": IdentidadeDiscord.id,
        "name": IdentidadeDiscord.username,
        "nick": IdentidadeDiscordNick,
        "Inje": 0,
        "Bals": 0,
        "Poma": 0,
        "Xaro": 0
      }

      foo.results[foo.results.length] = adicaoBD;
      
      if (foo !== undefined){ 
      fs.writeFile(fileName, JSON.stringify(foo, null, 2), function writeJSON(err) {
        if (err) return console.log(err);
        //console.log(JSON.stringify(foo));
        console.log('Escrenvendo em: ' + fileName);
      });
      }
      aaa = lerBanco();
      aaa = foo.results.find(item => item.id === IdentidadeDiscord.id)
    }

    //aaa.Inje++;

    /*
    fs.writeFile(fileName, JSON.stringify(foo, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
      //console.log(JSON.stringify(foo));
      console.log('writing to ' + fileName);
    });
    */

    InjLimit = aaa.Inje;
    BalLimit = aaa.Bals;
    PomLimit = aaa.Poma;
    XarLimit = aaa.Xaro;
 
    let embed_1 = new Discord.MessageEmbed()

    //IdentidadeDiscord = message.member.user.tag

    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
    //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`\n\n**__ESPERE TODAS AS REAÇÕES APARECEREM!__**\n\n**${message.member.nickname}, os comandos com as reações estão abaixo:**\n\n\`◀️\` ***Painel Inicial (Zerar pedido)***\n\`⏫\` ***Adicionar Tudo***\n\`💉\` ***Injeção de Cura***\n\`🍀\` ***Balsamo***\n\`🥫\` ***Pomada de Zinco***\n\`🍶\` ***Xarope***\n\`❌\` ***Fechar Painel***`)
    //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(cor_das_embeds);

    //message.reply({ content: `${message.author}`, embeds: [embed_1] }).then(msg => {
      message.reply({ embeds: [embed_1] }).then(msg => {

      msg.react("◀️"); msg.react("⏫"); msg.react("💉"); msg.react("🍀"); msg.react("🥫"); msg.react("🍶"); msg.react("✅"); msg.react("❌")

      let filtro_1 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id; let coletor_1 = msg.createReactionCollector({ filter: filtro_1});
      let filtro_10 = (r, u) => r.emoji.name === '⏫' && u.id === message.author.id; let coletor_10 = msg.createReactionCollector({ filter: filtro_10});
      let filtro_2 = (r, u) => r.emoji.name === '💉' && u.id === message.author.id; let coletor_2 = msg.createReactionCollector({ filter: filtro_2});
      let filtro_3 = (r, u) => r.emoji.name === '🍀' && u.id === message.author.id; let coletor_3 = msg.createReactionCollector({ filter: filtro_3});
      let filtro_4 = (r, u) => r.emoji.name === '🥫' && u.id === message.author.id; let coletor_4 = msg.createReactionCollector({ filter: filtro_4});
      let filtro_5 = (r, u) => r.emoji.name === '🍶' && u.id === message.author.id; let coletor_5 = msg.createReactionCollector({ filter: filtro_5});
      let filtro_6 = (r, u) => r.emoji.name === '✅' && u.id === message.author.id; let coletor_6 = msg.createReactionCollector({ filter: filtro_6});
      let filtro_7 = (r, u) => r.emoji.name === '❌' && u.id === message.author.id; let coletor_7 = msg.createReactionCollector({ filter: filtro_7});

      coletor_1.on("collect", (ralfa) => {
        
        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário
        InjecaoCura = 0; Balsamo = 0; PomadaZinco = 0; Xarope = 0; PrecoTotal = 0; PresoTotal = 0;
        let embed_2 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**__Olá ${message.member.nickname}, os comandos com as reações estão abaixo:__**\n\n\`◀️\` ***Painel Inicial (Zerar pedido)***\n\`💉\` ***Injeção de Cura***\n\`🍀\` ***Balsamo***\n\`🥫\` ***Pomada de Zinco***\n\`🍶\` ***Xarope***\n\`❌\` ***Fechar Painel***`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        //msg.edit({ content: `${message.author}`, embeds: [embed_2] });
        msg.edit({embeds: [embed_2] });


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
        .setDescription(`** \`${categoria}\` \n ${message.member.nickname} você encomendou:\n Injeções de Cura        ${InjecaoCura}/${Inj.LimiteMedico - aaa.Inje} \n Balsamo                                        ${Balsamo}/${Bal.LimiteMedico - aaa.Bals} \n Pomada de Zinco     ${PomadaZinco}/${Pom.LimiteMedico - aaa.Poma}  \n  Xarope                                              ${Xarope}/${Xar.LimiteMedico - aaa.Xaro} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        //msg.edit({ content: `${message.author}`, embeds: [embed_3] });
        msg.edit({ embeds: [embed_3] });


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
        .setDescription(`** \`${categoria}\` \n ${message.member.nickname} você encomendou:\n Injeções de Cura        ${InjecaoCura}/${Inj.LimiteMedico - aaa.Inje} \n Balsamo                                        ${Balsamo}/${Bal.LimiteMedico - aaa.Bals} \n Pomada de Zinco     ${PomadaZinco}/${Pom.LimiteMedico - aaa.Poma}  \n  Xarope                                              ${Xarope}/${Xar.LimiteMedico - aaa.Xaro} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ embeds: [embed_4] });

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
        .setDescription(`** \`${categoria}\` \n ${message.member.nickname} você encomendou:\n Injeções de Cura        ${InjecaoCura}/${Inj.LimiteMedico - aaa.Inje} \n Balsamo                                        ${Balsamo}/${Bal.LimiteMedico - aaa.Bals} \n Pomada de Zinco     ${PomadaZinco}/${Pom.LimiteMedico - aaa.Poma}  \n  Xarope                                              ${Xarope}/${Xar.LimiteMedico - aaa.Xaro} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ embeds: [embed_5] });

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
        .setDescription(`** \`${categoria}\` \n ${message.member.nickname} você encomendou:\n Injeções de Cura        ${InjecaoCura}/${Inj.LimiteMedico - aaa.Inje} \n Balsamo                                        ${Balsamo}/${Bal.LimiteMedico - aaa.Bals} \n Pomada de Zinco     ${PomadaZinco}/${Pom.LimiteMedico - aaa.Poma}  \n  Xarope                                              ${Xarope}/${Xar.LimiteMedico - aaa.Xaro} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ embeds: [embed_6] });
        
      });

      coletor_6.on("collect", (ralfa) => {

        PrecoTotal = (InjecaoCura * Inj.PrecoMedico) + (Balsamo * Bal.PrecoMedico) + (PomadaZinco * Pom.PrecoMedico) + (Xarope * Xar.PrecoMedico);
        PresoTotal = (InjecaoCura * Inj.Peso) + (Balsamo * Bal.Peso) + (PomadaZinco * Pom.Peso) + (Xarope * Xar.Peso);

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_7 = new Discord.MessageEmbed()

        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true })})
        //.setAuthor(`Fechando painel de pedidos ...`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);

        msg.edit({ embeds: [embed_7] });

        setTimeout( () => {

            msg.delete();


            if(InjecaoCura != 0 || Balsamo != 0 || PomadaZinco != 0 || Xarope != 0){

              limiteMedicamentos();
              //salvarNovoLimite();
              //console.log("salvarNovoLimite")
              aaa.Inje = aaa.Inje + InjecaoCura;
              aaa.Bals = aaa.Bals + Balsamo;
              aaa.Poma = aaa.Poma + PomadaZinco;
              aaa.Xaro = aaa.Xaro + Xarope;

              if (foo !== undefined){ 
                fs.writeFile(fileName, JSON.stringify(foo, null, 2), function writeJSON(err) {
                  if (err) return console.log(err);
                  //console.log(JSON.stringify(foo));
                  console.log('Escrenvendo em: ' + fileName);
                });
              

              let embed_8 = new Discord.MessageEmbed()

              //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
              //.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
              
              .setDescription(`**${message.member.nickname}**\n\n Seu pedido foi:\n\n**Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope}**\n -------------------------------------------\n**Total:                                                     ${PrecoTotal}$**\nPeso=${PresoTotal.toFixed(2)}Kg\n\nDiscord ID = ${IdentidadeDiscord.id}`)
              .setColor(cor_das_embeds);

              message.reply({ embeds: [embed_8] });
              //message.reply({ content: `${message.author}`, embeds: [embed_8] });
              }
            }else{
              let embed_8 = new Discord.MessageEmbed()
              .setDescription(`**${message.member.nickname}**\n\n __Você não encomendou nada__ \n\n Discord ID = ${IdentidadeDiscord.id}`)
              .setColor(cor_das_embeds);  
              message.reply({ embeds: [embed_8] });
            }

            InjecaoCura = 0;
            Balsamo     = 0;
            PomadaZinco = 0;
            Xarope      = 0;
            PrecoTotal = 0;
            PresoTotal = 0;
            
        }, 1000);
        
      });

      coletor_7.on("collect", (ralfa) => {

        ralfa.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_7 = new Discord.MessageEmbed()

        .setAuthor(`Fechando painel`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);

        msg.edit({ embeds: [embed_7] });

        setTimeout( () => {

            msg.delete();

            InjecaoCura = 0;
            Balsamo     = 0;
            PomadaZinco = 0;
            Xarope      = 0;
            PrecoTotal = 0;
            PresoTotal = 0;

            //let embed_8 = new Discord.MessageEmbed()

            //.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
            //.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            
            //.setDescription(`**${message.member.nickname}**\n\n Seu pedido foi:\n\n**Injeções de Cura        ${InjecaoCura} \n Balsamo                                        ${Balsamo} \n Pomada de Zinco     ${PomadaZinco}  \n  Xarope                                              ${Xarope}**\n -------------------------------------------\n**Total:                                                     ${PrecoTotal}$**\nPeso=${PresoTotal.toFixed(2)}Kg\n\nDiscord ID = ${IdentidadeDiscord.id}`)
            //.setColor(cor_das_embeds);

            //message.reply({ embeds: [embed_8] });
            //message.reply({ content: `${message.author}`, embeds: [embed_8] });
            let embed_8 = new Discord.MessageEmbed()
            .setDescription(`**${message.member.nickname}**\n\n __Você não encomendou nada__ \n\n Discord ID = ${IdentidadeDiscord.id}`)
            .setColor(cor_das_embeds);  
            message.reply({ embeds: [embed_8] });

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
        .setDescription(`** \`${categoria}\` \n ${message.member.nickname} você encomendou:\n Injeções de Cura        ${InjecaoCura}/${Inj.LimiteMedico - aaa.Inje} \n Balsamo                                        ${Balsamo}/${Bal.LimiteMedico - aaa.Bals} \n Pomada de Zinco     ${PomadaZinco}/${Pom.LimiteMedico - aaa.Poma}  \n  Xarope                                              ${Xarope}/${Xar.LimiteMedico - aaa.Xaro} \n\n...**`)
        //.setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ embeds: [embed_6] });
        
      });

    })
  }  
}

