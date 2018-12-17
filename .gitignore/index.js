const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setGame('vous aidez')
   })

bot.on('message', function (message)  {
    if (message.content === '!yt')  {
        message.channel.send('https://www.youtube.com/channel/UC9UTlVLJADlb3pdF8RmGrag Abonne-toi !')
    }
})

bot.on('message', function (message)  {
    if (message.content === '!twitter')  {
        message.channel.send('https://twitter.com/TDurzy Follow nous !')
    }
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        channel.send('Bienvenu sur le discord de la team Durzy !') 
    }).catch(console.error)
})




bot.login('NTI0MDE0NDM0NjU4NjgwODQz.Dvh77Q.4xVFiNwwQ_Ds4OSxYoksbdO5qPs')
