import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝗖𝗢𝗟𝗢𝗤𝗨𝗘 𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 𝗔𝗟 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢 𝗗𝗘 𝗚𝗜𝗧𝗛𝗨𝗕\n\n*EJEMPLO:*\n${usedPrefix + command} https://github.com/Reirel/Watame-BOT`
if (!regex.test(args[0])) throw `${fg}𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 𝗡𝗢 𝗘𝗦 𝗩𝗔𝗟𝗜𝗗𝗢 𝗢 𝗘𝗟 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢 𝗘𝗦 𝗣𝗥𝗜𝗩𝗔𝗗𝗢!!`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}Enviando archivo, puede tomar tiempo 🚀`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.exp = 59
export default handler
