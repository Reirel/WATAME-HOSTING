import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ ππππππ πππ πππΌπ "@"\nπππππππ\n*${usedPrefix + command} mundo_dos_animes81*\n\nππππ ππππ ππππππ ππππππΌππ πππππππ πππππ "@"\nπππΌππππ\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=c9b3628121d4a8adfbff2e11`
await conn.sendFile(m.chat, res, 'error.jpg', `β ππΌππΌ π±π² π£π²πΏπ³πΆπΉ`, m, false)
}

handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
