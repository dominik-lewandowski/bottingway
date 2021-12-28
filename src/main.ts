import {Intents} from 'discord.js';
import {Client} from './classes/client-override';
import commands from './commands';
import events from './events';

const token = process.env.TOKEN;

// Create a new client instance
const client: Client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Set commands (does not equal registering them - check package.json scripts)
client.setCommands(commands);

// Add events
for (const event of events) {
    event.once
        ? client.once(event.name, (...args: any[]) => event.execute(...args))
        : client.on(event.name, (...args: any[]) => event.execute(...args));
}

// Login to Discord with your client's token
client.login(token);
