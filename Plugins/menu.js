let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = ('./menu.png')
  let { name } = global.db.data.users[who]
  
let str = `*┏☫─━━─━☾🇸🇩☽━┈━━┈☫┓*

*⧉┆حبابك  _" ${name} "_*
──── • ◈ • ────
*⧉ "${botname}"*
*⧉┆البادئ  ( . )*
*⧉ جميع اوامر البوت*

*━┅┄⊣🇸🇩﹝TETO-BOT-MD﹞🇸🇩⊢┄┅━*

*⌠☬↜╎.تاق⌡⁦*
*⌠☬↜╎.مخفي⌡⁦*
*⌠☬↜╎.ملصق⌡⁦*
*⌠☬↜╎.حقوق⌡⁦*
*⌠☬↜╎.صور⌡⁦*
─ • ◈ • ─
*⌠☬↜╎.المطور⌡⁦*

*━┅┄⊣☫﹝📜﹞☫⊢┄┅━*

*⧉┆مـلاحــظــة :* 

*⓶استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء*

*┗☫─━━─━☾🇸🇩☽━┈━━┈☫┛*


*_'TETO-BOT-MD'_*`
  conn.sendFile(m.chat, pp, 'darkman.png', str, m, false, { mentions: [who] })
  m.react(done)
}

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الأوامر','الاوامر','اوامر','أوامر','menu','help']

export default handler
