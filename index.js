'use strict';

const SpoilerBot = require('discord-spoiler-bot');

let bot = new SpoilerBot({
  token: process.env.token,
  maxLines: 15,
  gif: {
    placeholderText: '( Blinker Warning: Hover to reveal )'
  },
  extractSpoiler: (message, fetchMessage, _, cb) => {
    // This is basically what the Bot ships with except without permissions checking and changing :spoiler:->:blinkers:
    if (message.content.match(/^\d+:blinkers:.+$/)){
      // Someone applied blinkers using <messageId>:blinkers:<subject>
      let parts = message.content.split(':blinkers:');
      fatchMessage(message.channelId, parts[0], 
        markedMessage => callback(null, new Spoiler(markedMessage, parts[1], markedMessage.content)));
    } else if (message.content.match(/^.+:blinkers:.+$/)) {
      // Someone applied blinkers using <subject>:blinkers:<message>
      let parts = message.content.split(':blinkers:');
      cb(null, new SpoilerBot.Spoiler(message, parts[0], parts[1]));
    } else {
      // ¯\_(ツ)_/¯
      cb(null, null);
    }
  }
});

bot.Connect();
