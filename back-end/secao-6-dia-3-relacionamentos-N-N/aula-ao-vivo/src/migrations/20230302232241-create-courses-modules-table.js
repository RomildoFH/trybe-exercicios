'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Courses_Modules', {
      id_course: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      id_module: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Modules',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses_Modules');
  }
};
