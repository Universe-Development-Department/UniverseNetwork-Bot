module.exports = () => {
    const c = require('../../Modules/Client'),
        v = process.env.Version || require('../../config.json').Version;
    console.log(c.user.username + ' Bot is online')
    setInterval(async () => {
//        let t = require('moment-timezone')(),
//            ck = require('../../Schema/Clock'),
//            jakarta = t.tz('Asia/Jakarta'),
//            wib = jakarta.format('HH:mm'),
//            wita = t.tz('Asia/Irkutsk').format('HH:mm'),
//            wit = t.tz('Asia/Jayapura').format('HH:mm'),
//            d = `📅┊${jakarta.date()} - ${jakarta.month()} - ${jakarta.year()}`
       let status = [
            'Versi ' + v,
            'Dibuat Oleh ARVIN3108 ID',
            'IP: play.universenetwork.id']
//            data = await ck.findOne({ Guild: '761872006513033238' }).catch(e => console.log(e));
        c.user.setActivity(status[Math.floor(Math.random() * status.length)])
//        if (c.channels.cache.get(data.WIB).name !== `『🕑』${wib}『WIB』` || c.channels.cache.get(data.WITA).name !== `『🕒』${wita}『WITA』` || c.channels.cache.get(data.WIT).name !== `『🕕』${wit}『WIT』`) {
//            c.channels.cache.get(data.WIB).delete();
//            c.channels.cache.get(data.WITA).delete();
//            c.channels.cache.get(data.WIT).delete();
//            c.guilds.cache.get(data.Guild).channels.create(`『🕑』${wib}『WIB』`, {
//                type: 'voice',
//                parent: data.Parent,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        deny: ['CONNECT'],
//                        allow: ['VIEW_CHANNEL']
//                    }
//                ]
//            }).then(wibch => c.guilds.cache.get(data.Guild).channels.create(`『🕒』${wita}『WITA』`, {
//                type: 'voice',
//                parent: data.Parent,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        deny: ['CONNECT'],
//                        allow: ['VIEW_CHANNEL']
//                    }
//                ]
//            }).then(witach => c.guilds.cache.get(data.Guild).channels.create(`『🕕』${wit}『WIT』`, {
//                type: 'voice',
//                parent: data.Parent,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        deny: ['CONNECT'],
//                        allow: ['VIEW_CHANNEL']
//                    }
//                ]
//            }).then(witch => ck.findOneAndUpdate({ Guild: data.Guild }, {
//                WIB: wibch.id,
//                WITA: witach.id,
//                WIT: witch.id
//            }))));
//        }
//        if (c.channels.cache.get(data.Parent).name !== d) {
//            c.channels.cache.get(data.WIB).delete();
//            c.channels.cache.get(data.WITA).delete();
//            c.channels.cache.get(data.WIT).delete();
//            c.channels.cache.get(data.Parent).delete();
//            c.guilds.cache.get(data.Guild).channels.create(d, {
//                type: 'category',
//                position: 0,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        allow: ['VIEW_CHANNEL'],
//                        deny: ['CONNECT']
//                    }
//                ]
//            }).then(ch => c.guilds.cache.get(data.Guild).channels.create(`『🕑』${wib}『WIB』`, {
//                type: 'voice',
//                parent: ch.id,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        deny: ['CONNECT'],
//                        allow: ['VIEW_CHANNEL']
//                    }
//                ]
//            }).then(wibch => c.guilds.cache.get(data.Guild).channels.create(`『🕒』${wita}『WITA』`, {
//                type: 'voice',
//                parent: ch.id,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        deny: ['CONNECT'],
//                        allow: ['VIEW_CHANNEL']
//                    }
//                ]
//            }).then(witach => c.guilds.cache.get(data.Guild).channels.create(`『🕕』${wit}『WIT』`, {
//                type: 'voice',
//                parent: ch.id,
//                permissionOverwrites: [
//                    {
//                        id: data.Guild,
//                        deny: ['CONNECT'],
//                        allow: ['VIEW_CHANNEL']
//                    }
//                ]
//            }).then(witch => ck.findOneAndUpdate({ Guild: data.Guild }, {
//                Parent: ch.id,
//                WIB: wibch.id,
//                WITA: witach.id,
//                WIT: witch.id
//            })))));
//            client.channels.cache.get('852692106731585576').delete()
//            client.channels.cache.get('852664428117622784').delete()
//        }
    }, 1000)
}