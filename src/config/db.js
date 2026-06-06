const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');

        await sequelize.sync();

        console.log('Database synced');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };