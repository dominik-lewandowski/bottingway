import {Client as DiscordClient, ClientOptions, Collection} from 'discord.js';
import {ISlashCommand} from '../types/slash-command';

export class Client extends DiscordClient {
    commands: Collection<string, ISlashCommand>;

    constructor(options: ClientOptions, commands?: Collection<string, ISlashCommand>) {
        super(options);
        this.commands = commands || new Collection();
    }

    setCommands(commands: ISlashCommand[]): void {
        for (const command of commands) {
            this.commands.set(command.data.name, command);
        }
    }
}
