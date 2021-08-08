const discord = require('discord.js')

module.exports = {
    name: "buy-earlyuser",
    async execute(message, args, mongo) {
        const bal = await mongo.fetch(`${message.author.id}.bal`)
        const badge = await mongo.fetch(`${message.author.id}.earlyuser`)
        if(bal > 4) {
            if(!badge) {
                await mongo.subtract(`${message.author.id}.bal`, 5)
                await mongo.set(`${message.author.id}.earlyuser`, true).then(message.lineReply(`<a:confirm:861956256059228161> Thanks ${message.author.username} for being an early user, have a cool profile badge!`))
            }else if(badge === true) {
                return message.lineReply(`Sorry, you already own this you can't buy this again.`)
            }
        }else if(bal < 4) {
            return message.lineReply(`Sorry, you can't afford this yet.`)
        }
    }
}