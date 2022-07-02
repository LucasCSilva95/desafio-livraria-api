import InfoRepository from "../repositories/info.repository.js";

async function createAvaliacao(livroId, avaliacao) {
  const info = await InfoRepository.getInfoByLivroId(livroId);
  if (!info)
    throw new Error(`Nenhuma Info foi encontrada com o Livro ID ${livroId}.`);

  info.livroId = livroId;
  if (!info.avaliacoes) info.avaliacoes = [];

  info.avaliacoes.push({
    ...avaliacao,
  });

  return await InfoRepository.updateInfo(info);
}

async function deleteAvaliacao(livroId, index) {
  const info = await InfoRepository.getInfoByLivroId(livroId);
  if (!info)
    throw new Error(`Nenhuma Info foi encontrada com o Livro ID ${livroId}.`);

  if (index < 0) throw new Error(`Index deve ser maior ou igual à 0: ${index}`);

  info.avaliacoes.splice(index, 1);

  return await InfoRepository.updateInfo(info);
}

export default {
  createAvaliacao,
  deleteAvaliacao,
};
