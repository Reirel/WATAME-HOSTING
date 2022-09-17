import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let text = `${rg}🚄 *VELOCIDAD:*\n *${speed}* *Milisegundos*`
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

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
