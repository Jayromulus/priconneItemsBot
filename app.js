require('dotenv').config();
// npm install discord.js
const Discord = require('discord.js');
// create a new instance of the discord client
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION', 'CHANNEL']});
const models = require('./models')
const { Op } = require('sequelize');
const { Sequelize } = require('./models');

// MAKE A JSON FILE WITH ALL OF THE ITEM NAMES AND IDS TO USE SQUARE BRACKET NOTATION AS THE REACTIONS


// when the bot is ready console log that it is logged in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// when there is a message then the bot will run this function, it looks like heavy moderation and conditions are needed to make sure it does not reply to itself and only when you want it to
client.on('message', async msg => {
  if(msg.author.bot){
    return;
  } else if(msg.content == 'ping') {
    msg.react(msg.guild.emojis.cache.find(emoji => emoji.name == 'vsauce'))
    msg.reply('pong', { allowedMentions: { users: [] } })
    .then(() => console.log(`Sent a reply to ${msg.author.username}`));
  } else if(msg.content.startsWith('!test')) {
    msg.channel.send('good testing dude!')
  } 
  
  else if(msg.content.startsWith('?b')) {
    const space = msg.content.split(' ');
    space.shift();
    const itemName = space.join(' ');
    // if(itemName.toLowerCase() === 'empress shield' || itemName.toLowerCase().includes('empress')) {
      const item = await 
      models.item.findOne(
        {
          where: { name: { [Op.iLike]: `%${itemName}%` } }, 
          include: [
            {
              model: models.component,
              // attributes: ['id', 'amount', 'componentId', 'createdAt', 'updatedAt'],
              // I KNOW THIS IS TOO MANY INCLUDES AND SUPER MESSY BUT WORKS SO I DONT CARE

              // might rework this to have reactions cycle through different components??
              include: [
                {
                  seperate: true,
                  model: models.item,
                  include: [
                    {   
                      seperate: true,
                      model: models.component,
                      // as: 'component',
                      include: [
                        {
                          seperate: true,
                          model: models.item,
                          // as: 'component',
                          include: [
                            {   
                              seperate: true,
                              model: models.component,
                              include: [
                                {
                                  seperate: true,
                                  model: models.item,
                                  include: [
                                    {   
                                      seperate: true,
                                      model: models.component,
                                      
                                    }
                                  ],
                                }
                              ],
                            }
                          ],
                        }
                      ],
                    }
                  ],
                }
              ],
              
            },
          ],
        }
      )
      console.log(item, itemName)
      ;(await msg.channel.send(`\`\`\`${JSON.stringify(item, null, 2)}\`\`\``)).react('550481727165038593')
      // msg.channel.send(`\`\`\`${JSON.stringify(item.name)}\`\`\``)
    // } else {
    //   msg.channel.send(itemName)
    // }
  } 
  // else {
  //   // right click to open an emote in browser and copy the filename as the id
  //   (await msg.channel.send('Testing this functionality')).react('550481727165038593')
  //   // get reactions working to see information from different objects
  //   // console.log(client.emojis.cache.id())
  //   // console.log(client.emojis.cache.get())
  // }

  // else if (msg.content.startsWith('!rb')) {
  //   const input = msg.content.split(' ')
  //   input.shift()
  //   const query = input.join(' ')

  //   // query on new tables

  //   console.log(query)
  // }
});


// You can also try to upgrade partials to full instances:
client.on('messageReactionAdd', async (reaction, user) => {
  // If a message gains a reaction and it is uncached, fetch and cache the message
  // You should account for any errors while fetching, it could return API errors if the resource is missing
  if (reaction.message.partial) await reaction.message.fetch();
  // Now the message has been cached and is fully available:
  console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
  // Fetches and caches the reaction itself, updating resources that were possibly defunct.
  if (reaction.partial) await reaction.fetch();
  // Now the reaction is fully available and the properties will be reflected accurately:
  console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});


client.login(process.env.TOKEN);



/*

ITEMS HAVE A NAME

COMPONENT TABLE HAS THE ITEM ID (COMPLETE ITEM) A COMPONENT ID (THE BLUEPRINT OR COMPONENT ITEM NEEDED) AND AN AMOUNT (AMOUNT OF COMPONENT NEEDED)

ITEM
{
  id: 1,
  name: "Lion King's Grace"
}

{
  id: 2,
  name: "Lion King's Grace Blueprint"
}

COMPONENT
{
  id: 1,
  itemId: 1, (item table)
  amount 5,
  componentId: 2 (item table)
}

*/