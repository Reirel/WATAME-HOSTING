import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `๐ ๐ฎ๐ป๐๐ฒ๐น ๐๐\nWa.me/51931655706\n๐๐ฎ๐๐ฎ๐๐ผ๐-๐ ๐ ๐๐\nWa.me/593993684821\n\n๐งก *Estos son los contactos.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `โฆ ๐ช๐ฎ๐๐ฎ๐บ๐ฒ-๐๐ข๐ง เผ`,
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
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '๐ ๐๐ป๐ณ๐ผ๐ฟ๐บ๐ฎ๐ฐ๐ถ๐ผฬ๐ป'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|creadora|creador)$/i
export default handler 
