const discord = require('discord.js')
module.exports = {
    name: 'profile',
    async execute(message, args, mongo) {
        var earlyuser = await mongo.fetch(`${message.author.id}.earlyuser`)
        if(earlyuser) {
            var earlyuser = 'yes'
        }else if(!earlyuser) {
            var earlyuser = 'no'
        }
        const profile = new discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Avatar`)
        .setDescription(` - Early User? | ${earlyuser}`)
        .setColor('5865F2')
        message.channel.send(profile)
    }
}