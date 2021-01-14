module.exports = {
  dialect: 'postgres',
  host: 'localhost:5432',
  username: 'postgres',
  password: 'mesavip-postgres',
  database: 'mesavip',
  define: {
    timestamps: true,
    undescored: true,
    underscoredAll: true,
  },
};
