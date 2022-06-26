import ClienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function updateCliente(cliente) {
  return await ClienteRepository.updateCliente(cliente);
}

export default {
  createCliente,
  updateCliente,
};
