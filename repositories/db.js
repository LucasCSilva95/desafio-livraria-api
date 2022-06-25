import Sequelize from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DB_CONNECTION_URI, {
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: false,
  },
});

export default sequelize;
