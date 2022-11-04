const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao chamar a função sem passar um parâmetro, deve retornar \'undefined\'.', () => {
    const expected = undefined;
    const actual = handlerElephants();

    expect(actual).toBe(expected);
  });
  it('Ao passar o parâmetro do tipo diferente de \'string\' deve retornar \'Parâmetro inválido, é necessário uma string\'.', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(0);

    expect(actual).toBe(expected);
  });
  it('Ao passar um parâmetro que não consta no banco de dados, deve retornar \'null\'.', () => {
    const expected = null;
    const actual = handlerElephants('habitat');

    expect(actual).toBe(expected);
  });
  it('Ao passar o parâmetro \'count\', retorna a quantidade de elefantes.', () => {
    const expected = 4;
    const actual = handlerElephants('count');

    expect(actual).toBe(expected);
  });
  it('Ao passar o parâmetro \'names\', retorna um array com a relação dos nomes de todos os elefantes.', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');

    expect(actual).toEqual(expected);
  });
  it('Ao passar o parâmetro \'averageAge\', retorna a média de idade dos elefantes.', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');

    expect(actual).toBe(expected);
  });
  it('Ao passar o parâmetro \'location\', retorna a localização dos elefantes dentro do Zoológico.', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');

    expect(actual).toBe(expected);
  });
  it('Ao passar o parâmetro \'popularity\', retorna a popularidade dos elefantes.', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');

    expect(actual).toBe(expected);
  });
  it('Ao passar o parâmetro \'availability\', retorna um array com a relação de dias em que é possível visitar os elefantes.', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = handlerElephants('availability');

    expect(actual).toEqual(expected);
  });
});
