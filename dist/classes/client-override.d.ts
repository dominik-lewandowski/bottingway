import { Client as DiscordClient, ClientOptions, Collection } from 'discord.js';
import { ISlashCommand } from '../types/slash-command';
export declare class Client<Ready extends boolean = boolean> extends DiscordClient<Ready> {
    commands: Collection<string, ISlashCommand>;
    constructor(options: ClientOptions, commands?: Collection<string, ISlashCommand>);
    setCommands(commands: ISlashCommand[]): void;
}
