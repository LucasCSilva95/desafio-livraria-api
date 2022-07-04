import basicAuth from "express-basic-auth";
import ClienteService from "../services/cliente.service.js";
import "dotenv/config";

function getRole(username) {
  if (username === process.env.ADMIN_USER) {
    return process.env.ADMIN_USER;
  }
  return process.env.CLIENTE_USER;
}

function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;

  return (req, res, next) => {
    if (req.auth.user) {
      const role = getRole(req.auth.user);
      if (isAllowed(role)) {
        next();
      } else {
        res.status(401).send("Usuário sem permissão.");
      }
    } else {
      res.status(404).send("Usuário não encontrado.");
    }
  };
}

function authorizer(username, password, cb) {
  if (
    basicAuth.safeCompare(username, process.env.ADMIN_USER) &&
    basicAuth.safeCompare(password, process.env.ADMIN_PASSWORD)
  ) {
    return cb(null, true);
  }
  ClienteService.verificaLogin(username, password)
    .then((value) => {
      return cb(null, value);
    })
    .catch(() => {
      return cb(null, false);
    });
}

export { getRole, authorize, authorizer };
