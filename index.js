var sleep = require('sleep')
var os = require('os')
var int = Math.floor(Math.random() * 99999999999999)
var start = int
var input = 1
var now = int % 2
var winning = Math.floor(Math.random() * 500)
var name = os.hostname()
var int = 0
var times = 0
var rl = require('readline')
const { Database } = require("quickmongo");
const mongo = new Database('mongodb+srv://DatabaseAccessBot:UxrGv6RkmCq26Ndk@cluster0.jxuwi.mongodb.net/chronoCoin')
const talkedRecently = new Set();
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook('https://discord.com/api/webhooks/873764541425680445/Sfam4FQ52JHEIWC4Da__wKKarR01VjGzNaTZGxYA6XLbhDjujMhppCoGh0n4me4f60DA');

const IMAGE_URL = 'https://cdn.discordapp.com/attachments/798714516275068940/873514924444356608/gigachad.png';
hook.setUsername('eCoin');
hook.setAvatar(IMAGE_URL);

var prompts = rl.createInterface(process.stdin, process.stdout)
prompts.question('What is your discord user ID? ', function(answer) {
(async () => {
const account = await mongo.fetch(`${answer}.key`) 


if(account) {   
    var prompts = rl.createInterface(process.stdin, process.stdout)
    prompts.question('What is your private key? ', function(key) {
        if(key === account) {

    (async () => { 
        var times = 0   
    while (true) {

        var int = Math.floor(Math.random() * 500)
        sleep.msleep(100)
        var times = times + 1
        console.log(int + `| ${winning}`)
        if(int === winning) {
                await mongo.add(`${answer}.bal`, 1)
            sleep.msleep(500)
            console.log('you have got a coin')
            
        }
    } 
})();
} else if (key !== account) return console.log('Your key does not match the key you specified')
});
    }else if(!account) return console.log('No account found with that ID!')

})();
});

//7
//38
//229
//1819
//643
//84
//138
//890
//706
//336

//average time out of 10 = 409, average seconds is 40






