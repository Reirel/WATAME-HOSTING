import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}COLOQUE UNA PALABRA PARA BUSCAR UNA IMÃGEN\n\n*EJEMPLO:*\n${usedPrefix + command} Koalas`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `ð ð¥ð²ððð¹ðð®ð±ð¼: ${text}`, `ðð¼ð¼ð´ð¹ð² | ${wm}`, link, link, 'âï¸ ððð', null, null, [
['ð¦ð¶ð´ðð¶ð²ð»ðð² â¡ï¸', `/imagen ${text}`],
['ð ð£ð¶ð»ðð²ð¿ð²ðð', `#pinterest ${text}`],
['ð ð ð²ð»ðÌ', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
