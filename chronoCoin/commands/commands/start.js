


module.exports = {
    name: "start",
    async execute(message, args, mongo) {
        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 
         charactersLength));
           }
           return result;
        }
        const ifKey = await mongo.fetch(`${message.author.id}.key`)        
        if(!ifKey) {
            var privateKey = makeid(15)
        message.author.send(`Your private key is: ${privateKey} | Please use this to access your wallet **DO NOT SHARE THIS**`)
        message.channel.send(`Check your DMs\nPlease run -getminer to download the miner software`)
        await mongo.set(`${message.author.id}.key`, `${privateKey}`)
        await mongo.set(`${message.author.id}.bal`, 0)
        }
        if(ifKey) {
            message.channel.send(`You already have a private key. If your key has gone missing or has been removed, please DM any Developer.`)
        }
        
        
    }

}


