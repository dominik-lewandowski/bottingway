import {Interaction} from 'discord.js';
import {Client} from '../classes/client-override';
import {IEvent} from '../types/event';

export default {
    name: 'interactionCreate',
    async execute(interaction: Interaction): Promise<void> {
        const client = interaction.client as Client;
        let entity;
        if (interaction.isCommand()) {
            entity = client.commands.get(interaction.commandName);
        } else if (interaction.isSelectMenu()) {
            entity = client.selectMenus.get(interaction.id);
        }

        if (!entity) return;

        try {
            await entity.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: `An oopsie happened.`,
                ephemeral: true
            });
        }
    }
} as IEvent;
