import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";


export const ensureAuthenticated: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  
  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Não autenticado' }
    });
  }
  
  console.log(authorization);

  const [type, token] = authorization.split(' ');

  if (type !== 'Beader') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Não autenticado' }
    });
  }
  
  if (token !== 'teste.teste.teste') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { default: 'Não autenticado' }
    });
  }


  return next();
};