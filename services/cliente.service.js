import ClienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

export default {
  createCliente,
};
