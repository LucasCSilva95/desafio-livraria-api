import ClienteRepository from "../repositories/cliente.repository.js";

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
  return await ClienteRepository.deleteCliente(id);
}

export default {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};
