const Maalutty = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Maalutty.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '💝HI💝  \n  Maalutty🙂 '}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '💝OWNERS💝 owner nijin number wa.me/919446672120```\n\n```owner husni number wa.me/917025868709```\n\n```whatsapp group : https://chat.whatsapp.com/KJWUNpT7lBzDuPGnlV69Vp```\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '💝 MAALUTTY_V3💝⤎╾━\n\n         ☆ *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* ☆\n\n💝 ɴᴀᴍᴇ  : ` + config.BOT + `      \n💝 *ᴍᴏᴅᴇ* : ` + config.WORKTYPE + ` \n💝 ᴛɪᴍᴇ   : ```' + plk_say + '```\n💝 ᴅᴀᴛᴇ : ```' + plk_here + '```\n💝 ᴘᴇʀғɪx : ` + config.HANDLERS + ` \n*ᴅᴇᴠᴇʟᴏʟᴇʀ* : ꪶ͢ʜᴜsɴɪ ɴɪᴊɪɴꫂ  \n\n☆ *𝚃𝙷𝙰𝙽𝙺𝚂* ☆\n\n💝 ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ🙂\n '}, type: 1}

      ]
      
      const buttonMessage = {
          contentText: '◄━⦁💝 MAALUTTY_V3💝⦁━► ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n🔮*.xmedia*\n💘  ```It is a plugin with more than 25 media tools.```\n\n🔮*.ownercmnd*\n💘  ```set of commands for bot user or sudo```\n\n🔮*.codtts*\n💘  ```language code to change the voice in .tts & also for .trt translation```\n\n🔮*.adan* *\n💘  ```Finds prayer time.``` *⌨️ Eg:- :* ```.prayer <city>```🔮*.rename* *\n💘  ```[object Object]```\n\n🔮*.anime*\n💘  ```random anime image ```\n\n🔮*.aforward* *\n💘  ```Forwards replied audio as voice note with verified info```\n\n🔮*.apkmod🔮*.fatp🔮*.ask🔮*.infoask🔮*.love🔮*.infolove🔮*.ttp* *\n💘  ```Converts text to plain painting.```\n\n🔮*.attp* *\n💘  ```Adds rainbow effect to the text as a sticker.```\n\n🔮*.emoji\n\n🔮*.pmaudio* *\n💘  ```Forwards replied audio as voice note with verified info as broadcast to all participants```\n\n🔮*.nijin*\n💘  ```.```\n\n🔮*.husni*\n💘  ```.```\n\n🔮*.bgm* *\n💘  ```turn on and turn off bgm. -bot owner command``` *⌨️ Eg:- :* ```.bgm on \ off```🔮*.sendi*\n💘  ```Download status from wa```\n\n🔮*.sendv*\n💘  ```Download status from wa```\n\n🔮*.carbon*\n💘  ```It sends carbon picture```\n\n🔮*.bgm* *\n💘  ```change reply message BGM mode``` *⌨️ Eg:- :* ```.bgm one \ two```🔮*.mp3*\n💘  ```maalutty Converts video to audio.```\n\n🔮*.photo*\n💘  ```Converts the sticker to a photo.```\n\n🔮*.mp4*\n💘  ```Converts animated stickers to video.```\n\n🔮*.doc* *\n💘  ```CONVERT TO DOCUMENT AND ADD GIVEN NAME``` *⌨️ Eg:- :* ``````.doc Maalutty *replace Maalutty with desired name*``````🔮*.dict* *\n💘  ```Use it as a dictionary.Eg: .dict en_US;lead For supporting languages send *.lngcode*```\n\n🔮*.roll*\n💘  ```Roll dice randomly.```\n\n🔮*.emo* *\n💘  ```You Can Png From Any Emoji```\n\n🔮*.png\n\n🔮*.git*\n💘  ```It sends high resolution wallpapers.```\n\n🔮*.welcome*\n💘  ```It sets the welcome message. If you leave it blank it shows the welcome message.```\n\n🔮*.goodbye*\n💘  ```Sets the goodbye message. If you leave blank, it show's the goodbye message.```\n\n🔮*.print* *\n💘  ```Prints the inside of the file on the server.```\n\n🔮*.bashmedia* *\n💘  ```Sends audio, video and photos inside the server.``` *⌨️ Eg:- :* ```video.mp4 && media\gif\pic.mp4```🔮*.addserver*\n💘  ```Uploads image, audio or video to the server.```\n\n🔮*.term1* *\n💘  ```Allows to run the command on the server's shell.```\n\n🔮*.findvid*\n💘  ```Shows the technical information of the replied video.```\n\n🔮*.pm* *\n💘  ```Sends a private message to the replied person.```\n\n🔮*.pmsend* *\n💘  ```Sends a private voice message to the respondent.```\n\n🔮*.antilink* *\n💘  ```Activates the Antilink tool.``` *⌨️ Eg:- :* ```.antilink on \ off```🔮*.menu*\n💘  ```it send bot menu```\n\n🔮*.maaluforward* *\n💘  ```its foraward replied audio```\n\n🔮*.moretxt*\n💘  ```more txtit commands```\n\n🔮*.ffire* *\n💘  ```add your text to random freefire logo```\n\n🔮*.emo* *\n💘  ```emogi to png```\n\n🔮*.news\n\n🔮*.notes*\n💘  ```Shows all your existing notes.```\n\n🔮*.save* *\n💘  ```Reply a message and type .save or just use .save <Your note> without replying```\n\n🔮*.deleteNotes*\n💘  ```Deletes *all* your saved notes.```\n\n🔮*.owner*\n💘  ```shows the detail of bot owner```\n\n🔮*.pdf* *\n💘  ```Get screenshot of links in pdf```\n\n🔮*.presence* *\n💘  ```You can set Bot Presence. -owner command``` *⌨️ Eg:- :* ```.presence online \ offline \ typing \ recording```🔮*.jid* *\n💘  ```Giving user's JID.```\n\n🔮*.random* *\n💘  ```word image```\n\n🔮*.rashmika*\n💘  ```random rashmika images ```\n\n🔮*.brdmore* *\n💘  ```add readmore before your text```\n\n🔮*.rdmore* *\n💘  ```add readmore before your text```\n\n🔮*.removebg* *\n💘  ```Removes the background of the photos.```\n\n🔮*.warn* *\n💘  ```Sends reports to group admins.```\n\n🔮*.scan* *\n💘  ```Checks whether the entered number is registered on WhatApp.```\n\n🔮*.trt*\n💘  ```It translates with Google Translate. You must reply any message.``` *⌨️ Eg:- :* ```.trt tr it (From Turkish to Italian)```🔮*.detectlang*\n💘  ```Guess the language of the replied message.```\n\n🔮*.currency🔮*.tts* *\n💘  ```It converts text to sound.```\n\n🔮*.song* *\n💘  ```Uploads the song you wrote.```\n\n🔮*.video* *\n💘  ```Downloads video from YouTube.```\n\n🔮*.sing* *\n💘  ```It sings song that you have written```\n\n🔮*.song* *\n💘  ```Uploads the song you wrote for ios users.```\n\n🔮*.wiki* *\n💘  ```Searches query on Wikipedia.```\n\n🔮*.img* *\n💘  ```Searches for related pics on Google.```\n\n🔮*.github* *\n💘  ```Collects github information from the given username.⌨️ Example: .github phaticusthiccy```\n\n🔮*.lyric* *\n💘  ```Finds the lyrics of the song.```\n\n🔮*.covid* *\n💘  ```Shows the daily and overall covid table of more than 15 countries.```\n\n🔮*.sweather* *\n💘  ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.```\n\n🔮*.compliment* *\n💘  ```It sends complimentry sentenses```\n\n🔮*.hmod* *\n💘  ```Finds mod apps from happymod```\n\n🔮*.insult* *\n💘  ```It sends insulted words```\n\n🔮*.movie* *\n💘  ```Shows movie info.```\n\n🔮*.joke* *\n💘  ```It sends random jokes```\n\n🔮*.vava* *\n💘  ```Chat with Maalutty. Use .maalu <message>```\n\n🔮*.owner*\n💘  ```shows the detail of bot owner```\n\n🔮*.quote* *\n💘  ```It shares famous quotes```\n\n🔮*.ss* *\n💘  ```Takes a screenshot from the page in the given link.```\n\n🔮*.setvar*\n💘  ```It sends high resolution wallpapers.```\n\n🔮*.show* *\n💘  ```Get info related to tv series and shows```\n\n🔮*.ig* *\n💘  ```Fetches user informations from instagram```\n\n🔮*.animesay* *\n💘  ```It writes the text inside the banner the anime girl is holding```\n\n🔮*.changesay* *\n💘  ```Turns the text into the change my mind poster.```\n\n🔮*.trumpsay* *\n💘  ```Converts the text to Trump's tweet.```\n\n🔮*.bgm* *\n💘  ```turn on and turn off bgm. -bot owner command``` *⌨️ Eg:- :* ```.bgm on \ off```🔮*.autosticker* *\n💘  ```turn on and turn off bgm. -bot owner command``` *⌨️ Eg:- :* ```.sticker on \ off```🔮*.sudo* *\n💘  ```changes sudo numbers``` *⌨️ Eg:- :* ```.sudo *your number*```🔮*.caption* *\n💘  ```changes all captions``` *⌨️ Eg:- :* ```.caption *Made by JulieMwol*```🔮*.number* *\n💘  ```change user number``` *⌨️ Eg:- :* ```.number *Made by Amalser*```🔮*.deployer* *\n💘  ```change user name``` *⌨️ Eg:- :* ```.deployer *Made by Amalser*```🔮*.handlers* *\n💘  ```changes handlers``` *⌨️ Eg:- :* ```.handler ^[.!] ```🔮*.botname* *\n💘  ```change your bot name``` *⌨️ Eg:- :* ```.botname *name* ```🔮*.theri * *\n💘  ```change your theri commands``` *⌨️ Eg:- :* ```.theri command,command```🔮*.sticker*\n💘  ```It converts your replied photo or video to sticker.```\n\n🔮*.ffpack*\n💘  ```Free Fire logo maker```\n\n🔮*.ffpack*\n💘  ```Free Fire logo maker```\n\n🔮*.alive*\n💘  ```Does bot work?```\n\n🔮*.sysd*\n💘  ```Shows the system properties.```\n\n🔮*.tagadmin*\n💘  ```Tags group admins.```\n\n🔮*.bc*\n💘  ```Sends the replied message to all members in the group.```\n\n🔮*.txtit*\n💘  ```Shows text to image tools with unlimited access.```\n\n🔮*.antibadword* *\n💘  ```turn on & off anti-badword To remove members when they use bad words``` *⌨️ Eg:- :* ```.antibadword on \ off```🔮*.a* *\n💘  ```Converts audio to sound recording.```\n\n🔮*.unvoice*\n💘  ```Converts audio to sound recording.```\n\n🔮*.update*\n💘  ```Checks the update.```\n\n🔮*.update now*\n💘  ```It makes updates.```\n\n🔮*.url\n\n🔮*.wallpaper*\n💘  ```It sends high resolution wallpapers.```\n\n🔮*.wame* *\n💘  ```Get a link to the user chat.```\n\n🔮*.weather* *\n💘  ```Shows the weather.```\n\n🔮*.speedtest*\n💘  ```Measures Download and Upload speed.```\n\n🔮*.ping*\n💘  ```Measures your ping.```\n\n🔮*.short* *\n💘  ```Shorten the long link.```\n\n🔮*.calc* *\n💘  ```Performs simple math operations.```\n\n🔮*.whois*\n💘  ```Displays metadata data of group or person.```\n\n🔮*.gdmrng*\n💘  ```it sends good morning message```\n\n🔮*.gdni8*\n💘  ```it sends good night message```\n\n🔮*.xxxtentacion*\n💘  ```random xxxtentacion images ```\n\n🔮*.ytv* *\n💘  ```Downloads youtube video faster along with views, channel name and other info``` 
          footerText: '©ꪶ͢ʜᴜsɴɪ ɴɪᴊɪɴꫂ',
          buttons: buttons,
          headerType: 1
      }

     await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 9999999999, status: 200, thumbnail: fs.readFileSync('./photo/maalutty.jpg'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/maalutty.jpg')}}}});

}));
