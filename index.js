const { LineBot } = require("bottender");
const { createServer } = require("bottender/express");
const bot = new LineBot({
  // ubah ke access token dan channelSecret dibawah, sesuai dengan yang ada di line console
  accessToken: "S9lEVdoHr5kknG7JF5xHaANyV0n/84uOGxtuESuleAnXUlsQYIFUbAze5+zSbBsBTqe4epcwjPFAtXEreDzAHVj2W8+94kPvHfncT6eq9FsJvWzifBzTC9zrw9FSiW7kmed0F7HE7Nwc+mnLo9aMyAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "7edbe088cfedefa3c545c8f94b65ad31"
});
bot.onEvent(async context => {
    // Chats

    const sendHelp = "RE:BOT dapat melakukan beberapa hal loh...\nCoba yuk command-command RE:BOT berikut ini!\n\n\n/𝐡𝐞𝐥𝐩 - Untuk melihat command yang kami punya\n/𝐯𝐢𝐝𝐞𝐨𝐢𝐠 - Untuk menyimpan video dari instagram\n/𝐟𝐨𝐭𝐨𝐢𝐠 - Untuk menyimpan foto dari instagram\n/𝐜𝐞𝐤𝐢𝐠 - Untuk mengecek profil instagram\n/𝐬𝐭𝐨𝐫𝐲𝐢𝐠 - Untuk menyimpan foto atau video dari instastory\n\n\n(star)"
    const tutor = "Begini nih cara menggunakan commandnya\n\n"
    const errormess = "Terima kasih atas pesannya(blush)\nSayang sekali, akun ini masih goblok(hm)"

  // 1. Pengecekan apakah bot menerima chat berupa text
  if (context.event.isText) {
    // 2. Ambil value text yang dikirim oleh user, simpan di variabel receivedMessage
    const receivedMessage = context.event.text;
    // 3. Pengecekan apakah user mengirim 2 pasang string dengan spasi
    // Contoh valid text: 1 3 | 4 2 | 10 23
    if (receivedMessage.split(" ").length === 2){
        const splittedText = receivedMessage.split(" ");
        const inicommand = splittedText[0];
        const link = Number(splittedText[1]);
        switch (inicommand) {
            case '/videoig':
              await context.replyText(sendHelp);
              break;
            case '/fotoig':
              await context.replyText(sendHelp);
              break;
            case '/storyig':
              await context.replyText(sendHelp);
              break;
            case '/cekig':
              await context.replyText(sendHelp);
              break;
            default:
                await context.replyText(errormess);
                break;
        }
  
    } else {
        if (receivedMessage.equals("/help")){
            await context.replyText(sendHelp);
        } else if (receivedMessage.equals("/videoig")) {
            await context.replyText(tutor);
            await context.replyText("/videoig (link post instagram)");
        } else if (receivedMessage.equals("/fotoig")) {
            await context.replyText(tutor);
            await context.replyText("/fotoig (link post instagram)");
        } else if (receivedMessage.equals("/cekig")) {
            await context.replyText(tutor);
            await context.replyText("/cekig (username instagram)");
        } else if (receivedMessage.equals("/storyig")) {
            await context.replyText(tutor);
            await context.replyText("/storyig (username instagram)");    
        } else {
            await context.replyText(errormess);            
        }
    }
      // 4. Menyimpan hasil split. Kalau messagenya: "1 3" splittedText akan berisi ["1", "3"]
      // 6. Lakukan proses penjumlahan
      // 7. Balas pesan user dengan hasil penjumlahan 2 angka yang dikirim
  }
});
const server = createServer(bot);
server.listen(process.env.PORT || 5000, () => {
  console.log("server is running on 5000 port...");
});