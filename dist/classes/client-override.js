"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const discord_js_1 = require("discord.js");
class Client extends discord_js_1.Client {
    commands;
    constructor(options, commands) {
        super(options);
        this.commands = commands || new discord_js_1.Collection();
    }
    setCommands(commands) {
        for (const command of commands) {
            this.commands.set(command.data.name, command);
        }
    }
}
exports.Client = Client;
