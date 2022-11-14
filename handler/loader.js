const { readdirSync } = require('fs'); 
const { Collection } = require('discord.js'); 
client.commands = new Collection(); 
 Array = []; 


const eventos  = readdirSync('./eventos/').filter(file => file.endsWith('.js')); 

 for (const file of eventos) { 
     const evento = require(`../eventos/${file}`); 
     console.log(`[ ${file.split('.')[0]} ]`); 
     client.on(file.split('.')[0], evento.bind(null, client)); 
     delete require.cache[require.resolve(`../eventos/${file}`)]; 
 }; 

 readdirSync('./comandos/').forEach(dirs => { 
     const comandos = readdirSync(`./comandos/${dirs}`).filter(files => files.endsWith('.js')); 
 
     for (const file of comandos) { 
         const comando = require(`../comandos/${dirs}/${file}`); 
         if (comando.name && comando.description) { 
         Array.push(comando); 
         console.log(`[ ${comando.name.toLowerCase()} ]`); 
         client.commands.set(comando.name.toLowerCase(), comando); 
         delete require.cache[require.resolve(`../comandos/${dirs}/${file}`)]; 
         } else console.log(`Error ao carregar: [ ${comando.name.toLowerCase()} ]`) 
     }; 
 }); 
 client.on('ready', (client) => { 
  (client.config.app.global) client.application.commands.set(Array) 
 })
