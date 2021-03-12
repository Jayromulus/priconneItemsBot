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
        { id: 1, name: 'Empress Shield', createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' },
        { id: 2, name: 'Empress Shield Shard', createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' },
        { id: 3, name: 'Lion King\'s Grace', createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' },
        { id: 4, name: 'Lion King\'s Grace Blueprint', createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' }
      ])

      await queryInterface.bulkInsert('components', [
        { id: 1, itemId: 1, componentId: 2, amount: 20, createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' },
        { id: 2, itemId: 1, componentId: 3, amount: 1, createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' },
        { id: 3, itemId: 3, componentId: 4, amount: 5, createdAt: '2021-03-11 01:20:55.158-05', updatedAt: '2021-03-11 01:20:55.158-05' }
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
