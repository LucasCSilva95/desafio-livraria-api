import ClienteService from "../services/cliente.service.js";
import { getRole } from "./auth.controller.js";

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

async function getClienteById(req, res, next) {
  try {
    res.send(await ClienteService.getClienteById(req.params.id));
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
    if (getRole(req.auth.user) === "cliente") {
      const cli = await ClienteService.getClienteByEmail(req.auth.user);
      if (!cli) throw new Error("Usuário não encontrado na base de dados.");

      if (parseInt(cli.clienteId) !== cliente.clienteId)
        throw new Error("Cliente não pode atualizar dados de outro cliente.");
    }
    res.send(await ClienteService.updateCliente(cliente));
  } catch (error) {
    next(error);
  }
}

async function deleteCliente(req, res, next) {
  try {
    await ClienteService.deleteCliente(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}

export default {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};
