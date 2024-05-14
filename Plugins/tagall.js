let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`┃⋄  *🔱المجموعة* : *${groupMetadata.subject}*\n┃⋄ *عدد* ❤️ *الأعضاء* : *${participants.length}*${text ? `\n┃⋄ *✅الرسالة* : ${text}\n` : ''}\n┏━━━━⊜ *تيتـو - بوت*\n` + users.map(v => '┃⋄ @' + v.replace(/@.+/, '')).join`\n` + '\n┗━━✪ *تيتـ🇸🇩ـو* ┃━━', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['تاق']
handler.admin = true
handler.group = true

export default handler
