"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info!'),
    async execute(interaction) {
        const user = interaction.user;
        await interaction.reply(`Your tag: ${user.tag}\nYour id: ${user.id}`);
    },
};
