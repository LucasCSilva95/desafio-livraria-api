import ClienteModel from "../models/cliente.model.js";

async function insertCliente(cliente) {
  try {
    return await ClienteModel.create(cliente);
  } catch (error) {
    throw error;
  }
}

export default {
  insertCliente,
};
