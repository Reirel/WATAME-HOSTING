import { twitterdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

if (!args[0]) throw `${mg}INGRESA EL ENLACE DE UN VIDEO DE TWITTER\n*EJEMPLO:*\n\n*${usedPrefix + command} https://twitter.com/Animalesybichos/status/1564616107159330816?t=gKqUsstvflSp7Dhpe_nmDg&s=19*`
let res = await twitterdlv2(args[0])
const { url, quality, type } = res[1]

await conn.sendFile(m.chat, url, 'twitter' + (type == 'image' ? '.jpg' : '.mp4'), `✨ *Aquí tienes*`, fkontak)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((tw|twitter)(dl)?)$/i

export default handler