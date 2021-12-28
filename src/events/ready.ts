import {Client} from '../classes/client-override';
import {IEvent} from '../types/event';

export default {
    name: 'ready',
    once: true,
    execute(client: Client<true>): void {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }
} as IEvent;
