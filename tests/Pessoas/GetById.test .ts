import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Pessoas - GetById',   () => {
  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer
    .post('/cidades')
    .send({ nome: 'Teste' });

    cidadeId = resCidade.body;
  });;

  
  it('Busca registro por id', async () => {
    const res1 = await testServer
    .post('/pessoas')
    .send({
      cidadeId,
      nomeCompleto: 'Tropeço da silva',
      email: 'tropeçogetbyid@gmail.com'
    });
  
  expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
    .get(`/pessoas/${res1.body}`)

    expect(resBuscada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta buscar registro não existente', async () => {

    const res1 = await testServer
    .get('/pessoas/99999')
    .send();


    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});

