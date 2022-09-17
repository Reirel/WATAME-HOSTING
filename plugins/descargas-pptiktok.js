import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 "@"\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} mundo_dos_animes81*\n\n𝙏𝙔𝙋𝙀 𝙔𝙊𝙐𝙍 𝙏𝙄𝙆𝙏𝙊𝙆 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙒𝙄𝙏𝙃𝙊𝙐𝙏 𝙐𝙎𝙄𝙉𝙂 "@"\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=c9b3628121d4a8adfbff2e11`
await conn.sendFile(m.chat, res, 'error.jpg', `✅ 𝗙𝗼𝘁𝗼 𝗱𝗲 𝗣𝗲𝗿𝗳𝗶𝗹`, m, false)
}

handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
