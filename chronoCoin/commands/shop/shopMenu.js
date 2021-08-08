const discord = require('discord.js')
module.exports = {
    name: 'shop',
    async execute(message, args, mongo) {
        if(args[0] === '1' || !args) {
        var shop = new discord.MessageEmbed()
        .setTitle(`Shop`)
        .addField('Early User Plaque - 5 cCoins', '-buy-earlyuser')
        .setColor('5865F2')
        message.channel.send(shop)
        }if (args[0] === '2') {
        var shop = new discord.MessageEmbed()
        .setTitle(`Shop #2`)
        .setColor('5865F2')
        message.channel.send(shop)
        }
    }
}