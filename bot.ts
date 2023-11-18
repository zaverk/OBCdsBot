import { Client, GuildMember } from "discord.js";
import { token } from "./key";

const role_id = '1175357100155736146';

const client = new Client({
    intents: ['Guilds', 'GuildMembers'],
});

client.login(token);

client.on('guildMemberAdd', async (member: GuildMember) => {
    if (token) // condition of presence in meetupSignIn.db, replace to valid 
        {
            const role = member.guild.roles.cache.get(role_id)
            if (role) {
                member.roles.add(role);
            }
        }
})
