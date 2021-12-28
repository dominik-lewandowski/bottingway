import {SlashCommandBuilder} from '@discordjs/builders';
import {CommandInteraction} from 'discord.js';
import {ISlashCommand} from '../types/slash-command';

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info!'),
    async execute(interaction: CommandInteraction) {
        const user = interaction.user;
        await interaction.reply(`Your tag: ${user.tag}\nYour id: ${user.id}`);
    },
} as ISlashCommand;
