const { inspect } = require('util'), distube = require('../Modules/DisTube'), client = require('../Modules/Client'),
    { MessageEmbed, Message } = require('discord.js');
module.exports = {
    name: 'eval',
    /**
     * @param {Message} message 
     * @param {String[]} args 
     * @returns 
     */
    async run(message, args, cmd) {
        message.delete()
        if (message.author.id !== '700166055326384179') return;
        const code = args.join(' ')
        if (!code) return message.channel.send({ content: ':exclamation: **Harap masukkan eval yang akan dijalankan!**' })

        try {
            const result = await eval(code);
            let output = result

            if (typeof result !== 'string') {
                output = inspect(result)
            }

            message.channel.send({ content: `\`\`\`js\n${output}\`\`\``,}).catch(
                message.channel.send({ content: ':x: **Eval terlalu panjang untuk ditampilkan!**' }))
        } catch {
            message.channel.send({ content: ':x: **Eval tidak valid atau belum di import!**' })
        }

    }
}