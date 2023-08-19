import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';


interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
  })),
}));



export const updateById = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

  if (Number(req.params) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });


  return res.status(StatusCodes.NO_CONTENT).send();
};