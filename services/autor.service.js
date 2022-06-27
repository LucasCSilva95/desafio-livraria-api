import AutorRepository from "../repositories/autor.repository.js";

async function createAutor(autor) {
  return await AutorRepository.insertAutor(autor);
}

async function getAutores() {
  return await AutorRepository.getAutores();
}

async function getAutorById(id) {
  return await AutorRepository.getAutorById(id);
}

async function updateAutor(autor) {
  return await AutorRepository.updateAutor(autor);
}

async function deleteAutor(id) {
  return await AutorRepository.deleteAutor(id);
}

export default {
  createAutor,
  getAutores,
  getAutorById,
  updateAutor,
  deleteAutor,
};
