let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`Te salvaste, eres admin πΎ`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ πΏπ πππΌπππΌππ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ πππΌπππΌππ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, author, ['πΏπππΌπΎππππΌπ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`π π ππ₯ππππ’π₯ ππππ πππ§ππ©ππ₯ ππ¦π§π ππ¨π‘πππ’π‘!`) 
//.on restrict//
//.off restrict//
}
return !0
}
