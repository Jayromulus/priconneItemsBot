'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('items', [
      // COMMONS 15
      { id: 1, name: 'Iron Blade', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Wooden Shield', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Leather Overalls', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Motivational Bracelet', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Charm Pendant', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Fragrant Wood Staff', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Traveler\'s Robe', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Fashionable Beret', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Warcry Bracelet', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Steel Spear', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, name: 'Leather Boots', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Hand Axe', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, name: 'Wooden Knuckles', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, name: 'Killer Pen', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, name: 'Hunter\'s Bow', createdAt: new Date(), updatedAt: new Date() },
      // COPPER 38
      { id: 16, name: 'Gear Blade', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, name: 'Blue Blood', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, name: 'Aurora Sword', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, name: 'Crescent Sword', createdAt: new Date(), updatedAt: new Date() },
      { id: 20, name: 'Commando Knife', createdAt: new Date(), updatedAt: new Date() },
      { id: 21, name: 'Leather Knuckles', createdAt: new Date(), updatedAt: new Date() },
      { id: 22, name: 'Crystal Bow', createdAt: new Date(), updatedAt: new Date() },
      { id: 23, name: 'Trident', createdAt: new Date(), updatedAt: new Date() },
      { id: 24, name: 'Flame Spear', createdAt: new Date(), updatedAt: new Date() },
      { id: 25, name: 'Metal Axe', createdAt: new Date(), updatedAt: new Date() },
      { id: 26, name: 'Full Metal Axe', createdAt: new Date(), updatedAt: new Date() },
      { id: 27, name: 'Green Rod', createdAt: new Date(), updatedAt: new Date() },
      { id: 28, name: 'Little Dragon Rod', createdAt: new Date(), updatedAt: new Date() },
      { id: 29, name: 'Staff of Vitality', createdAt: new Date(), updatedAt: new Date() },
      { id: 30, name: 'Unicorn\'s Grace', createdAt: new Date(), updatedAt: new Date() },
      { id: 31, name: 'Sage\'s Vestment', createdAt: new Date(), updatedAt: new Date() },
      { id: 32, name: 'Light Plate Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 33, name: 'Scalemail', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 34, name: 'Full Plate Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 35, name: 'Folkloric Garment', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 36, name: 'Ninja Outfit', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 37, name: 'Springtime Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 38, name: 'Nordic Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 39, name: 'Tower Shield', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 40, name: 'Crown Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 41, name: 'Hunting Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 42, name: 'Witch\'s Boots', createdAt: new Date(), updatedAt: new Date() },
      { id: 43, name: 'Cute Cap', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 44, name: 'Legionaire Helm', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 45, name: 'Priestess Hood', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 46, name: 'Jewel of Courage', createdAt: new Date(), updatedAt: new Date() },
      { id: 47, name: 'Spiked Bangle', createdAt: new Date(), updatedAt: new Date() },
      { id: 48, name: 'Benevolent Jewel', createdAt: new Date(), updatedAt: new Date() },
      { id: 49, name: 'Victory Friendship Bracelet', createdAt: new Date(), updatedAt: new Date() },
      { id: 50, name: 'Magic Glasses', createdAt: new Date(), updatedAt: new Date() },
      { id: 51, name: 'Orb of Wisdom', createdAt: new Date(), updatedAt: new Date() },
      { id: 52, name: 'Magic Monocle', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 53, name: 'Patterned Bracelet', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      // SILVER 45
      { id: 54, name: 'Sparkling Sword', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 55, name: 'Dragon Crest Sword', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 56, name: 'Feather Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 57, name: 'Moonlight Sword', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 58, name: 'Thunder Katana', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 59, name: 'Platinum Knife', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 60, name: 'Vampire\'s Dagger', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 61, name: 'Dragon\'s Claw', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 62, name: 'Cupid\'s Bow', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 63, name: 'Devil\'s Bow', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 64, name: 'A Knight\'s Pride', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 65, name: 'Super Spear', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 66, name: 'Blue Sphere Axe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 67, name: 'Graceful Flower Battleaxe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 68, name: 'Lightning Bolt Axe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 69, name: 'Thornblood Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 70, name: 'Devil\'s Horn', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 71, name: 'Protector of the Heavens', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 72, name: 'Flower Bud Staff', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 73, name: 'Fashionable Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 74, name: 'Battle Dress', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 75, name: 'Heavy Metal Armor', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 76, name: 'Gorgeous Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 77, name: 'Leather Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 78, name: 'Palace Uniform', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 79, name: 'Cosmic Veil', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 80, name: 'Cupid\'s Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 81, name: 'Philosopher\'s Robe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 82, name: 'Garnet Shield', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 83, name: 'Ninja Shoes', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 84, name: 'Fencing Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 85, name: 'Witch\'s Palace Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 86, name: 'Dragon\'s Head', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 87, name: 'Witch\'s Headband', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 88, name: 'Witch\'s Hat', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 89, name: 'Opal Earrings', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 90, name: 'Gryphon Feather Headress', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 91, name: 'Scarlet Diamonds', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 92, name: 'Emerald Earrings', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 93, name: 'Octogram Pendant', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 94, name: 'Lion King\'s Grace', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 95, name: 'Turquoise Earrings', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 96, name: 'Pearl Earrings', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 97, name: 'Sorcerer Glasses', createdAt: new Date(), updatedAt: new Date() },
      { id: 98, name: 'Laurel\'s Sorrow', createdAt: new Date(), updatedAt: new Date() }, // Shard
      // GOLD 73
      { id: 99, name: 'Angelic Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 100, name: 'Sun Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 101, name: 'Beautiful Butterfly Katana', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 102, name: 'Iridescent Blade', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 103, name: 'Precious Knife', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 104, name: 'Princess Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 105, name: 'Blazing Gauntlet', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 106, name: 'Lionheart\'s Gauntlet', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 107, name: 'Lightning Bow', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 108, name: 'Angel Bow', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 109, name: 'Scarlet Dragon Lance', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 110, name: 'Queen Bee Spear', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 111, name: 'Purple Dragon Axe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 112, name: 'Hellfire Axe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 113, name: 'Fury Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 114, name: 'Sun Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 115, name: 'Moon Flower Cane', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 116, name: 'Life Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 117, name: 'Invisible Dress', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 118, name: 'Angelic Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 119, name: 'Moonlit Robe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 120, name: 'Grand Wizard\'s Robe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 121, name: 'Empress Shield', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 122, name: 'Paladin Greaves', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 123, name: 'Wizard\'s Boots', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 124, name: 'Feather Waltz', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 125, name: 'Wizard\'s Hood', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      // COPPER COMPONENTS
      { id: 126, name: 'Light Plate Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 127, name: 'Scalemail Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 128, name: 'Full Plate Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 129, name: 'Folkloric Garment Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 130, name: 'Ninja Outfit Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 131, name: 'Springtime Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 132, name: 'Nordic Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 133, name: 'Tower Shield Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 134, name: 'Crown Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 135, name: 'Hunting Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 136, name: 'Cute Cap Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 137, name: 'Legionaire Helm Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 138, name: 'Prisetess Hood Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 139, name: 'Magic Monocle Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 140, name: 'Patterned Bracelet Blueprint', createdAt: new Date(), updatedAt: new Date() },
      // SILVER COMPONENTS
      { id: 141, name: 'Sparkling Sword (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 142, name: 'Dragon Crest Sword (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 143, name: 'Feather Blade (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 144, name: 'Moonlight Sword Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 145, name: 'Thunder Katana Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 146, name: 'Platinum Knife (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 147, name: 'Vampire\'s Dagger Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 148, name: 'Dragon\'s Claw (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 149, name: 'Cupid\'s Bow (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 150, name: 'Devil\'s Bow Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 151, name: 'A Knight\'s Pride Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 152, name: 'Super Spear (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 153, name: 'Blue Sphere Axe (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 154, name: 'Graceful Flower Battleaxe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 155, name: 'Lightning Bolt Axe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 156, name: 'Thornblood Rod (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 157, name: 'Devil\s Horn (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 158, name: 'Protector of the Heavens Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 159, name: 'Flower Bud Staff (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 160, name: 'Fashionable Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 161, name: 'Battle Dress Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 162, name: 'Heavy Metal Armor (Fragment', createdAt: new Date(), updatedAt: new Date() },
      { id: 163, name: 'Gorgeous Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 164, name: 'Leather Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 165, name: 'Palace Uniform (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 166, name: 'Cosmic Veil Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 167, name: 'Cupid\'s Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 168, name: 'Philosopher\'s Robe (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 169, name: 'Garnet Shield (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 170, name: 'Ninja Shoes (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 171, name: 'Fencing Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 172, name: 'Witch\'s Palace Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 173, name: 'Dragon\'s Head Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 174, name: 'Witch\'s Headband (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 175, name: 'Witch\'s Hat (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 176, name: 'Opal Earrings (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 177, name: 'Gryphon Feather Headress (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 178, name: 'Scarlet Diamonds (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 179, name: 'Emerald Earrings (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 180, name: 'Octogram Pendant Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 181, name: 'Lion King\'s Grace Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 182, name: 'Turquoise Earrings (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 183, name: 'Pearl Earrings Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 184, name: 'Laurel\'s Sorrow (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      // GOLD COMPONENTS
      // { id: 184, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 185, name: '', createdAt: new Date(), updatedAt: new Date() },
      // // PURPLE ???
      // { id: 102, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 103, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 104, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 105, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 106, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 107, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: 108, name: '', createdAt: new Date(), updatedAt: new Date() },
      // { id: , name: , createdAt: new Date(), updatedAt: new Date() }
    ])

    await queryInterface.bulkInsert('components', [
      { id: 1, itemId: 32, componentId: 126, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, itemId: 33, componentId: 127, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, itemId: 34, componentId: 128, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, itemId: 35, componentId: 129, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, itemId: 36, componentId: 130, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, itemId: 37, componentId: 131, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, itemId: 38, componentId: 132, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, itemId: 39, componentId: 133, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, itemId: 40, componentId: 134, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, itemId: 41, componentId: 135, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 11, itemId: 43, componentId: 136, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 12, itemId: 44, componentId: 137, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 13, itemId: 45, componentId: 138, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 14, itemId: 52, componentId: 139, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 15, itemId: 53, componentId: 140, amount: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 16, itemId: 54, componentId: 141, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 17, itemId: 55, componentId: 142, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 18, itemId: 56, componentId: 143, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 19, itemId: 57, componentId: 144, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 20, itemId: 58, componentId: 145, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 21, itemId: 59, componentId: 146, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 22, itemId: 60, componentId: 147, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 23, itemId: 61, componentId: 148, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 24, itemId: 62, componentId: 149, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 25, itemId: 63, componentId: 150, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 26, itemId: 64, componentId: 151, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 27, itemId: 65, componentId: 152, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 28, itemId: 66, componentId: 153, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 29, itemId: 67, componentId: 154, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 30, itemId: 68, componentId: 155, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 31, itemId: 69, componentId: 156, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 32, itemId: 70, componentId: 157, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 33, itemId: 71, componentId: 158, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 34, itemId: 72, componentId: 159, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 35, itemId: 73, componentId: 160, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 36, itemId: 74, componentId: 161, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 37, itemId: 75, componentId: 162, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 38, itemId: 76, componentId: 163, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 39, itemId: 77, componentId: 164, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 40, itemId: 78, componentId: 165, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 41, itemId: 79, componentId: 166, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 42, itemId: 80, componentId: 167, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 43, itemId: 81, componentId: 168, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 44, itemId: 82, componentId: 169, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 45, itemId: 83, componentId: 170, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 46, itemId: 84, componentId: 171, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 47, itemId: 85, componentId: 172, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 48, itemId: 86, componentId: 173, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 49, itemId: 87, componentId: 174, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 50, itemId: 88, componentId: 175, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 51, itemId: 89, componentId: 176, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 52, itemId: 90, componentId: 177, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 53, itemId: 91, componentId: 178, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 54, itemId: 92, componentId: 179, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 55, itemId: 93, componentId: 180, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 56, itemId: 94, componentId: 181, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 57, itemId: 95, componentId: 182, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 58, itemId: 96, componentId: 183, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 59, itemId: 98, componentId: 184, amount: 5, createdAt: new Date(), updatedAt: new Date() },
      // { id: 60, itemId: , componentId: , createdAt: new Date(), updatedAt: new Date() },
      // { id: , itemId: , componentId: , createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('items', null, {})
    await queryInterface.bulkDelete('components', null, {})
  }
};
