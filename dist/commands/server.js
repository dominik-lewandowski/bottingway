"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info!'),
    async execute(interaction) {
        const guild = interaction.guild;
        await interaction.reply(`Server name: ${guild.name}\nTotal members: ${guild.memberCount}`);
    },
};
