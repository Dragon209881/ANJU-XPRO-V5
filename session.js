//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpISDRzRnNLeTdmMXdwMzZmNmpHb1ErSysxL1dWdGhXQVdpV1FlUUhWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm00RktmZnFRNUp6RFlPWHBlN2YxRks3cGtpcU5ndG1UY3BBWkllZnBEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSWZOQmUySGlLQ01VRmpIZFhkZmhUZWtIM0JaTHZsZFlYNjJGenJlK1hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzczBaV21OdkFpUVlIWENrcCtmT1NNS1RoMzlQOHk5VEpFU0ZlK1lpWURVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBenZFOW1vcnFRcHpFdnlsaXRFUE1ENnY1VnNYd0Y0RDVHTy9LTGFybDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV2WS9xcXZubWtsbjBiR1h0bmdiUURsQWtvb1Nnc3gwdDBQWnFTS29FUXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU90UmFOdGJBc0V6V2g5aTRqY2ZQOXN3ekQra3FzUDRFcUxFUDVvU2UyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhFTk9BaEVqL2dSR3RCMVhVRE1LMENkbFBjcXF0cEdNdXRJK1ltSjluQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ieTNaa0ZNem5OYUtzcXV6UzVtbkRwelNJMDZjTG1uR0dzeC81Z3Btemg2cHBEejU4b0ZCdTY2UU11VHhObVFraVBRVU0xWnRHN0huYTNsdHRUZWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJPazhGN1ZkUGtub29TOWR4ZGIxS1dtWDZtWmdGZG5OdnB2N01LaWhXakhNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI0OTgzNzc0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI1QTREQkNBQzhFODQ3MTAxOTMzRTdEMTI4QzNBQUMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk0NzAxMjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI0OTgzNzc0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNzYwMzNEQTlCMkVBREU0NDYwQzU2RjkyMjU2MzdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk0NzAxMjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI0OTgzNzc0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5NTM5N0I4ODRFMkEyNTkwQzhFODEwQ0FGQjYyRTg3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk0NzAxMjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im11U1VXd3RmUVFPYkY4UjlxUXc4dmciLCJwaG9uZUlkIjoiZjUxYThiZWItZmM5ZS00YTNiLTljZTItZTFmM2M3ODlkNWUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFIWVJpNS84STlsOWhTRlAwb2hwcEw2UnBFST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJncytFeEg5WmE4UjZweVVkLzFGUDBncm9WalU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFpNM1JLU1QiLCJtZSI6eyJpZCI6Ijk0NzI0OTgzNzc0OjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNTEwMzcxODEwNDY5Nzc6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tUMHBzTUhFS0NYbThJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhXcVdmTmFvSHBuYU1xZm5sOEt3YU5sUE55M0VyZWVRTmJyV1JaMWwwd2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhITHppd3paQWp4dC9pVEYxTzV3VjlRQTNrZWZYVlBSOVdDL0FjVzRqZkpLejJ2K2tuYnFXSzJ6RXBsdmNIS2N1citIeE9PanExQktQdlBCc3lFQ0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUaFFXSmJYbnJQQlk2alV6UFFkU3A3RlE2dUp0dWhYSzF4aHBJZnJwa1hYaWxTUkFSMlM4dXA2Nmk5VXQxRnhDWGlpUXZWamRKbUVxT2Q0QU9ha0xqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI0OTgzNzc0OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjFxbG56V3FCNloyaktuNTVmQ3NHalpUemN0eEszbmtEVzYxa1dkWmRNSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NDcwMTI1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1MWSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0724983774",
  PASSWORD: 
    process.env.PASSWORD || "osada123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
