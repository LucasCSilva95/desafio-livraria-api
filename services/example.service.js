import ExampleRepository from "../repositories/example.repository.js";

async function createExample(example) {
  return await ExampleRepository.insertExample(example);
}

export default {
  createExample,
};
