import InfoRepository from "../repositories/info.repository.js";
import LivroRepository from "../repositories/livro.repository.js";

async function createInfo(info) {
  const livro = await LivroRepository.getLivroById(info.livroId);
  if (!livro)
    throw new Error(`Nenhum Livro foi encontrado com o ID ${info.livroId}.`);

  return await InfoRepository.insertInfo(info);
}

async function updateInfo(info) {
  const livro = await LivroRepository.getLivroById(info.livroId);
  if (!livro)
    throw new Error(`Nenhum Livro foi encontrado com o ID ${info.livroId}.`);

  return await InfoRepository.updateInfo(info);
}

async function deleteInfo(livroId) {
  const livro = await LivroRepository.getLivroById(livroId);
  if (!livro)
    throw new Error(`Nenhum Livro foi encontrado com o ID ${livroId}.`);

  return await InfoRepository.deleteInfo(livroId);
}

export default {
  createInfo,
  updateInfo,
  deleteInfo,
};
