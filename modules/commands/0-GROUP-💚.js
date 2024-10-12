const fs = require("fs");
module.exports.config = {
  name: "group",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("group") ||
     react.includes("GROUP") || react.includes("Group") || react.includes("Grop") ||
react.includes("Grop") ||
react.includes("GROPP") ||     
react.includes("Gropp")) {
    var msg = {
        body: `${name} 🦢🍒❤️▬▬๑💖𝙁𝘼𝙄𝙕 𝘼𝙉𝙎𝘼𝙍𝙄💖 ✶𝐌𝐘 𝐁𝐎𝐒𝐒✶๑▬▬😍😍😍 .... 😊😊😊💖𝗝𝗢𝗜𝗡🗡️𝗠𝗘𝗥𝗘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘 𝗔𝗔𝗢 𝗘𝗡𝗝𝗢𝗬 𝗞𝗔𝗥𝗢💖 ➻👉🏻♦️𝙂𝙍𝙊𝙐𝙋👉𝙇𝙄𝙉𝙆  https://m.me/j/AbYZg4030gC9XmjT/ ✨✿`,attachment: fs.createReadStream(__dirname + `/noprefix/FAIZ/group.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }