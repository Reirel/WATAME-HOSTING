import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}INGRESA EL ENLACE DE YOUTUBE PARA DESCARGAR EL VIDEO\n\n*EJEMPLO:*\n${usedPrefix + command} https://youtu.be/85xI8WFMIUY`
let res = await fetch("https://api.lolhuman.xyz/api/ytvideo2?apikey=c9b3628121d4a8adfbff2e11&url="+args[0])
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

conn.sendFile(m.chat, json.result.link, 'error.mp4', `
╭━━❰ *YOUTUBE* ❱━━⬣
┃ 🤍 *TÍTULO*
┃ ${json.result.title}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧡 *PESO*
┃ ${json.result.size}
╰━━━━❰ *𓃠 ${vs}* ❱━━━⬣`.trim(), fkontak, m,)
}
handler.command = /^ytmp4$/i
export default handler