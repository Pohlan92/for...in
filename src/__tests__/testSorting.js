import sortingByParam from '../js/sort';

test('testing sorting', () => {
  const object = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  object.__proto__.adress = 456;

  const targetobject = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const targetobject2 = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  let result = sortingByParam(object, ['name', 'fff', 'level', 'valueOf']); // дополнительно проверяем на несуществующие свойства и свойства прототипа
  expect(targetobject).toEqual(result);
  result = sortingByParam(object, []); // проверка на пустой массив сортировки
  expect(targetobject2).toEqual(result);
});
