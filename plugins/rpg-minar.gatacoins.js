let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro 😎 has minado','🌟✨ Genial!! Obtienes','WOW!! eres un gran minero ⛏️ Obtienes','Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}`
let pp = 'https://media.tvalacarta.info/programas/0/clantve/44-gatos/aida-la-gata-robot.jpg'

let gata = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += gata * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `*💟 Vuelva en ${msToTime(time - new Date())} para continuar minando ⛏️*`  

conn.sendHydrated(m.chat, `${minar} ${gata} coins`, wm, pp, md, '𝗠𝗜𝗡𝗔𝗥', null, null, [
['𝗘𝗫𝗣 ⚡', `.minar`],
['𝗠𝗶𝗻𝗮𝗿 💎', `.minar3`],
['𝗩𝗼𝗹𝘃𝗲𝗿 𝗮 𝗠𝗶𝗻𝗮𝗿 🐈‍', `.minar2`]
], m,)
global.db.data.users[m.sender].lastcoins = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar2']
handler.tags = ['gata']
handler.command = ['minar2', 'miming2', 'mine2', 'minargatacoins', 'minarcoins', 'minargata'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
