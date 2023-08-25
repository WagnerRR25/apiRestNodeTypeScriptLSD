import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { IPessoa } from '../../database/models';
import { PessoasProvider } from '../../database/providers/pessoas';


interface IBodyProps extends Omit<IPessoa, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    cidadeId: yup.number().integer().required().min(1),
    nomeCompleto: yup.string().required().min(3),
    email: yup.string().required().email(),
  })),
}));

export const create = async (req: Request<{}, {}, IPessoa>, res: Response) => {
  const result = await PessoasProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};