let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`Te salvaste, eres admin 😾`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝘼 𝙁𝙊𝙍𝘽𝙄𝘿𝘿𝙀𝙉 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙇𝙄𝙉𝙆 𝙒𝘼𝙎 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎(𝘼𝙎)\n\n𝙄 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙏𝙊 𝘽𝙀 𝘼𝘽𝙇𝙀 𝙏𝙊 𝙍𝙀𝙈𝙊𝙑𝙀 𝙄𝙉𝙏𝙍𝙐𝘿𝙀𝙍𝙎`}`, author, ['𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘𝗕𝗘 𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗘𝗦𝗧𝗔 𝗙𝗨𝗡𝗖𝗜𝗢𝗡!`) 
//.on restrict//
//.off restrict//
}
return !0
}
