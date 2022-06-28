import VendaModel from "../models/venda.model.js";
import ClienteModel from "../models/cliente.model.js";
import LivroModel from "../models/livro.model.js";
import AutorModel from "../models/autor.model.js";

async function insertVenda(venda) {
  try {
    return await VendaModel.create(venda);
  } catch (error) {
    throw error;
  }
}

async function getVendas() {
  try {
    return await VendaModel.findAll({
      include: [
        {
          model: ClienteModel,
          attributes: {
            exclude: ["senha"],
          },
        },
        {
          model: LivroModel,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getVendaById(id) {
  try {
    return await VendaModel.findByPk(id, {
      include: [
        {
          model: ClienteModel,
          attributes: {
            exclude: ["senha"],
          },
        },
        {
          model: LivroModel,
          include: [
            {
              model: AutorModel,
            },
          ],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getVendasByClienteId(clienteId) {
  try {
    return await VendaModel.findAll({
      include: [
        {
          model: ClienteModel,
          where: {
            clienteId,
          },
          attributes: {
            exclude: ["senha"],
          },
        },
        {
          model: LivroModel,
          include: [
            {
              model: AutorModel,
            },
          ],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getVendasByLivroId(livroId) {
  try {
    return await VendaModel.findAll({
      include: [
        {
          model: ClienteModel,
          attributes: {
            exclude: ["senha"],
          },
        },
        {
          model: LivroModel,
          where: {
            livroId,
          },
          include: [
            {
              model: AutorModel,
            },
          ],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getVendasByAutorId(autorId) {
  try {
    return await VendaModel.findAll({
      include: [
        {
          model: ClienteModel,
          attributes: {
            exclude: ["senha"],
          },
        },
        {
          model: LivroModel,
          where: {
            autorId,
          },
          include: [
            {
              model: AutorModel,
            },
          ],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertVenda,
  getVendas,
  getVendaById,
  getVendasByClienteId,
  getVendasByLivroId,
  getVendasByAutorId,
};
