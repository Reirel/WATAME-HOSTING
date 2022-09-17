import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply(`${fg}EL VIDEO NO DEBE DURAR MAS DE 7 SEGUNDOS!`)
let img = await q.download?.()

if (!img) throw `${mg}RESPONDA A UNA IMAGEN, VIDEO O GIF CON EL COMANDO ${usedPrefix + command}`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply(`${mg}EL LINK O URL DEBE DE TERMINAR EN *.jpg*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command}* https://i.imgur.com/8fK4h6F.jpg\n\n𝙏𝙃𝙀 𝙇𝙄𝙉𝙆 𝙊𝙍 𝙐𝙍𝙇 𝙈𝙐𝙎𝙏 𝙀𝙉𝘿 𝙄𝙉*.jpg*\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command}* https://i.imgur.com/8fK4h6F.jpg`)
  
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

else throw `${fg}RESPONDA A UNA IMAGEN, VIDEO O GIF CON EL COMANDO ${usedPrefix + command}`

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
handler.exp = 200

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
