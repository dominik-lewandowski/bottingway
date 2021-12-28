import {Interaction} from 'discord.js';
import {Client} from '../classes/client-override';
import {IEvent} from '../types/event';

export default {
    name: 'interactionCreate',
    async execute(interaction: Interaction): Promise<void> {
        if (!interaction.isCommand()) return;
        const client = interaction.client as Client;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    }
} as IEvent;
