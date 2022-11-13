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

 //Arquivos 
require('./eventos/ready');



 client.login('token'); //Altere para o token da sua aplicação
