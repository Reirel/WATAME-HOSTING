let media = './media/watame/hentaiworld.jpg'
let handler = async (m, { conn, command }) => {
let str = `
π *Bienvenido al grupo oficial de Watame, ten en cuenta la temΓ‘tica del grupo antes de unirte* π

βββββββββββββββββ
π  *VersiΓ³n de ${gt}*
β₯ ${vs}
βββββββββββββββββ
β *Grupo Oficial*
π *${nn}*\n
βββββββββββββββββ
*Por favor, lee las reglas al ingresar y recuerda ser respetuoso con los demΓ‘s.*`.trim()
  
conn.sendButton(m.chat, str, wm, media, [
['π©π’ππ©ππ₯ ππ π ππ‘π¨ βοΈ ', '/menu']
])}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
