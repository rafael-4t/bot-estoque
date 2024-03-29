const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 

client.login(config.token); 

client.once('ready', async () => {

    console.log("✅ - Estou online!")
    //client.channels.cache.get("bot-estoque_medico-logs")
    //channel.send("message")
    //client.channels.fetch('922880975074127872').then(channel => channel.send(`Welcome, ${user}`))
    //client.channels.cache.get("bot-estoque_medico-logs").then(channel => channel.send('Welcome'))
})


client.on('message', msg =>{

    if(msg.content === 'bot?' || msg.content === 'Bot?') {
        
        let gifLinha = "https://cdn.discordapp.com/attachments/664842248328052765/811695564411371550/Linha.gif";
        //msg.reply(gifLinha)
        msg.channel.send(gifLinha);
        //msg.channel.send(`Encerrando a semana`);
        //msg.channel.send(gifLinha)
    }
  })


client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});