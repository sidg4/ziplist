const chars = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function zipList(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i], b[i]);
  }
  return result;
}
console.log(zipList(chars, nums));

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}
console.log(zipListTheSimpleWay(chars, nums));
