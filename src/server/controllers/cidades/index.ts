
import * as create  from "./Create";
import * as getAll  from "./GetAll";
import * as getById  from "./GetById";
import * as updateByid  from "./UpdateById";
import * as deleteById  from "./DeleteById";



export const CidadesController = {
  ...deleteById,
  ...updateByid,
  ...getById,
  ...create,
  ...getAll
};