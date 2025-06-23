"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Cambiar columna 'nombre' → 'nombre_empresa'
    await queryInterface.renameColumn("prospecto", "nombre", "nombre_empresa");

    // Eliminar columna 'empleados'
    await queryInterface.removeColumn("prospecto", "empleados");
  },

  async down(queryInterface, Sequelize) {
    // Revertir: cambiar de vuelta el nombre
    await queryInterface.renameColumn("prospecto", "nombre_empresa", "nombre");

    // Revertir: volver a crear la columna empleados
    await queryInterface.addColumn("prospecto", "empleados", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
