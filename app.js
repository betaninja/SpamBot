/**
 * Made by Facto on 09/03/2018
 */

 const Discord = require('discord.js');
 const client = new Discord.Client();
 const config = require('./config.json');

// Ready event

 client.on('ready', () => {
     console.log(`Ready to spam some nerds on ${client.user.tag}!`);
 });

 // Prefix
 var prefix = config.prefix
 // Calls the message emitter
 client.on('message', msg => {
     // Cancels event if bot executed it OR was executed in DMS.
    if (msg.author.bot || !msg.guild) return;

    if (msg.content.startsWith(prefix + 'ping')) {
        msg.channel.send('Pong!');
    } else {
        if (msg.content.startsWith(prefix + 'start')) {
            const user = msg.mentions.users.first();
            if (msg.mentions.users.size < 1) return msg.channel.send(':x: Invalid mention');
            setInterval(function(){msg.channel.send(`<@${user.id}>`); }, 3000);
            msg.channel.send(`Now spamming ${user.tag} at 3 second intervals!`);
        } else {
            if (msg.content.startsWith(prefix + 'stop')) {
                process.exit();
            }
        }
    }
 });

 client.login(config.token);