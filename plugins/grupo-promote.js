let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `${mg}ETIQUETA A ALGUIEN PARA CONVERTIRLO EN ADMINISTRADOR!\n\n*EJEMPLO:*\n${usedPrefix}promover @`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${fg}*EL NΓMERO ES INCORRECTO, INTENTE DE NUEVO*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
//conn.reply(m.chat, `${eg}πΌππππΌ πππππ ππ πππΏππ πΏππ πΌπΏπππ πΌ\n\nππππ ππ πππ πΌπΏπππ π€ `, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promover)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
