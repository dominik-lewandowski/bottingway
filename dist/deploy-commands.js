"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const commands_1 = __importDefault(require("./commands"));
const [clientId, guildId, token] = [process.env.CLIENT_ID, process.env.GUILD_ID, process.env.TOKEN];
if (!clientId || !guildId || !token) {
    throw new Error('Missing environment variables');
}
const commandsJSON = commands_1.default.map(c => c.data.toJSON());
const rest = new rest_1.REST({ version: '9' }).setToken(token);
rest.put(v9_1.Routes.applicationGuildCommands(clientId, guildId), { body: commandsJSON })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
