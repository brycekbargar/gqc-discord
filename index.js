'use strict';

const SpoilerBot = require('discord-spoiler-bot');

let bot = new SpoilerBot({
  token: process.env.token
});

bot.Connect();
