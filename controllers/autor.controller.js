import AutorService from "../services/autor.service.js";

async function createAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Nome, E-mail e Telefône são obrigatórios.");
    }
    res.send(await AutorService.createAutor(autor));
  } catch (error) {
    next(error);
  }
}

async function getAutores(req, res, next) {
  try {
    res.send(await AutorService.getAutores());
  } catch (error) {
    next(error);
  }
}

async function getAutorById(req, res, next) {
  try {
    res.send(await AutorService.getAutorById(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function updateAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.autorId || !autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Autor ID, Nome, E-mail, Telefône são obrigatórios.");
    }
    res.send(await AutorService.updateAutor(autor));
  } catch (error) {
    next(error);
  }
}

async function deleteAutor(req, res, next) {
  try {
    await AutorService.deleteAutor(req.params.id);
    res.end();
  } catch (error) {
    next(error);
  }
}

export default {
  createAutor,
  getAutores,
  getAutorById,
  updateAutor,
  deleteAutor,
};
