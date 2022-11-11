const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Ao chamar a função sem passar um parâmetro, deve retornar um objeto com os horários de todos os dias.', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(expected);
  });
  it('Ao passar o parâmetro getOpeningHours(\'Monday\', \'09:00-AM\') deve retornar \'The zoo is closed\'.', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Ao passar o parâmetro getOpeningHours(\'Tuesday\', \'09:00-AM\') deve retornar \'The zoo is open\'.', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Ao passar o parâmetro getOpeningHours(\'Wednesday\', \'09:00-AM\') deve retornar \'The zoo is closed\'.', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Ao passar um parâmetro inválido deve retornar uma menssagem de erro.', () => {
    expect(() => getOpeningHours('inválido')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Ao passar como parâmetro o dia da semana e  \'\' deve gerar erro.', () => {
    expect(() => getOpeningHours('Monday', '')).toThrow(/^The hour should represent a number$/);
  });
  it('Ao passar como parâmetro o dia da semana e a hora sem minutos deve gerar erro.', () => {
    expect(() => getOpeningHours('Monday', '9')).toThrow(/^The minutes should represent a number$/);
  });
  it('Ao passar como parâmetro o dia da semana e a hora sem determinar AM ou PM deve gerar erro.', () => {
    expect(() => getOpeningHours('Monday', '9:00')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Ao passar como parâmetro hora menor que 0  e maior que 12 deve gerar erro.', () => {
    expect(() => getOpeningHours('Monday', '13:00-PM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Ao passar como parâmetro miniuto menor que 0  e maior que 59 deve gerar erro.', () => {
    expect(() => getOpeningHours('Monday', '12:60-PM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
