// Ajuda em: discord.gg/PEdmSZzCAv
const Discord = require("discord.js");
const fs = require('fs');
//const fileName = 'medicosDB.json';
const fileName2 = 'DBpacientes.json';

//var IdentidadeDiscord = [];
//var IdentidadeDiscordNick = [];
var aaa2

function lerBanco2 (){
  var rawdata2 = fs.readFileSync(fileName2);
  var foo2 = JSON.parse(rawdata2);
  //console.log(foo);
  return foo2;
}

module.exports = {
    name: "segundou",
  
    run: async(client, message, args) => {
  
    foo2 = lerBanco2();
    let tamanho = parseInt(foo2.results.length, 10);
    let gifLinha = "https://cdn.discordapp.com/attachments/664842248328052765/811695564411371550/Linha.gif";


    //var aaa = foo.results.find(item => item.id === IdentidadeDiscord.id)//parseInt(IdentidadeDiscord.id))
    for( i = 0; i < tamanho ; i++){
        console.log(i)
        aaa2 = foo2.results[i]//parseInt(IdentidadeDiscord.id))
        aaa2.Inje = 0;
        aaa2.Bals = 0;
        aaa2.Poma = 0;
        aaa2.Xaro = 0;

        if (foo2 !== undefined){ 
            fs.writeFile(fileName2, JSON.stringify(foo2, null, 2), function writeJSON(err) {
              if (err) return console.log(err);
              console.log('Zerando medicamentos de: ' + fileName2);
            });
        }
    }

      const Clear_msg = await message.channel.messages.fetch({
        limit: 1
      });
      message.channel.bulkDelete(Clear_msg);
      message.channel.send(gifLinha)
      message.channel.send(`############### Nova semana ###############\n`) 
      message.channel.send(gifLinha)
    }
  }


