const Discord = require("discord.js");
module.exports = {
    name: "clear",
    author: "RAlfa",


run: async(client, message, args) => {

    let Clear_author = message.author;
    let Clear_msg_erro_sem_perm = "Você não possui a permissão \`Gerenciar Mensagens\`";
    let Clear_numeros = args[0];

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${Clear_author} ${Clear_msg_erro_sem_perm}.`);

  const Clear_contador_msg_del = parseInt(args[0], 10);

  let Clear_msg_erro_msgs_del = "Insira um número entre 1-99.";

  if (!Clear_contador_msg_del || Clear_contador_msg_del < 1 || Clear_contador_msg_del > 99) return message.channel.send(`:x: | ${Clear_author} ${Clear_msg_erro_msgs_del}`);

  const Clear_apagando_msg = await message.channel.messages.fetch({
    limit: Clear_contador_msg_del + 1
  });
  message.channel.bulkDelete(Clear_apagando_msg);
  //let msg_nao_embed = `✅ | ${Clear_author} apagou \`${Clear_numeros}\` mensagens!`;
  //let msg_embed = new Discord.MessageEmbed() .setColor("RANDOM") .setDescription(`${Clear_author} apagou \`${Clear_numeros}\` mensagens!`) .setFooter(`Limpeza realizada`, "http://2.bp.blogspot.com/-dcLYYffAv2w/U1E3Un7Ie1I/AAAAAAAAAAw/uYYS4DWtJBk/s1600/1.gif")
  //message.channel.send(msg_embed).then(msg => msg.delete({timeout: 9000}))
}};