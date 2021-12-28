import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';
import commands from './commands';

const [clientId, guildId, token] = [process.env.CLIENT_ID, process.env.GUILD_ID, process.env.TOKEN];

if (!clientId || !guildId || !token) {
    throw new Error('Missing environment variables');
}

const commandsJSON = commands.map(c => c.data.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandsJSON })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
