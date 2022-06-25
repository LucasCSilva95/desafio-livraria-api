import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Example = db.define(
  "examples",
  {
    exampleId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Example;
