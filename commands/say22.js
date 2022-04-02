const Discord = require("discord.js");

module.exports = {
  name: "say",
  //o bot fala sua msg!

  run: async(client, message, args) => {

    const Clear_msg = await message.channel.messages.fetch({
      limit: 1
    });
    message.channel.bulkDelete(Clear_msg);

    /*
    if (args[0] === 'a'){
        message.channel.send(`args[0] === 'a'`)
    }else if (args[1] === 'b'){
        message.channel.send(`args[1] === 'b'`)
    }else if (Number.parseInt(args[1])){
        message.channel.send(`Numero + 2 = ${Number.parseInt(args[1], 10) + 2}`)
    }
    */
    let msg = args.join(" "); //setando....

    //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **GERENCIAR MENSAGENS**!`);


    if (!msg) return message.channel.send(`:x: | ${message.author} Você precisa escrever algo para eu falar!`); //verificando se há alguma mensagem

    //message.channel.send(`*Mensagem por: ${message.author}*

    message.channel.send(`${msg}`) //comando para o bot falar sua mensagem
  }
}