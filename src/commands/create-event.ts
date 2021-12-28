import {SlashCommandBuilder} from '@discordjs/builders';
import {CommandInteraction, MessageActionRow, MessageSelectMenu} from 'discord.js';
import {ISlashCommand} from '../types/slash-command';

export default {
    data: new SlashCommandBuilder()
        .setName('create-event')
        .setDescription('Creates a guild event.')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Content type')
                .setRequired(true)
                .addChoices([
                    ['New Content', 'New Content'],
                    ['Old Content', 'Old Content']
                ])
        ),
    async execute(interaction: CommandInteraction): Promise<void> {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('event-roles')
                    .setPlaceholder('Choose your roles')
                    .setMinValues(1)
                    .setMaxValues(3)
                    .addOptions([
                        {
                            label: 'Damage dealer',
                            value: 'damage_dealer'
                        },
                        {
                            label: 'Healer',
                            value: 'healer'
                        },
                        {
                            label: 'Tank',
                            value: 'tank'
                        }
                    ])
            );
        const type = interaction.options.get('type');
        const role = await interaction.guild?.roles.cache.find(role => role.name === type?.value)
        if (!role) {
            return await interaction.reply({content: 'Oops! Something went wrong.', ephemeral: true});
        }
        await interaction.reply({
            content: role.toString(),
            components: [row]
        });
    },
} as ISlashCommand;
