import ClienteModel from "../models/cliente.model.js";

async function insertCliente(cliente) {
  try {
    return await ClienteModel.create(cliente);
  } catch (error) {
    throw error;
  }
}

async function getClientes() {
  try {
    return await ClienteModel.findAll();
  } catch (error) {
    throw error;
  }
}

async function getClienteById(id) {
  try {
    return await ClienteModel.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function updateCliente(cliente) {
  try {
    await ClienteModel.update(cliente, {
      where: {
        clienteId: cliente.clienteId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertCliente,
  getClientes,
  getClienteById,
  updateCliente,
};
