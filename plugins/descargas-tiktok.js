import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}INGRESA UN ENLACE DE TIKTOK PARA DESCARGAR EL VIDEO\n\n*EJEMPLO:*\n${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1`
let res = await fetch("https://api.lolhuman.xyz/api/tiktok?apikey=c9b3628121d4a8adfbff2e11&url="+args[0])
let json = await res.json()

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

conn.reply(m.chat, `*Por favor espera...*🦁`)
await conn.sendFile(m.chat, json.result.link, 'error.mp4', `*Aquí tienes* 💕🦈`, fkontak, m,)

}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
export default handler