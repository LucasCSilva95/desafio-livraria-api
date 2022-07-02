import LivroRepository from "../repositories/livro.repository.js";
import VendaRepository from "../repositories/venda.repository.js";
import InfoRepository from "../repositories/info.repository.js";

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function getLivros(autorId) {
  if (autorId) return await LivroRepository.getLivrosByAutorId(autorId);

  return await LivroRepository.getLivros();
}

async function getLivroById(id) {
  const livro = await LivroRepository.getLivroById(id);
  const livroInfo = await InfoRepository.getInfoByLivroId(id);
  livro.setDataValue("info", livroInfo);
  return livro;
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
