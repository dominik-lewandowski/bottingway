import {CommandInteraction} from 'discord.js';
import {SlashCommandBuilder} from '@discordjs/builders';

export interface ISlashCommand {
    data: SlashCommandBuilder;
    execute(interaction: CommandInteraction): Promise<void>;
}
