require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1086424342822404226')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=-ZmAcmUSMHM`)
        .setDetails(`/inject /ever`)
        .setName(`/inject /ever`)
        .setState(`freedom`)
        .setParty({
            max: 840,
            current: 689,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`https://media.discordapp.net/attachments/1075905049265459210/1085976704918491226/7324DBAB-1EB7-43EC-BBDD-E978E06F1CF3.gif?width=422&height=422`)
        .setAssetsLargeText(`/inject /ever`)
        .setAssetsSmallImage(`https://cdn.discordapp.com/attachments/1088247002174849184/1089288934254727250/1078730523079344170.gif`)
        .setAssetsSmallText(`freedom`)
        .addButton(`inject`, `https://discord.gg/inject`)
        .addButton(`ever`, `https://discord.gg/ever`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
