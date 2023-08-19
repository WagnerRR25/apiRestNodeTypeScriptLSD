import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - UpdateById',   () => {
  it('Apaga registro', async () => {

    const res1 = await testServer
    .post('/cidades')
    .send({ nome: 'Caxias do Sul' });


    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
    .delete(`/cidades/${res1.body}`)

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta apagar registro não existente', async () => {

    const res1 = await testServer
    .delete('/cidades/99999')
    .send();


    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});


