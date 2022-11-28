let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / OVO / GOPAY :
├ • *083862006229*
│
├ DANA :
├ • *085962734007*
│
├ Ownerku
├ _wa.me/6283862006229_
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
