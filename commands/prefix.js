const db = require('quick.db');

module.exports = {
	name:'prefix',

	async run(message, args) {
		let prefix = db.get(`prefix_${message.guild.id}`)
		if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You don\'t have the permission(MANAGE_GUILD)')

		    if(!args[0]) return message.channel.send('Please provide a prefix');

				if(prefix === args[0]) return message.channel.send(`The prefix is already ${args[0]}`)

        if(args[1]) return message.channel.send('Please provide a prefix without spaces');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Set new prefix to ${args[0]}`)
	}
}