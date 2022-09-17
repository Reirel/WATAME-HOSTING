import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, command }) => {
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res) 
await delay(1 * 1000)
if (command == 'kick') { 
conn.sendHydrated(m.chat, `*Un miembro fue eliminado del grupo! 😿*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
}
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick'] ///^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


