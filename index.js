var sleep = require('sleep')
var os = require('os')
var int = Math.floor(Math.random() * 99999999999999)
var start = int
var input = 1
var now = int % 2
var winning = Math.floor(Math.random() * 500000)
var name = os.hostname()
var int = 0
var times = 0
var rl = require('readline')
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/873488324759810078/sfj9Mk70v6T19AnCYfrCmY3wpMTudnGJdoQhw1QvutjaC9seBfxSX_dsohp8Dy7LlfUR");

const IMAGE_URL = 'https://cdn.discordapp.com/attachments/798714516275068940/873514924444356608/gigachad.png';
hook.setUsername('eCoin');
hook.setAvatar(IMAGE_URL);

var prompts = rl.createInterface(process.stdin, process.stdout)

    var times = 0
    while (true) {

        var int = Math.floor(Math.random() * 500000)
        sleep.msleep(100)
    
        console.log(int + `| ${winning}`)
        if(int === winning) {
            return hook.send(`WE have a winner there pc name is : ${name} (coin 1/5)`);
        }
    }    




