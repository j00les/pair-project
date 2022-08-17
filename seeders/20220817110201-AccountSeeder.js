'use strict';
let fs = require('fs');



module.exports = {
  up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/accounts.json', "utf-8")).map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert('Accounts', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Accounts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
