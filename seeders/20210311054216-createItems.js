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
      { id: 1, grade: 'Common', name: 'Iron Blade', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, grade: 'Common', name: 'Wooden Shield', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, grade: 'Common', name: 'Leather Overalls', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, grade: 'Common', name: 'Motivational Bracelet', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, grade: 'Common', name: 'Charm Pendant', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, grade: 'Common', name: 'Fragrant Wood Staff', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, grade: 'Common', name: 'Traveler\'s Robe', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, grade: 'Common', name: 'Fashionable Beret', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, grade: 'Common', name: 'Warcry Bracelet', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, grade: 'Common', name: 'Steel Spear', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, grade: 'Common', name: 'Leather Boots', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, grade: 'Common', name: 'Hand Axe', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, grade: 'Common', name: 'Wooden Knuckles', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, grade: 'Common', name: 'Killer Pen', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, grade: 'Common', name: 'Hunter\'s Bow', createdAt: new Date(), updatedAt: new Date() },
      // COPPER 38
      { id: 16, grade: 'Copper', name: 'Gear Blade', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, grade: 'Copper', name: 'Blue Blood', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, grade: 'Copper', name: 'Aurora Sword', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, grade: 'Copper', name: 'Crescent Sword', createdAt: new Date(), updatedAt: new Date() },
      { id: 20, grade: 'Copper', name: 'Commando Knife', createdAt: new Date(), updatedAt: new Date() },
      { id: 21, grade: 'Copper', name: 'Leather Knuckles', createdAt: new Date(), updatedAt: new Date() },
      { id: 22, grade: 'Copper', name: 'Crystal Bow', createdAt: new Date(), updatedAt: new Date() },
      { id: 23, grade: 'Copper', name: 'Trident', createdAt: new Date(), updatedAt: new Date() },
      { id: 24, grade: 'Copper', name: 'Flame Spear', createdAt: new Date(), updatedAt: new Date() },
      { id: 25, grade: 'Copper', name: 'Metal Axe', createdAt: new Date(), updatedAt: new Date() },
      { id: 26, grade: 'Copper', name: 'Full Metal Axe', createdAt: new Date(), updatedAt: new Date() },
      { id: 27, grade: 'Copper', name: 'Green Rod', createdAt: new Date(), updatedAt: new Date() },
      { id: 28, grade: 'Copper', name: 'Little Dragon Rod', createdAt: new Date(), updatedAt: new Date() },
      { id: 29, grade: 'Copper', name: 'Staff of Vitality', createdAt: new Date(), updatedAt: new Date() },
      { id: 30, grade: 'Copper', name: 'Unicorn\'s Grace', createdAt: new Date(), updatedAt: new Date() },
      { id: 31, grade: 'Copper', name: 'Sage\'s Vestment', createdAt: new Date(), updatedAt: new Date() },
      { id: 32, grade: 'Copper', name: 'Light Plate Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 33, grade: 'Copper', name: 'Scalemail', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 34, grade: 'Copper', name: 'Full Plate Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 35, grade: 'Copper', name: 'Folkloric Garment', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 36, grade: 'Copper', name: 'Ninja Outfit', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 37, grade: 'Copper', name: 'Springtime Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 38, grade: 'Copper', name: 'Nordic Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 39, grade: 'Copper', name: 'Tower Shield', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 40, grade: 'Copper', name: 'Crown Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 41, grade: 'Copper', name: 'Hunting Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 42, grade: 'Copper', name: 'Witch\'s Boots', createdAt: new Date(), updatedAt: new Date() },
      { id: 43, grade: 'Copper', name: 'Cute Cap', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 44, grade: 'Copper', name: 'Legionnaire Helm', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 45, grade: 'Copper', name: 'Priestess Hood', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 46, grade: 'Copper', name: 'Jewel of Courage', createdAt: new Date(), updatedAt: new Date() },
      { id: 47, grade: 'Copper', name: 'Spiked Bangle', createdAt: new Date(), updatedAt: new Date() },
      { id: 48, grade: 'Copper', name: 'Benevolent Jewel', createdAt: new Date(), updatedAt: new Date() },
      { id: 49, grade: 'Copper', name: 'Victory Friendship Bracelet', createdAt: new Date(), updatedAt: new Date() },
      { id: 50, grade: 'Copper', name: 'Magic Glasses', createdAt: new Date(), updatedAt: new Date() },
      { id: 51, grade: 'Copper', name: 'Orb of Wisdom', createdAt: new Date(), updatedAt: new Date() },
      { id: 52, grade: 'Copper', name: 'Magic Monocle', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 53, grade: 'Copper', name: 'Patterned Bracelet', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      // SILVER 45
      { id: 54, grade: 'Silver', name: 'Sparkling Sword', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 55, grade: 'Silver', name: 'Dragon Crest Sword', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 56, grade: 'Silver', name: 'Feather Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 57, grade: 'Silver', name: 'Moonlight Sword', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 58, grade: 'Silver', name: 'Thunder Katana', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 59, grade: 'Silver', name: 'Platinum Knife', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 60, grade: 'Silver', name: 'Vampire\'s Dagger', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 61, grade: 'Silver', name: 'Dragon\'s Claw', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 62, grade: 'Silver', name: 'Cupid\'s Bow', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 63, grade: 'Silver', name: 'Devil\'s Bow', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 64, grade: 'Silver', name: 'A Knight\'s Pride', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 65, grade: 'Silver', name: 'Super Spear', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 66, grade: 'Silver', name: 'Blue Sphere Axe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 67, grade: 'Silver', name: 'Graceful Flower Battleaxe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 68, grade: 'Silver', name: 'Lightning Bolt Axe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 69, grade: 'Silver', name: 'Thornblood Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 70, grade: 'Silver', name: 'Devil\'s Horn', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 71, grade: 'Silver', name: 'Protector of the Heavens', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 72, grade: 'Silver', name: 'Flower Bud Staff', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 73, grade: 'Silver', name: 'Fashionable Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 74, grade: 'Silver', name: 'Battle Dress', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 75, grade: 'Silver', name: 'Heavy Metal Armor', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 76, grade: 'Silver', name: 'Gorgeous Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 77, grade: 'Silver', name: 'Leather Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 78, grade: 'Silver', name: 'Palace Uniform', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 79, grade: 'Silver', name: 'Cosmic Veil', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 80, grade: 'Silver', name: 'Cupid\'s Robe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 81, grade: 'Silver', name: 'Philosopher\'s Robe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 82, grade: 'Silver', name: 'Garnet Shield', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 83, grade: 'Silver', name: 'Ninja Shoes', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 84, grade: 'Silver', name: 'Fencing Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 85, grade: 'Silver', name: 'Witch\'s Palace Boots', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 86, grade: 'Silver', name: 'Dragon\'s Head', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 87, grade: 'Silver', name: 'Witch\'s Headband', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 88, grade: 'Silver', name: 'Witch\'s Hat', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 89, grade: 'Silver', name: 'Opal Earrings', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 90, grade: 'Silver', name: 'Gryphon Feather Headress', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 91, grade: 'Silver', name: 'Scarlet Diamonds', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 92, grade: 'Silver', name: 'Emerald Earrings', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 93, grade: 'Silver', name: 'Octogram Pendant', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 94, grade: 'Silver', name: 'Lion King\'s Grace', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 95, grade: 'Silver', name: 'Turquoise Earrings', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 96, grade: 'Silver', name: 'Pearl Earrings', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 97, grade: 'Silver', name: 'Sorcerer Glasses', createdAt: new Date(), updatedAt: new Date() },
      { id: 98, grade: 'Silver', name: 'Laurel\'s Sorrow', createdAt: new Date(), updatedAt: new Date() }, // Shard
      // GOLD 73
      { id: 99, grade: 'Gold', name: 'Angelic Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 100, grade: 'Gold', name: 'Sun Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 101, grade: 'Gold', name: 'Beautiful Butterfly Katana', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 102, grade: 'Gold', name: 'Iridescent Blade', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 103, grade: 'Gold', name: 'Precious Knife', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 104, grade: 'Gold', name: 'Princess Blade', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 105, grade: 'Gold', name: 'Blazing Gauntlet', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 106, grade: 'Gold', name: 'Lionheart\'s Gauntlet', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 107, grade: 'Gold', name: 'Lightning Bow', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 108, grade: 'Gold', name: 'Angel Bow', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 109, grade: 'Gold', name: 'Scarlet Dragon Lance', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 110, grade: 'Gold', name: 'Queen Bee Spear', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 111, grade: 'Gold', name: 'Purple Dragon Axe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 112, grade: 'Gold', name: 'Hellfire Axe', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 113, grade: 'Gold', name: 'Fury Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 114, grade: 'Gold', name: 'Sun Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 115, grade: 'Gold', name: 'Moon Flower Cane', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 116, grade: 'Gold', name: 'Life Rod', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 117, grade: 'Gold', name: 'Invisible Dress', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 118, grade: 'Gold', name: 'Angelic Armor', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 119, grade: 'Gold', name: 'Moonlit Robe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 120, grade: 'Gold', name: 'Grand Wizard\'s Robe', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 121, grade: 'Gold', name: 'Empress Shield', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 122, grade: 'Gold', name: 'Paladin Greaves', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 123, grade: 'Gold', name: 'Wizard\'s Boots', createdAt: new Date(), updatedAt: new Date() }, // Shard
      { id: 124, grade: 'Gold', name: 'Feather Waltz', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      { id: 125, grade: 'Gold', name: 'Wizard\'s Hood', createdAt: new Date(), updatedAt: new Date() }, // Blueprint
      // COPPER COMPONENTS
      { id: 126, grade: 'Copper', name: 'Light Plate Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 127, grade: 'Copper', name: 'Scalemail Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 128, grade: 'Copper', name: 'Full Plate Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 129, grade: 'Copper', name: 'Folkloric Garment Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 130, grade: 'Copper', name: 'Ninja Outfit Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 131, grade: 'Copper', name: 'Springtime Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 132, grade: 'Copper', name: 'Nordic Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 133, grade: 'Copper', name: 'Tower Shield Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 134, grade: 'Copper', name: 'Crown Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 135, grade: 'Copper', name: 'Hunting Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 136, grade: 'Copper', name: 'Cute Cap Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 137, grade: 'Copper', name: 'Legionaire Helm Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 138, grade: 'Copper', name: 'Prisetess Hood Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 139, grade: 'Copper', name: 'Magic Monocle Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 140, grade: 'Copper', name: 'Patterned Bracelet Blueprint', createdAt: new Date(), updatedAt: new Date() },
      // SILVER COMPONENTS
      { id: 141, grade: 'Silver', name: 'Sparkling Sword (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 142, grade: 'Silver', name: 'Dragon Crest Sword (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 143, grade: 'Silver', name: 'Feather Blade (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 144, grade: 'Silver', name: 'Moonlight Sword Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 145, grade: 'Silver', name: 'Thunder Katana Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 146, grade: 'Silver', name: 'Platinum Knife (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 147, grade: 'Silver', name: 'Vampire\'s Dagger Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 148, grade: 'Silver', name: 'Dragon\'s Claw (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 149, grade: 'Silver', name: 'Cupid\'s Bow (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 150, grade: 'Silver', name: 'Devil\'s Bow Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 151, grade: 'Silver', name: 'A Knight\'s Pride Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 152, grade: 'Silver', name: 'Super Spear (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 153, grade: 'Silver', name: 'Blue Sphere Axe (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 154, grade: 'Silver', name: 'Graceful Flower Battleaxe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 155, grade: 'Silver', name: 'Lightning Bolt Axe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 156, grade: 'Silver', name: 'Thornblood Rod (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 157, grade: 'Silver', name: 'Devil\'s Horn (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 158, grade: 'Silver', name: 'Protector of the Heavens Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 159, grade: 'Silver', name: 'Flower Bud Staff (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 160, grade: 'Silver', name: 'Fashionable Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 161, grade: 'Silver', name: 'Battle Dress Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 162, grade: 'Silver', name: 'Heavy Metal Armor (Fragment', createdAt: new Date(), updatedAt: new Date() },
      { id: 163, grade: 'Silver', name: 'Gorgeous Armor Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 164, grade: 'Silver', name: 'Leather Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 165, grade: 'Silver', name: 'Palace Uniform (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 166, grade: 'Silver', name: 'Cosmic Veil Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 167, grade: 'Silver', name: 'Cupid\'s Robe Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 168, grade: 'Silver', name: 'Philosopher\'s Robe (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 169, grade: 'Silver', name: 'Garnet Shield (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 170, grade: 'Silver', name: 'Ninja Shoes (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 171, grade: 'Silver', name: 'Fencing Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 172, grade: 'Silver', name: 'Witch\'s Palace Boots Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 173, grade: 'Silver', name: 'Dragon\'s Head Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 174, grade: 'Silver', name: 'Witch\'s Headband (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 175, grade: 'Silver', name: 'Witch\'s Hat (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 176, grade: 'Silver', name: 'Opal Earrings (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 177, grade: 'Silver', name: 'Gryphon Feather Headress (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 178, grade: 'Silver', name: 'Scarlet Diamonds (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 179, grade: 'Silver', name: 'Emerald Earrings (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 180, grade: 'Silver', name: 'Octogram Pendant Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 181, grade: 'Silver', name: 'Lion King\'s Grace Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 182, grade: 'Silver', name: 'Turquoise Earrings (Fragment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 183, grade: 'Silver', name: 'Pearl Earrings Blueprint', createdAt: new Date(), updatedAt: new Date() },
      { id: 184, grade: 'Silver', name: 'Laurel\'s Sorrow (Fragment)', createdAt: new Date(), updatedAt: new Date() },
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
