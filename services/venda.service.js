import VendaRepository from "../repositories/venda.repository.js";
import LivroRepository from "../repositories/livro.repository.js";

async function createVenda(venda) {
  var livro = await LivroRepository.getLivroById(venda.livroId);

  if (!livro.estoque) {
    throw new Error("Não há livro em estoque.");
  }

  venda.valor = livro.valor;
  const vendaInserida = await VendaRepository.insertVenda(venda);
  await LivroRepository.decrementaEstoqueLivro(livro.livroId);

  return vendaInserida;
}

async function getVendas(query) {
  if (query.clienteId)
    return await VendaRepository.getVendasByClienteId(query.clienteId);

  if (query.livroId)
    return await VendaRepository.getVendasByLivroId(query.livroId);

  if (query.autorId)
    return await VendaRepository.getVendasByAutorId(query.autorId);

  return await VendaRepository.getVendas();
}

async function getVendaById(id) {
  return await VendaRepository.getVendaById(id);
}

export default {
  createVenda,
  getVendas,
  getVendaById,
};
