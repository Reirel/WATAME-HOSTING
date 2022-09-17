import instagramGetUrl from 'fg-ig'
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

if (!args[0]) throw `${mg}INGRESE UN ENLACE DE INSTAGRAM PARA DESCARGAR EL VIDEO!\n\n*EJEMPLO:*\n${usedPrefix + command} https://www.instagram.com/tv/Cd8U99IloVA/?igshid=YmMyMTA2M2Y=`
let results = (await instagramGetUrl(args[0])).url_list[0]

conn.reply(m.chat, `*Por favor espera...*🦁`)
await conn.sendFile(m.chat, results, 'instagram.mp4', `*Aquí tienes* 💕🦈`,fkontak)}

handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70

export default handler