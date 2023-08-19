import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - GetById',   () => {
  it('Apaga registro', async () => {

    const res1 = await testServer
    .post('/cidades')
    .send({ nome: 'Caxias do Sul' });


    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
    .delete(`/cidades/${res1.body}`)

    expect(resBuscada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta buscar registro não existente', async () => {

    const res1 = await testServer
    .get('/cidades/99999')
    .send();


    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});


