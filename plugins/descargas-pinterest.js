import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}COLOQUE EL NOMBRE DE ALGUN PERSONAE PARA BUSCAR EN PINTEREST\n\n*EJEMPLO:*\n${usedPrefix + command} Hatsune Miku` 
const json = await pinterest(text)
let image = json.getRandom()
let link = image
conn.sendHydrated(m.chat, `💞 𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼: ${text}`, `𝗣𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁 | ${wm}`, link, link, '☘️ 𝙐𝙍𝙇', null, null, [
['𝗦𝗶𝗴𝘂𝗶𝗲𝗻𝘁𝗲 ➡️', `/imagen ${text}`],
['🔍 𝗚𝗼𝗼𝗴𝗹𝗲', `#google ${text}`],
['🐈 𝗠𝗲𝗻𝘂́', `.menu`],  
], m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
