export default function sortingByParam(obj, arr) {
  const ordedObj = []; // массив для сборки отсортированных значений
  const copyObj = { ...obj }; // копия объекта
  const tempArr = []; // временный массив

  arr.forEach((elem) => { // записываем свойства которые надо упорядочить в итоговый массив
    if (Object.prototype.hasOwnProperty.call(copyObj, elem)) {
      ordedObj.push({ key: elem, value: obj[elem] });
      delete copyObj[elem];
    }
  });

  for (const key in copyObj) { // теперь оставшиеся свойства записываем во временный массив
    if (Object.prototype.hasOwnProperty.call(copyObj, key)) {
      tempArr.push({ key, value: copyObj[key] });
    }
  }

  tempArr.sort((prev, next) => { // сортируем временный массив
    if (prev.key < next.key) return -1;
    return ''; // делаем так в угоду ESLint
  });

  return ordedObj.concat(tempArr); // возвращаем объединённые массивы
}

// const test = sortingByParam(object, ['name', 'fff', 'level', 'valueOf']);
