let media = './media/watame/hentaiworld.jpg'
let handler = async (m, { conn, command }) => {
let str = `
💖 *Bienvenido al grupo oficial de Watame, ten en cuenta la temática del grupo antes de unirte* 💖

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *Grupo Oficial*
🐈 *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, lee las reglas al ingresar y recuerda ser respetuoso con los demás.*`.trim()
  
conn.sendButton(m.chat, str, wm, media, [
['𝗩𝗢𝗟𝗩𝗘𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 ☘️ ', '/menu']
])}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
