import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππ πππΏππ π πΎπΌππΌπ πΏπ ππππππ½π\n\nπππππ πππ ππΌππ ππ πΌ ππππππ½π πππΏππ ππ πΎππΌππππ`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
β¨ *${v.title}* 
π (${v.url})
β³ *DuraciΓ³n:* ${v.durationH}
π *Fecha:* de subida: ${v.durationH}
π *Vistas:* ${v.view} 
      `.trim()
      case 'channel': return `
β¨ *${v.channelName}* 
(${v.url})
π₯ *Subscriptores:* ${v.subscriberH} 
π₯ *Videos:* ${v.videoCount}  
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 4
export default handler
