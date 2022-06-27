import AutorModel from "../models/autor.model.js";

async function insertAutor(autor) {
  try {
    return await AutorModel.create(autor);
  } catch (error) {
    throw error;
  }
}

async function getAutores() {
  try {
    return await AutorModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAutorById(id) {
  try {
    return await AutorModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function updateAutor(autor) {
  try {
    await AutorModel.update(autor, {
      where: {
        autorId: autor.autorId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function deleteAutor(id) {
  try {
    await AutorModel.destroy({
      where: {
        autorId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertAutor,
  getAutores,
  getAutorById,
  updateAutor,
  deleteAutor,
};
