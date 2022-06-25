import ExampleService from "../services/example.service.js";

async function createExample(req, res, next) {
  try {
    let example = req.body;
    if (!example.name) {
      throw new Error("Name is required.");
    }
    res.send(await ExampleService.createExample(example));
  } catch (error) {
    next(error);
  }
}

export default {
  createExample,
};
