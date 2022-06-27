import LivroService from "../services/livro.service.js";

async function createLivro(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
      throw new Error("Nome, Valor e Autor ID são obrigatórios.");
    }
    res.send(await LivroService.createLivro(livro));
  } catch (error) {
    next(error);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await LivroService.getLivros());
  } catch (error) {
    next(error);
  }
}

async function getLivroById(req, res, next) {
  try {
    res.send(await LivroService.getLivroById(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function updateLivro(req, res, next) {
  try {
    let livro = req.body;
    if (livro.nome || livro.autorId) {
      throw new Error("Não é possível alterar o Nome e/ou Autor.");
    }
    if (!livro.livroId || !livro.valor) {
      throw new Error("Livro ID, Valor e Estoque são obrigatórios.");
    }
    res.send(await LivroService.updateLivro(livro));
  } catch (error) {
    next(error);
  }
}

async function deleteLivro(req, res, next) {
  try {
    await LivroService.deleteLivro(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}

export default {
  createLivro,
  getLivros,
  getLivroById,
  updateLivro,
  deleteLivro,
};
