import ClienteService from "../services/cliente.service.js";

async function createCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "Nome, E-mail, Senha, Telefône e Endereço são obrigatórios."
      );
    }
    res.send(await ClienteService.createCliente(cliente));
  } catch (error) {
    next(error);
  }
}

async function getClientes(req, res, next) {
  try {
    res.send(await ClienteService.getClientes());
  } catch (error) {
    next(error);
  }
}

async function updateCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.clienteId ||
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "Cliente ID, Nome, E-mail, Senha, Telefône e Endereço são obrigatórios."
      );
    }
    res.send(await ClienteService.updateCliente(cliente));
  } catch (error) {
    next(error);
  }
}

export default {
  createCliente,
  getClientes,
  updateCliente,
};
