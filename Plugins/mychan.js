let handler = async (m, { conn }) => {

m.reply(`*موقعي الرسمي:*\n
*https://sociabuzz.com/awabofficiall*
*موقعي الرسمي ستجد فيها جميع قنواتي و روابط تواصلي 🥰♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(المطور)$/i

export default handler;
