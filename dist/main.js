"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client_override_1 = require("./classes/client-override");
const commands_1 = __importDefault(require("./commands"));
const events_1 = __importDefault(require("./events"));
const token = process.env.TOKEN;
// Create a new client instance
const client = new client_override_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
// Set commands (does not equal registering them - check package.json scripts)
client.setCommands(commands_1.default);
// Add events
for (const event of events_1.default) {
    event.once
        ? client.once(event.name, (...args) => event.execute(...args))
        : client.on(event.name, (...args) => event.execute(...args));
}
// Login to Discord with your client's token
client.login(token);
