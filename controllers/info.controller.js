import InfoService from "../services/info.service.js";

async function createInfo(req, res, next) {
  try {
    let info = req.body;
    info = await InfoService.createInfo(info);
    res.send(info);
  } catch (error) {
    next(error);
  }
}

async function updateInfo(req, res, next) {
  try {
    let info = req.body;
    info = await InfoService.updateInfo(info);
    res.send(info);
  } catch (error) {
    next(error);
  }
}

async function deleteInfo(req, res, next) {
  try {
    res.send(await InfoService.deleteInfo(parseInt(req.params.id)));
  } catch (error) {
    next(error);
  }
}

export default {
  createInfo,
  updateInfo,
  deleteInfo,
};
