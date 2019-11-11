'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true},
      email: STRING,
      password: STRING,
      created_at: DATE,
      updated_at: DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('users');
  }
};
