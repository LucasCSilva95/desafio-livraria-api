import ExampleModel from "../models/example.model.js";

async function insertExample(example) {
  try {
    return await ExampleModel.create(example);
  } catch (error) {
    throw error;
  }
}

export default {
  insertExample,
};
