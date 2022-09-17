import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
      {title: "🤖 𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗘𝗦 🤖", description: null, rowId: `${usedPrefix}creadora`},
      {title: "💖 𝗗𝗢𝗡𝗔𝗥 💖", description: null, rowId: `${usedPrefix}donar`},
      {title: "🚀 𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🌀 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🏆 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗧𝗢𝗥𝗜𝗔 🏆", description: null, rowId: `${usedPrefix}top`},
      {title: "🌟 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🎡 𝗝𝗨𝗘𝗚𝗢𝗦 𝗗𝗜𝗡𝗔𝗠𝗜𝗖𝗢𝗦 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢𝗦 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗗𝗢𝗥 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ 𝗖𝗘𝗡𝗧𝗥𝗢 𝗗𝗘 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢𝗡 ⚙️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "🎈 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗬 𝗙𝗜𝗟𝗧𝗥𝗢𝗦 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ 𝗠𝗘𝗡𝗨 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗬 𝗟𝗢𝗚𝗢𝗦 ✨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "📲 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝗠𝗘𝗠𝗘𝗦 𝗥𝗔𝗡𝗗𝗢𝗠 | 𝗔𝗡𝗜𝗠𝗘 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "🔞 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 +18 🔞", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "⚗️ 𝗠𝗘𝗡𝗨 𝗥𝗣𝗚 ⚗️", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "💎 𝗠𝗘𝗡𝗨 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 💎", description: null, rowId: `${usedPrefix}ownermenu`},
    

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `╭─────────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n╰─────────────────────❀
╭━━━━〔 *Watame-BOT* 〕━━━━⬣
┃✪ *Tiempo Actual*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuarios*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo*
┃➺ ${global.opts['self'] ? 'PRIVADO' : 'PÚBLICO'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chats Prohibidos*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuarios Prohibidos*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━━⬣`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "LISTA DE MENUS", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

await conn.sendMessage(m.chat, listMessage)
//await conn.relayMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
//await conn.sendMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A)* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches* 💫"
  }
  return res
} 



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)

let menu = `╭───────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *Tiempo Actual | Current Time*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante | Active during* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión de GataBot-MD*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) | Users*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo | Mode*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s) | Prohibited Users*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━⬣`

let menulista = `
╭━━━━━━━━━━━━━━━━━━━⬣
┃ ⚡ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 ⚡
┃ 💖 ${name}
╰━━━━━━━━━━━━━━━━━━━⬣
${readMore}
╭━━━━━━━━━━━━━━━━━━━⬣
┃ 💖 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼 | 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 💖
┃ _${usedPrefix}creadora_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💖 𝘿𝙊𝙉𝘼𝙍 | 𝘿𝙊𝙉𝘼𝙏𝙀 💖
┃ _${usedPrefix}donar_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 | 𝙎𝙋𝙀𝙀𝘿 🚀
┃ _${usedPrefix}ping_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 | 𝙁𝙐𝙇𝙇 𝙈𝙀𝙉𝙐 🌀
┃ _${usedPrefix}allmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆
┃ _${usedPrefix}top_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 🌟
┃ _${usedPrefix}infomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 | 𝙂𝘼𝙈𝙀𝙎 🎡
┃ _${usedPrefix}juegosmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 | 𝘼𝙐𝘿𝙄𝙊𝙎 🔊
┃ _${usedPrefix}audios_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰
┃ _${usedPrefix}audioefectomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 🔰
┃ _${usedPrefix}grupomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️
┃ _${usedPrefix}on_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈
┃ _${usedPrefix}stickermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 | 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 🛰️
┃ _${usedPrefix}convertidormenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨
┃ _${usedPrefix}makermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 | 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 📲
┃ _${usedPrefix}descargasmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 | 𝙎𝙀𝘼𝙍𝘾𝙃 🔍
┃ _${usedPrefix}buscarmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 | 𝘼𝙉𝙄𝙈𝙀 ⛩️
┃ _${usedPrefix}randommenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔞 𝙈𝙀𝙉𝙐 +18 | 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 +18 🔞
┃ _${usedPrefix}hornymenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️
┃ _${usedPrefix}rpgmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) | 𝙊𝙒𝙉𝙀𝙍 💎
┃ _${usedPrefix}ownermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 
┃ 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄
┃ _Términos_
╰━━━━━━━━━━━━━━━━━━━⬣`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendMessage(m.chat, { text: menulista, mentions: [m.sender] }, { quoted: fkontak, m })
	
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
}*/

