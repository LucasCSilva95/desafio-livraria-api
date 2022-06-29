import LivroRepository from "../repositories/livro.repository.js";
import VendaRepository from "../repositories/venda.repository.js";

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function getLivros() {
  return await LivroRepository.getLivros();
}

async function getLivroById(id) {
  return await LivroRepository.getLivroById(id);
}

async function updateLivro(livro) {
  await LivroRepository.updateLivro(livro);
  return LivroRepository.getLivroById(livro.livroId);
}

async function deleteLivro(id) {
  const vendaLivro = await VendaRepository.getVendasByLivroId(id);
  if (vendaLivro.length > 0)
    throw new Error(
      "Operação negada! Exite(m) venda(s) cadastrada(s) para este Livro."
    );

  return await LivroRepository.deleteLivro(id);
}

export default {
  createLivro,
  getLivros,
  getLivroById,
  updateLivro,
  deleteLivro,
};
