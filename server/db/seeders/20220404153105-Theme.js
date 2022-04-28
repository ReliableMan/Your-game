"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes", [
      {
        text: "Эльбрус",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "ITишечка",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "React",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "просветление в JS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Мемный Денис",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Random",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
