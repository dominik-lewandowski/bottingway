import {SlashCommandBuilder} from '@discordjs/builders';
import {CommandInteraction, Guild} from 'discord.js';
import {ISlashCommand} from '../types/slash-command';

export default {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info!'),
    async execute(interaction: CommandInteraction): Promise<void> {
        const guild = interaction.guild as Guild;
        await interaction.reply(`Server name: ${guild.name}\nTotal members: ${guild.memberCount}`);
    },
} as ISlashCommand;
