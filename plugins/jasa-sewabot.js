//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

let handler = async (m, { conn, command }) => {
	let ini_txt = `❤‍🩹 *[ Chat Dengan Creator ]*
wa.me/6283862006229

*OPEN SEWABOT & JADIBOT*
*⬇️LIST SEWABOT*
_❐  1 BULAN : 8K_
_❐  PERMANEN : 10k_
_❐  PERMANEN + PREMIUM : 12K_
*⬇️LIST JADIBOT*
_❐  1 MINGGU : 12K_
_❐  1 BULAN : 23K_
_❐  2 BULAN : 28K_
*_DI RUN MENGUNAKAN PANEL DI JAMIN ON 24 JAM + NO DELAY_*
*⬇️KEUNTUNGAN SEWA*
_❐  ON 24 JAM_
_❐  FAST RESPON_
_❐  NO DELAY_
_❐  FITUR LANGKA_
*⬇️GRUB BOT OFFICIAL*
_https://chat.whatsapp.com/KV5vkfzBKR65C8gw7xJ5yC_
Minat? Pm : https://wa.me/6283862006229
- Pembayaran via *OVO / Dana / GoPay / Qris*
  ke nomor 083862006229
- Whatsapp Multi Device
- Run via Panel
	//m.reply(ini_txt)
	command = command.toLowerCase()
	conn.relayMessage(m.chat,  {
		requestPaymentMessage: {
			currencyCodeIso4217: 'USD',
			amount1000: command.includes('prem') ? '0670' : command.includes('sewa') ? 1010 : 1680,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: ini_txt,
					contextInfo: {
						mentionedJid: [m.sender],
						externalAdReply: {
							showAdAttribution: true
						}
					}
				}
			}
		}
	}, {})

	/*const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = require("@adiwajshing/baileys")
	let fs = require('fs')
	var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/anime.jpg') }, { upload: conn.waUploadToServer })
	var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
			"product": {
				"productImage": messa.imageMessage,
				"productId": "5838766206142201",
				"title": `Sewa Bot`,
				"description": `gaktau`,
				"currencyCode": "IDR",
				"bodyText": `gaktaukalo`,
				"footerText": `koncol`,
				"priceAmount1000": "15000000",
				"productImageCount": 100,
				"firstImageId": 1,
				"salePriceAmount1000": "15000000",
				"retailerId": `ꪶ𝐖𝐫𝐚𝐧𝐳𝐓𝐚𝐦𝐩𝐚𝐧𝐳⿻ꫂ`,
				"url": "wa.me/6282337245566"
			},
			"businessOwnerJid": "6282337245566@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: m })
	conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })*/
}

handler.menugroup = ['premium','sewabot']
handler.tagsgroup = ['group']
handler.command = /^(sewa(bot)?|prem(ium)?)$/i

export default handler
