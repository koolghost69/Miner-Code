const discord = require("discord.js")

module.exports = {
    name: "getminer",
    execute(message, args) {
        var embed = new discord.MessageEmbed()
        .setTitle(`Mining Software`)
        .addField('Download the software here at our GitHub: ', 'https://github.com/koolghost69/coin1/tree/master')
        .addField('You can run our file through VirusTotal here:', 'https://www.virustotal.com/gui/file/3eef5a603ecef6e07687300bcd02627882261713138b7a3b75a2e1ac762a18c2/detection')
        .setFooter(`This software doesn't actually mine, it just checks for a random number. This allows for minimal CPU usage.`)
        .setColor('5865F2')
        message.channel.send(embed)
    }
}