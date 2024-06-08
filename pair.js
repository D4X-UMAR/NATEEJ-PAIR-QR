const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Nteej,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function NTEEJ_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Nteej = Nteej({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Nteej.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Nteej.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Nteej.ev.on('creds.update', saveCreds)
            Pair_Code_By_Nteej.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Nteej.sendMessage(Pair_Code_By_Nteej.user.id, { text: '' + b64data });

               let NTEEJ_MD_TEXT = `
*_Pair Code Connected by Nteej Md_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN Nteej-MD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Whatsapp:* _https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I
║❒ *Owner:* _https://wa.me/message/+263714497545_
║❒ *Repo:* _https://github.com/Ntee-j01/Nteej-MD_
║❒ *WaGroup:* _https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I_
║❒ *Plugins:* _https://github.com/Ntee-j01/Nteej-MD_-plugins_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Nteej.sendMessage(Pair_Code_By_Nteej.user.id,{text:NTEEJ_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Nteej.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    VENOCYBER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await NTEEJ_MD_PAIR_CODE()
});
module.exports = router
