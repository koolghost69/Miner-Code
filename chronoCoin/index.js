const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();
const fs = require('fs')

const { Database } = require("quickmongo");
const mongo = new Database('mongodb+srv://REDACTED')
const talkedRecently = new Set();

const prefix = "-"
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        client.commands.set(command.name, command);
    }
}

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const Discord = require('discord.js')
    const command = args.shift().toLowerCase();
    const bot = new Discord.Client()

    if(command === 'ping') {
        message.channel.send(`Matvea needs to eat **${client.ws.ping}** times`)
    }
    if(command === 'debug') {
        const msg = message
        var check = await mongo.fetch(`${msg.author.id}.ham-basic-Count`)
        console.log(await mongo.fetch(`${msg.author.id}.ham-basic`))
        console.log(check)
    }
    
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, mongo);
    } catch (error) {
        console.error(error);
        message.reply(`Problem executing this command seek Console for errror or view here: ||${error}||`);
    }
})


mongo.on("ready", () => {
    console.log("Database connected!");
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});


client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send(`Pong! | ${client.ws.ping}ms`);
  }
});

client.login('ODczNzIzMTYyNzEyNDczNjEw.YQ8kGg.ikQqu94od9Gv8UyBRDCfMDFtn-U');
