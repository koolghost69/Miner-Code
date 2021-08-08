const discord = require("discord.js")

module.exports = {
    name: "getminer",
    execute(message, args) {
        var embed = new discord.MessageEmbed()
        .setTitle(`Mining Software`)
        .addField('Download the software here at our GitHub: ', '*Not ready yet*')
        .setFooter(`This software doesn't actually mine, it just checks for a random number. This allows for minimal CPU usage.`)
        .setColor('5865F2')
        message.channel.send(embed)
    }
}