module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('agendamentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      horario: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      quantidade_pessoas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      canceled_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      restaurante_id: {
        references: { model: 'restaurantes', key: 'id' },
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      cliente_id: {
        references: { model: 'clientes', key: 'id' },
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('agendamentos'),
};
