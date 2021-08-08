const discord = require('discord.js')
module.exports = {
    name: "info",
    async execute(message, args) {
        
    const embed = new discord.MessageEmbed()
    .setTitle('Bot Info')
    .addField('This bot is created by X Æ A-Xii#2556 and Apple Inc.#5255', 'The cool devs ;)')
    .addField('The idea behind this bot came to decision after we played around with a cryptocurrency-esque contest.', 'The first name was actually "eCoin" before this bots development had begun.')
    .addField('Current version of Discord.JS being used:', '```v12.5.3```')
    .addField('Current version of quickmongo being used:', '```v3.0.2```')
    .setFooter('Bot Version is currently 0.1.0')
    .setColor('5865F2')
    message.channel.send(embed)
    }

}