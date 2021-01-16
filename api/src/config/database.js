module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'mesavip-postgres',
  database: 'mesavip',
  define: {
    timestamps: true,
    undescored: true,
    underscoredAll: true,
  },
};
