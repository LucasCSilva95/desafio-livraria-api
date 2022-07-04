import ClienteRepository from "../repositories/cliente.repository.js";
import VendaRepository from "../repositories/venda.repository.js";
import basicAuth from "express-basic-auth";

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}

async function getClientes() {
  return await ClienteRepository.getClientes();
}

async function getClienteById(id) {
  return await ClienteRepository.getClienteById(id);
}

async function getClienteByEmail(email) {
  return await ClienteRepository.getClienteByEmail(email);
}

async function verificaLogin(email, senha) {
  const cliente = await ClienteRepository.getClienteByEmail(email);
  if (!cliente) return false;

  return basicAuth.safeCompare(cliente.senha, senha);
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
  getClienteByEmail,
  verificaLogin,
};
