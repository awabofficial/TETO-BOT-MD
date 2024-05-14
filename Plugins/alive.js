import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│ 🤤 جمبك يا , ${conn.getName(m.sender)}!
│ 🤓 أنا  حي ارزق 
أكتب أوامر عشان تظهر ليك القائمة
╰────────────────────
*─[ BY AWAB OFFICIAL ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(وينك)$/i


export default handler
