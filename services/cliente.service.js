import ClienteRepository from "../repositories/cliente.repository.js";
import VendaRepository from "../repositories/venda.repository.js";

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function getClientes() {
  return await ClienteRepository.getClientes();
}

async function getClienteById(id) {
  return await ClienteRepository.getClienteById(id);
}

async function updateCliente(cliente) {
  await ClienteRepository.updateCliente(cliente);
  return await ClienteRepository.getClienteById(cliente.clienteId);
}

async function deleteCliente(id) {
  const vendaCliente = await VendaRepository.getVendasByClienteId(id);
  if (vendaCliente.length > 0)
    throw new Error("Operação negada! Existe(m) venda(s) para este cliente.");

  return await ClienteRepository.deleteCliente(id);
}

export default {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};
