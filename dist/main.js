"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the necessary discord.js classes
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Create a new client instance
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
const token = process.env.TOKEN;
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});
// Login to Discord with your client's token
client.login(token);
