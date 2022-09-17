let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉`,
rows: [
{title: "🎉 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔", description: "𝘾𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙙𝙚 𝙡𝙖 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙂𝙧𝙪𝙥𝙤", rowId: `${usedPrefix + command} welcome`},
{title: "🌐 𝗠𝗢𝗗𝗢 𝗣𝗨𝗕𝗟𝗜𝗖𝗢", description: "𝙐𝙨𝙖𝙧 𝙚𝙡 𝘽𝙤𝙩 𝙚𝙣 𝙈𝙤𝙙𝙤 𝙋𝙪𝙗𝙡𝙞𝙘𝙤 𝙤 𝙋𝙧𝙞𝙫𝙖𝙙𝙤", rowId: `${usedPrefix + command} public`},
{title: "🔞 𝗠𝗢𝗗𝗢 𝗛𝗢𝗥𝗡𝗬", description: "𝙈𝙤𝙨𝙩𝙧𝙖𝙧 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 +18", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 𝗔𝗡𝗧𝗜 𝗘𝗡𝗟𝗔𝗖𝗘𝗦 ", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 𝗔𝗡𝗧𝗜 𝗘𝗡𝗟𝗔𝗖𝗘𝗦 2", description: "𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙦𝙪𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙜𝙖 𝙝𝙩𝙩𝙥𝙨", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔔 𝗔𝗨𝗧𝗢 𝗗𝗘𝗧𝗘𝗖𝗧𝗔𝗥", description: "𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤", rowId: `${usedPrefix + command} detect`},    
{title: "🆙 𝗔𝗨𝗧𝗢 𝗟𝗘𝗩𝗘𝗟 𝗨𝗣", description: "𝙎𝙪𝙗𝙚 𝙙𝙚 𝙣𝙞𝙫𝙚𝙡 𝘼𝙪𝙩𝙤𝙢á𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨", rowId: `${usedPrefix + command} autolevelup`},    
{title: "⛔ 𝗥𝗘𝗦𝗧𝗥𝗜𝗡𝗚𝗜𝗥", description: "𝙐𝙨𝙖𝙧 𝙡𝙖𝙨 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙨𝙖𝙘𝙖𝙧 𝙮/𝙤 𝙖ñ𝙖𝙙𝙞𝙧 𝙚𝙣 𝙚𝙡 𝙂𝙧𝙪𝙥𝙤", rowId: `${usedPrefix + command} restrict`},    
{title: "✅ 𝗟𝗘𝗖𝗧𝗨𝗥𝗔 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖𝗔", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙩𝙚𝙣𝙜𝙖 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙘𝙤𝙢𝙤 𝙇𝙚í𝙙𝙤", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 𝗔𝗨𝗗𝗜𝗢𝗦", description: "𝙐𝙨𝙖𝙧 𝙡𝙤𝙨 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙚 𝘼𝙪𝙙𝙞𝙤𝙨", rowId: `${usedPrefix + command} audios`},
{title: "🐈 𝗕𝗢𝗧 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗟", description: "𝙋𝙖𝙧𝙖 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙤 𝙣𝙤 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙨𝙚 𝙪𝙣𝙖 𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙡𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨", rowId: `${usedPrefix + command} temporal`},
{title: "👀 𝗔𝗡𝗧𝗜 𝗩𝗘𝗥", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙣𝙖𝙙𝙖 𝙨𝙚 𝙤𝙘𝙪𝙡𝙩𝙚 𝙚𝙣 𝙂𝙧𝙪𝙥𝙤𝙨", rowId: `${usedPrefix + command} antiver`},
{title: "🪄 𝗔𝗨𝗧𝗢𝗦𝗧𝗜𝗖𝗞𝗘𝗥", description: "𝙏𝙤𝙙𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤, 𝙂𝙞𝙛, 𝙚𝙣𝙡𝙖𝙘𝙚 𝙟𝙥𝙜 𝙎𝙚 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙖 𝙚𝙣 𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚", rowId: `${usedPrefix + command} autosticker`},
{title: "🎠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙚 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩", rowId: `${usedPrefix + command} stickers`},
{title: "⚜️ 𝗣𝗖𝗢𝗡𝗟𝗬", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙨𝙤𝙡𝙤 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨 𝙋𝙧𝙞𝙫𝙖𝙙𝙤𝙨", rowId: `${usedPrefix + command} pconly`},
{title: "⚜️ 𝗚𝗖𝗢𝗡𝗟𝗬", description: "𝙃𝙖𝙘𝙚𝙧 𝙦𝙪𝙚 𝙚𝙡 𝘽𝙤𝙩 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙨𝙤𝙡𝙤 𝙚𝙣 𝘾𝙝𝙖𝙩𝙨 𝙙𝙚 𝙂𝙧𝙪𝙥𝙤𝙨", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: '*🛠 CENTRO DE CONFIGURACION 🛠*',
footer: `╭━━━━━━[ 𝗔𝗝𝗨𝗦𝗧𝗘𝗦 ]━━━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟 *¡Hola!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣
╭━━━━━━━━━━━━━⬣
┃ *𝗣𝗥𝗘𝗦𝗜𝗢𝗡𝗘 𝗢 𝗨𝗦𝗘 𝗟𝗢𝗦*
┃ *𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *welcome*_
┃⚙️ _${usedPrefix}on *:* off *public*_
┃⚙️ _${usedPrefix}on *:* off *modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antilink*_
┃⚙️ _${usedPrefix}on *:* off *antilink2*_
┃⚙️ _${usedPrefix}on *:* off *detect*_
┃⚙️ _${usedPrefix}on *:* off *autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restrict*_
┃⚙️ _${usedPrefix}on *:* off *pconly*_
┃⚙️ _${usedPrefix}on *:* off *gconly*_
┃⚙️ _${usedPrefix}on *:* off *autoread*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *antiver*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
╰━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝙍",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
//case 'temporal':
//if (m.isGroup) {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}}
//chat.temporal = isEnable          
//break
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
case 'autolevelup':
isUser = true
user.autolevelup = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'antiver':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `${rg}ღ *_COMANDO_* *|* ${type} 
ღ *_ACTUALMENTE_* *|* ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'} 
ღ *_EN ESTE_* *|* ${isAll ? 'BOT' : isUser ? '' : 'CHAT'}`, wm, null, [[`${isEnable ? '🔕 DESACTIVAR' : '🔔 ACTIVAR'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 🍀', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
