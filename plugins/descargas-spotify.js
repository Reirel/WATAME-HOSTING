import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}INGRESA UN ENLACE DE SPOTIFY PARA DESCARGAR LA CANCIÓN\n\n*EJEMPLO:*\n${usedPrefix + command} https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g?si=30cb2140f7ef4369`
let res = await fetch("https://api.lolhuman.xyz/api/spotify?apikey=c9b3628121d4a8adfbff2e11&url="+args[0])
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

await conn.sendFile(m.chat, json.result.thumbnail, 'error.mp4', `
╭━━❰ *YOUTUBE* ❱━━⬣
┃ 🤍 *TÍTULO*
┃ ${json.result.title}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧡 *ARTISTA*
┃ ${json.result.artists}
╰━━━━❰ *𓃠 ${vs}* ❱━━━⬣`.trim(), fkontak, m,)
await conn.sendFile(m.chat, json.result.link, 'error.mp4', `*Aquí tienes 💕🐬*`)
}
handler.help = ['spotify'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['spotify']
export default handler