const arrayArgIndex = process.argv.indexOf('--array');
const itemArgIndex = process.argv.indexOf('--item');


function binarySearch(input, searchItem) {
  if (process.argv.length < 4) {
    throw Error('Please provide an --array to search within and the --item to search for.');
  }

  if (arrayArgIndex === -1) {
    throw Error('Please provide an --array to search within.');
  }

  if (itemArgIndex === -1) {
    throw Error('Please provide an --item to search for.');
  }

  let low = 0;
  let high = input.length - 1;
  let mid;
  let resultFound = false;

  while (resultFound === false && low <= high) {
    mid = Math.floor((low + high) / 2);
    if (searchItem === input[mid]) {
      return mid;
    }
    if (searchItem > input[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
console.log(process.argv)
let result = binarySearch(process.argv[arrayArgIndex], process.argv[itemArgIndex])
console.log(result);

console.log(binarySearch(process.argv[arrayArgIndex], process.argv[itemArgIndex]));
