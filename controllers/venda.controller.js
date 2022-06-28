import VendaService from "../services/venda.service.js";

async function createVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.data || !venda.clienteId || !venda.livroId) {
      throw new Error("Data, Cliente ID e Livro ID são obrigatórios.");
    }
    res.send(await VendaService.createVenda(venda));
  } catch (error) {
    next(error);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(await VendaService.getVendas(req.query));
  } catch (error) {
    next(error);
  }
}

async function getVendaById(req, res, next) {
  try {
    res.send(await VendaService.getVendaById(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function updateVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.vendaId || !venda.valor) {
      throw new Error("Venda ID, Valor e Estoque são obrigatórios.");
    }
    res.send(await VendaService.updateVenda(venda));
  } catch (error) {
    next(error);
  }
}

async function deleteVenda(req, res, next) {
  try {
    await VendaService.deleteVenda(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}

export default {
  createVenda,
  getVendas,
  getVendaById,
  updateVenda,
  deleteVenda,
};
