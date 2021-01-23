module.exports = {
  up: (queryInterface) => {
    queryInterface.removeColumn('agendamentos', 'cancelamento');
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.addColumn('agendamentos', 'cancelamento', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    }),
};
