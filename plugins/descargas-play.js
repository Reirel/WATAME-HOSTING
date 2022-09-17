import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `${mg}ESCRIBA EL NOMBRE O TÍTULO\n\n*EJEMPLO:*\n${usedPrefix + command} Billie Eilish - Bellyache\n`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw `${fg}*NO SE PUDO ENCONTRAR EL AUDIO/VIDEO. INTENTE CON OTRO NOMBRE*\n\n`
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
╭━━━━━━━❰  *𓃠*  ❱━━━━━━━⬣
✦ *TÍTULO*
✦ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ *DESCRIPCIÓN*
✦ ${description}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ *PUBLICADO*
✦ ${publishedTime}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ *DURACIÓN*
✦ ${durationH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ *VISTAS*
✦ ${viewH}
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣`.trim(), wm, thumbnail, '', '', null, null, [
    ['𝗩𝗶𝗱𝗲𝗼 🎥', `${usedPrefix}ytmp4 ${url}`],
    ['𝗔𝘂𝗱𝗶𝗼 🎵', `${usedPrefix}yta ${url}`]
  ], m)
    
}catch(e){
m.reply(`${fg}*INTENTE DE NUEVO*`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
export default handler
