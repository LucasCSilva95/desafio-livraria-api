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

export default {
  createCliente,
};
