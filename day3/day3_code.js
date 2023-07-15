function getObject(data) {
  const marksMap = {};
  const result = {};
  for (const key in data) {
    const entry = data[key];
    const mark = entry.marks;
    if (!marksMap.hasOwnProperty(mark)) {
      marksMap[mark] = true;
      result[Object.keys(result).length] = entry;
    }
  }

  return result;
}
const data1 = {
  0: { age: 18, name: 'john', marks: '400' },
  1: { age: 17, name: 'julie', marks: '400' },
  2: { age: 16, name: 'Robin', marks: '200' },
  3: { age: 16, name: 'Bella', marks: '300' }
};
const result1 = getObject(data1);
console.log(result1);
const data2 = {
  0: { age: 18, name: 'john', marks: '400' },
  1: { age: 17, name: 'julie', marks: '400' },
  2: { age: 16, name: 'Robin', marks: '200' },
  3: { age: 16, name: 'Bella', marks: '300' },
  4: { age: 16, name: 'john', marks: '250' },
  5: { age: 15, name: 'julie', marks: '250' }
};
const result2 = getObject(data2);
console.log(result2);
