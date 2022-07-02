import AvaliacaoService from "../services/avaliacao.service.js";

async function createAvaliacao(req, res, next) {
  try {
    let avaliacao = req.body;
    let livroId = parseInt(req.params.id);
    avaliacao = await AvaliacaoService.createAvaliacao(livroId, avaliacao);
    res.send(avaliacao);
  } catch (error) {
    next(error);
  }
}

async function deleteAvaliacao(req, res, next) {
  try {
    let livroId = parseInt(req.params.id);
    let index = parseInt(req.params.index);
    await AvaliacaoService.deleteAvaliacao(livroId, index);
    res.end();
  } catch (error) {
    next(error);
  }
}

export default {
  createAvaliacao,
  deleteAvaliacao,
};
