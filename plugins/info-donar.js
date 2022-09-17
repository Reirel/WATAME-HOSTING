let media = './media/watame/donate.jpg'
let handler = async (m, { conn, command }) => {

let str = `💖 𝗛𝗼𝗹𝗮, 𝗮𝗴𝗿𝗮𝗱𝗲𝘇𝗰𝗼 𝘀𝗶 𝗺𝗲 𝗮𝗽𝗼𝘆𝗮𝘀 𝗱𝗼𝗻𝗮𝗻𝗱𝗼. 𝗠𝗲 𝗮𝗴𝗿𝗮𝗱𝗮 𝗲𝗹 𝘁𝗿𝗮𝗯𝗮𝗷𝗼 𝗾𝘂𝗲 𝗵𝗲 𝗹𝗼𝗴𝗿𝗮𝗱𝗼 𝘆 𝗹𝗼 𝗰𝗼𝗺𝗽𝗮𝗿𝘁𝗼 𝗰𝗼𝗻 𝘂𝘀𝘁𝗲𝗱𝗲𝘀. 𝗚𝗿𝗮𝗰𝗶𝗮𝘀! 🎁`.trim()

await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗘𝗦 💗', '#owner']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
