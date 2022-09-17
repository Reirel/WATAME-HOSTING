import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}COLOQUE UNA PALABRA PARA BUSCAR UNA IMÁGEN\n\n*EJEMPLO:*\n${usedPrefix + command} Koalas`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `💞 𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼: ${text}`, `𝗚𝗼𝗼𝗴𝗹𝗲 | ${wm}`, link, link, '☘️ 𝙐𝙍𝙇', null, null, [
['𝗦𝗶𝗴𝘂𝗶𝗲𝗻𝘁𝗲 ➡️', `/imagen ${text}`],
['🔍 𝗣𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁', `#pinterest ${text}`],
['🐈 𝗠𝗲𝗻𝘂́', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
