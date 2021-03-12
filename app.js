require('dotenv').config();
// npm install discord.js
const Discord = require('discord.js');
// create a new instance of the discord client
const client = new Discord.Client();
const models = require('./models')
const { Op } = require('sequelize');
const { Sequelize } = require('./models');

// when the bot is ready console log that it is logged in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// when there is a message then the bot will run this function, it looks like heavy moderation and conditions are needed to make sure it does not reply to itself and only when you want it to
client.on('message', async msg => {
  if(msg.author.bot){
    return;
  } else if(msg.content == 'ping') {
    msg.reply('pong', { allowedMentions: { users: [] } })
    .then(() => console.log(`Sent a reply to ${msg.author.username}`));
  } else if(msg.content.startsWith('!test')) {
    msg.channel.send('good testing dude!')
  } 
  
  else if(msg.content.startsWith('!build')) {
    const space = msg.content.split(' ');
    space.shift();
    const itemName = space.join(' ');
    if(itemName.toLowerCase() === 'empress shield') {
      const item = await 
      models.item.findOne(
        {
          where: { name: { [Op.iLike]: `%${itemName}%` } }, 
          include: [
            {
              model: models.component,
              attributes: ['id', 'amount', 'componentId', 'createdAt', 'updatedAt'],
              include: [
                {
                  seperate: true,
                  model: models.item,
                  // where: {
                  //   // id: {[Op.col]: 'components.componentId'}
                  //   // id: Sequelize.col('componentId')
                  //   id: {
                  //     [Op.col]: 'component.componentId'
                  //   }
                  // },
                  // required: true,!build empress shield
                  // attributes: ['components']
                  // where: {
                  //   id: 
                  //   // {
                  //   //   [Op.col]: 'components.componentId'
                  //   //   // [Op.col]: 'componentId'
                  //   // }
                  // },
                  // required: true
                  // through: {
                    // where: {
                    //   id: {
                    //     [Op.col]: 'components.componentId'
                    //   }
                    // }
                  // }
                  // joinTableAttributes: ['name']
                }
              ],
              
            },
          ],
          // subquery: false
          // subQuery: false
          // required: false
        }
      )
      console.log(item)
      msg.channel.send(`\`\`\`${JSON.stringify(item, null, 2)}\`\`\``)
      // msg.channel.send(`\`\`\`${JSON.stringify(item.name)}\`\`\``)
    } else {
      msg.channel.send(itemName)
    }
  }

  else if (msg.content.startsWith('!rb')) {
    const input = msg.content.split(' ')
    input.shift()
    const query = input.join(' ')

    // query on new tables

    console.log(query)
  }
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