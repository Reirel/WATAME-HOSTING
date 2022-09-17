import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `𝗠𝗮𝗻𝘂𝗲𝗹 💖🐈\nWa.me/51931655706\n𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 💖🐈\nWa.me/593993684821\n\n🧡 *Estos son los contactos.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `✦ 𝗪𝗮𝘁𝗮𝗺𝗲-𝗕𝗢𝗧 ༄`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': false,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'BOT DE WHATSAPP',
'body': wm,
'thumbnail': fs.readFileSync('./media/watame/watame11.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '🍂 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼́𝗻'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler 
