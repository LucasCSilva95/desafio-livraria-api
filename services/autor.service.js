import AutorRepository from "../repositories/autor.repository.js";
import LivroRepository from "../repositories/livro.repository.js";

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
  await AutorRepository.updateAutor(autor);
  return await AutorRepository.getAutorById(autor.autorId);
}

async function deleteAutor(id) {
  const livroAutor = await LivroRepository.getLivrosByAutorId(id);
  if (livroAutor.length > 0)
    throw new Error(
      "Operação negada! Exite(m) livro(s) cadastrado(s) para este Autor."
    );

  return await AutorRepository.deleteAutor(id);
}

export default {
  createAutor,
  getAutores,
  getAutorById,
  updateAutor,
  deleteAutor,
};
