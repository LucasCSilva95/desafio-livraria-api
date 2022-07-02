import "dotenv/config";
import { getClient } from "./mongo.db.js";

const mongoDBDatabase = process.env.MONGO_DB_DATABASE;
const mongoDBCollection = process.env.MONGO_DB_COLLECTION;

async function insertInfo(info) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db(mongoDBDatabase)
      .collection(mongoDBCollection)
      .insertOne(info);
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function updateInfo(info) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db(mongoDBDatabase)
      .collection(mongoDBCollection)
      .updateOne({ livroId: info.livroId }, { $set: { ...info } });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function deleteInfo(livroId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db(mongoDBDatabase)
      .collection(mongoDBCollection)
      .deleteOne({ livroId: livroId });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

async function getInfoByLivroId(livroId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db(mongoDBDatabase)
      .collection(mongoDBCollection)
      .findOne({ livroId });
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export default {
  insertInfo,
  updateInfo,
  deleteInfo,
  getInfoByLivroId,
};
