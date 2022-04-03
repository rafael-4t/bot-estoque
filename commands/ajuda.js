const Discord = require("discord.js");

module.exports = {
  name: "ajuda",
  //o bot fala sua msg!

  run: async(client, message, args) => {
    //let msg = args.join(" "); //setando....

    //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **GERENCIAR MENSAGENS**!`);


    //if (!msg) return message.channel.send(`:x: | ${message.author} Você precisa escrever algo para eu falar!`); //verificando se há alguma mensagem

    //message.channel.send(`*Mensagem por: ${message.author}*

    message.channel.send(`Os comandos disponíveis são:\n**__!ajuda__** - Para saber os comandos disponíveis\n**__!c__** - Para comprar medicamentos\n**__!v ID NOME__** - Para vender, ex: __!v 500 João Silva__\n**__!ping__** - Para ver a latencia do bot`) //comando para o bot falar sua mensagem
  }
}