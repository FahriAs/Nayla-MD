//=============『 Gosah diubah 』================== //
let fs = require('fs')
//=============『 Utama 』================== //
global.Owner = {
// use the phone number with the country code, for example Indonesia "62" America "1" etc
"6285927713672": { // 6285927713672
name: "Fahri",
isReport: true, // if true this number will send if user use command /report or /join
isCreator: true, // if true this number will send if user use command /owner or /creator
isDev: true
}
}
global.prems = []
global.mods = ["6285927713672"] // Want some help?

//=============『 Info Owner 』================== //
global.instagram = " "
global.github = " "
global.donasi = {
dana: "gada",
pulsa: "+62 85927713672",
gopay: "gada",
saweria: "https://saweria.co/faahrixz"
}

//=============『 Info Bot 』================== //
global.linkGC = ["https://chat.whatsapp.com/IpKFuX1XlQCCZjx4EV61AN"]
global.botname = "F-79-MD"
global.sessionName = "nayla" // The Session name behind the .json example is nayla.json

//=============『 Tampilan & Lainnya 』================== //
global.ext = {
title: "Sabar sedang di proses",
body: "F79-MD",
thum: "https://files.catbox.moe/3brrkb.jpg"
}
global.wm = '© F79'
global.mess = {
wm: global.wm,
sukses: "Done Ya kawand",
wait: "*❏ WAIT TUNGGU*",
error: "*❏ ERROR!*",
    msg: {
owner: "Maaf fitur ini hanya bisa digunakan oleh *Owner*",
mods: "Maaf fitur ini hanya bisa digunakan oleh *Moderator*",
premium: "Maaf fitur ini hanya bisa digunakan oleh user *Premium*",
group: "Maaf fitur ini hanya bisa digunakan di *Group*",
private: "Maaf fitur ini hanya bisa digunakan di *Private*",
admin: "Maaf fitur ini hanya bisa digunakan *Admin*",
botAdmin: "Jadikan bot sebagai *Admin* untuk menggunakan fitur ini",
unreg: "── 「 NOT REGISTERED 」 ──\nSilakan Register Terlebih Dahulu Sebelum Menggunakan Bot. Dengan cara klik tombol dibawah untuk melakukan register",
},
    announce: {
wel: "Hai @user\n◪ Welcome in group:\n├─ @subject\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin:",
bye: "Selamat Tinggal @user!\nTerimakasih Telah Bergabung Di Grup\n\nKalo Balik Jangan Lupa Bawa Gorengan Buat Anggota Disini",
promote: "「 PROMOTE - DETECTED 」\nTarget : @user\nStatus : Member -> Admin\nSELAMAT KAMU JADI ADMIN",
demote: "「 DEMOTE - DETECTED 」\nTarget : @user\nStatus : Admin -> Member\nYAHAHA KASIAN KENA DEMOTE"
}
}
global.packname = "F79-MD"
global.author = "FahriXz"
global.mesreport = 50
global.expc = 15


//=============『 Adventure 』================== //
global.adven = {
	limit: 100,
	tigame: 100,
	money: 100000
}
global.multiplier = 36 // The higher, The harder levelup

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
// name: "https://website"
nrtm: "https://nurutomo.herokuapp.com",
xteam: "https://api.xteam.xyz",
nzcha: "http://nzcha-apii.herokuapp.com",
bg: "http://bochil.ddns.net",
fdci: "https://api.fdci.se",
dzx: "https://api.dhamzxploit.my.id",
bsbt: "https://bsbt-api-rest.herokuapp.com",
zahir: "https://zahirr-web.herokuapp.com",
zeks: "https://api.zeks.xyz",
hardianto: "https://hardianto-chan.herokuapp.com",
pencarikode: "https://pencarikode.xyz", 
LeysCoder: "https://leyscoders-api.herokuapp.com"
}
global.APIKeys = { // Apikey Here
// "https://website": "apikey"
"https://api.xteam.xyz": "HIRO",
"https://zahirr-web.herokuapp.com": "zahirgans",
"https://bsbt-api-rest.herokuapp.com": "benniismael",
"https://api.zeks.xyz": "apivinz",
"https://hardianto-chan.herokuapp.com": "hardianto",
"https://pencarikode.xyz": "pais", 
"https://leyscoders-api.herokuapp.com": "MIMINGANZ" 
}

//=============『 Jangan Di Ubah 』================== //
global.botwm = global.wm
let chalk = require("chalk")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright("Update config.js"))
delete require.cache[file]
require(file)
})
