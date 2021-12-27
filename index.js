import Discord from "discord.js";
const client = new Discord.Client();

import keepAlive from "./server.js";

client.on("message", async message => {
    if (message.author.bot) return;

    const args = message.content
.slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g);

  //PREFIX CHECKING. All non-prefix commands go before.
   if (message.content.toLowerCase().indexOf(process.env.PREFIX) !== 0) return;

   const command = args.shift().toLowerCase();
   
   if(command == "pin" && message.channelId == 925135799798874192) {
     message.fetchReference().then(mOrig => {
       if(!mOrig) {
          message.reply("Nothing to pin! Reply to a message to pin it.");
         return;
       }

       if(!mOrig.pinnable) {
          message.reply("Can't pin this message! Check my permissions");
          return;
       }

       message.pin();
       message.reply("Done!");
     })
  }

  if(command == "convert") {
    if(!args[0]) {
      message.reply("Missing argument 1. Add `dec` to convert hexadecimal to decimal or `hex` to convert from decimal to hexadecimal");
      return;
    }

    if(!args[1]) {
      message.reply("Missing argument 2. Add hex or dec value to convert.");
      return;
    }

    if(args[0] == "hex") {
      message.reply(parseInt(args[1], 10).toString(16));
    } else if(args[1] == "dec") {
      message.reply(parseInt(args[1], 16).toString());
    }
  }
});

keepAlive();
client.login(process.env.TOKEN);