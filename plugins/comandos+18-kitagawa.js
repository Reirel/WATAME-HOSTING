let handler = async (m, { conn, text, command }) => {
    let yh = global.kitagawa
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `💕💕💕💕`.trim(), wm, url, [['𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 ➡️', `/${command}`]], m)
  }
  handler.command = /^(kitagawa)$/i
  handler.tags = ['anime']
  handler.help = ['kitagawa']
  export default handler
  
global.kitagawa = ['https://img.nickpic.host/uwMiSJ.jpg',
'https://img.nickpic.host/uwMUyj.jpg',
'https://img.nickpic.host/uwMQ81.jpg',
'https://img.nickpic.host/uwMCEW.jpg',
'https://img.nickpic.host/uwM6vc.jpg',
'https://img.nickpic.host/uwMOfz.jpg',
'https://img.nickpic.host/uwMEXG.jpg',
'https://img.nickpic.host/uwMA3A.jpg',
'https://img.nickpic.host/uwMqJY.jpg',
'https://img.nickpic.host/uwMg1p.jpg',
'https://img.nickpic.host/uwMcS6.jpg',
'https://img.nickpic.host/uwM5df.jpg',
'https://img.nickpic.host/uwMl8b.jpg',
'https://img.nickpic.host/uwMjEX.jpg',
'https://img.nickpic.host/uwMape.jpg',
'https://img.nickpic.host/uwM3fF.jpg',
'https://img.nickpic.host/uwMsUM.jpg',
'https://img.nickpic.host/uwMrsP.jpg',
'https://img.nickpic.host/uwMBJ5.jpg',
'https://img.nickpic.host/uwMxRD.jpg',
'https://img.nickpic.host/uwMv5d.jpg',
'https://img.nickpic.host/uwModq.jpg',
'https://img.nickpic.host/uwMm78.jpg',
'https://img.nickpic.host/uwMIEm.jpg',
'https://img.nickpic.host/uwMGpO.jpg',
'https://img.nickpic.host/uwtdVN.jpg',
'https://img.nickpic.host/uwtZUx.jpg',
'https://img.nickpic.host/uwtWsQ.jpg']