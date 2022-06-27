import Sequelize from "sequelize";
import db from "../repositories/db.js";
import AutorModel from "./autor.model.js";

const Livro = db.define(
  "livros",
  {
    livroId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Livro.belongsTo(AutorModel, { foreignKey: "autorId" });

export default Livro;
