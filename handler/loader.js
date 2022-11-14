const { readdirSync } = require('fs'); 
const { Collection } = require('discord.js'); 
client.commands = new Collection(); 
 Array = []; 

 readdirSync('./comandos/').forEach(dirs => { 
     const commands = readdirSync(`./comandos/${dirs}`).filter(files => files.endsWith('.js')); 
  
     for (const file of commands) { 
         const command = require(`../comandos/${dirs}/${file}`); 
         if (command.name && command.description) { 
         Array.push(command); 
         console.log(`[ ${command.name.toLowerCase()} ]`); 
         client.commands.set(command.name.toLowerCase(), command); 
         delete require.cache[require.resolve(`../commands/${dirs}/${file}`)]; 
         } else console.log(`Error ao carregar: [ ${command.name.toLowerCase()} ]`) 
     }; 
 }); 
 client.on('ready', (client) => { 
  (client.config.app.global) client.application.commands.set(Array) 
 })
