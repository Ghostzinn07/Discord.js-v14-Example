module.exports = { 
     name: 'ping', 
     description: "Comando de ping", 
     async execute({ client, i }) { 
         i.reply(`Pong! ${client.ws.ping}ms`) 
  
     }, 
 };
