const repeatNumbers = function(data, callback) {
  return data.map((element) => callback(element)).join(", ");
};

const getArray = function(arrays) {
  let str = "";
  for (let i = 0; i < arrays[1]; i++) {
    str += arrays[0];
  }
  return str;
};

console.log(repeatNumbers([[1, 10]], getArray));
console.log(
  repeatNumbers(
    [
      [1, 2],
      [2, 3],
    ],
    getArray
  )
);
console.log(
  repeatNumbers(
    [
      [10, 4],
      [34, 6],
      [92, 2],
    ],
    getArray
  )
);
