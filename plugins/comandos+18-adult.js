import axios from "axios" 
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${ag}ððð ð¾ððð¼ðð¿ðð +18 ðððð¼ð ð¿ððð¼ð¾ðððð¼ð¿ðð ððð #ð¤ð£ ð¢ð¤ðð¤ðð¤ð§ð£ð® ðð¼ðð¼ ð¼ð¾ðððð¼ð\n\n+18 ð¾ðððð¼ðð¿ð ð¼ðð ð¿ððð¼ð½ððð¿ ððð #ð¤ð£ ð¢ð¤ðð¤ðð¤ð§ð£ð® ðð ððð¼ð½ðð`   
if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=c9b3628121d4a8adfbff2e11`) 
conn.sendButton(m.chat, `AquÃ­ tienes ðð¬`.trim(), wm, haha.data, [['ð¦ððð¨ððð¡ð§ð â¡ï¸', `/${command}`]], m)}
if (command == 'nsfwfoot') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'nsfwass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'nsfwbdsm') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'nsfwcum') {
let haha = await conn.getFile(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=c9b3628121d4a8adfbff2e11`)
conn.sendButton(m.chat, `AquÃ­ tienes ðð¬`.trim(), wm, haha.data, [['ð¦ððð¨ððð¡ð§ð â¡ï¸', `/${command}`]], m)}    
if (command == 'nsfwero') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'nsfwfemdom') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}     
if (command == 'nsfwglass') {
let haha = await conn.getFile(`https://api-alc.herokuapp.com/api/nsfw/foot?apikey=ConfuMods`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}    
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), wm, haha.data, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'tetas') {
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'booty') {
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'ecchi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/ecchi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)} 
if (command == 'furro') {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)} 
if (command == 'trapito') {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)} 
if (command == 'imagenlesbians') {
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}     
if (command == 'panties') {
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'pene') {
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'porno') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'porno2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/porngif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'randomxxx') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'pechos') {
let res = await axios("https://meme-api.herokuapp.com/gimme/sideboobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'yaoi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'yaoi2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'yuri') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yuri")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
if (command == 'yuri2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yurigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['ð¥µ ððððððððð | ðððð', `/${command}`]], m)}
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy',  'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'trapito', 'imagenlesbians', 'pene', 'porno', 'porno2', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy',  'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'trapito', 'imagenlesbians', 'pene', 'porno', 'porno2', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
handler.level = 3
export default  handler


/*import util from 'util'
import path from 'path'
import fs from 'fs'

let caption = `
ð¥µð¥ð¥ð¥ð¥
`.trim()

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[âððððâ] ð»ð¾ð ð²ð¾ð¼ð°ð½ð³ð¾ð +ð·ð¾ ð´ððð°ð½ ð³ð´ðð°ð²ðð¸ðð°ð³ð¾ð ð´ð½ ð´ððð´ ð¶ððð¿ð¾, ðð¸ ð´ð ð°ð³ð¼ð¸ð½ ð ð³ð´ðð´ð° ð°ð²ðð¸ðð°ðð»ð¾ð ððð´ ð´ð» ð²ð¾ð¼ð°ð½ð³ð¾ #enable modohorny*' 

let video = fs.readFileSync(`./videos/${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41'])}.mp4`)

     conn.sendFile(m.chat, video, '1.mp4', caption, m)
}
handler.help = ['xvideo']
handler.tags = ['xvideo']
handler.command = /^video|vÃ­deo$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}*/
