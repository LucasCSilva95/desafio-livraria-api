import LivroModel from "../models/livro.model.js";
import AutorModel from "../models/autor.model.js";

async function insertLivro(livro) {
  try {
    return await LivroModel.create(livro);
  } catch (error) {
    throw error;
  }
}

async function getLivros() {
  try {
    return await LivroModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getLivroById(id) {
  try {
    return await LivroModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function updateLivro(livro) {
  try {
    await LivroModel.update(livro, {
      where: {
        livroId: livro.livroId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function deleteLivro(id) {
  try {
    await LivroModel.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getLivrosByAutorId(autorId) {
  try {
    return await LivroModel.findAll({
      include: [
        {
          model: AutorModel,
          where: {
            autorId,
          },
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function decrementaEstoqueLivro(id) {
  try {
    await LivroModel.decrement(["estoque"], {
      where: {
        livroId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertLivro,
  getLivros,
  getLivroById,
  updateLivro,
  deleteLivro,
  decrementaEstoqueLivro,
  getLivrosByAutorId,
};
