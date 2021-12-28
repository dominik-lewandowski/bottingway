import {SlashCommandBuilder} from '@discordjs/builders';
import {CommandInteraction} from 'discord.js';
import {ISlashCommand} from '../types/slash-command';

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction: CommandInteraction): Promise<void> {
        await interaction.reply('Pong!');
    },
} as ISlashCommand;
