import GameSavingLoader from '../gamesavingloader';

test('Тест функции GameSavingLoader', async () => {
  const received = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(received).toEqual(expected);
});

test('Тест функции GameSavingLoader с ошибкой', async () => {
  await expect(Promise.reject(new Error('error'))).rejects.toThrow('error');
});