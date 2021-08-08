const discord = require('discord.js')
module.exports = {
    name: 'bal',
    async execute(message, args, mongo) {
        const bal = `${await mongo.fetch(`${message.author.id}.bal`)}`
        if(bal) {
        const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s amount of cCoins`)
        .setDescription(`You have **${bal}** cCoin's`)
        .setColor('5865F2')
        message.channel.send(embed)
        } else if(!bal) {
            message.channel.send('You need to run the start command.')
        }
    }
}