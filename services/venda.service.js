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
  if (query.cliente_id)
    return await VendaRepository.getVendasByClienteId(query.cliente_id);

  if (query.livro_id)
    return await VendaRepository.getVendasByLivroId(query.livro_id);

  if (query.autor_id)
    return await VendaRepository.getVendasByAutorId(query.autor_id);

  return await VendaRepository.getVendas();
}

async function getVendaById(id) {
  return await VendaRepository.getVendaById(id);
}

async function updateVenda(venda) {
  return await VendaRepository.updateVenda(venda);
}

async function deleteVenda(id) {
  return await VendaRepository.deleteVenda(id);
}

export default {
  createVenda,
  getVendas,
  getVendaById,
  updateVenda,
  deleteVenda,
};
