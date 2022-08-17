'use strict';

let fs = require('fs');


module.exports = {
  async up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/user.json', "utf-8")).map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    return queryInterface.bulkInsert('Users', data, {})
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
