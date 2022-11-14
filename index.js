const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({ 
     intents: [ 
         GatewayIntentBits.Guilds, 
         GatewayIntentBits.GuildMembers, 
         GatewayIntentBits.GuildMessages, 
         GatewayIntentBits.GuildVoiceStates, 
         GatewayIntentBits.MessageContent 
     ], 
    disableMentions: 'everyone', 
 }); 

 //Handler
require('./handler/loader');




 client.login('token'); //Altere para o token da sua aplicação
