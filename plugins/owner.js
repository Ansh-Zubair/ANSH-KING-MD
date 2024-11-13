const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let owner =` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *ANSH.S*
*AGE:-* *19 YEARS*
*PUBLIC NAME:-* *ANSHLOVER*

> *BY ANSHLOVER702*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "ANSHLOVER702",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ANSHLOVER702',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://wa.me/+923453964600?text=HY Ansh-Zubair I'M MSG YOU FROM OWNER ADS" ,
thumbnailUrl: "https://telegra.ph/file/ffda25ad4092b3328d551.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
