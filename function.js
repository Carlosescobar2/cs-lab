var input = [3, 5, 7, 0, 4, 8, 5, 12, 4, 9, 16, 5,0];
var Sum = 0;
addtoZero(input, Sum);
function addtoZero (arr, target) {
  let results = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        results.push([arr[i], arr[j]])
      }
    }
  }
  return results;
}

// I think that its not very efficent because I believe that it has a run time 
// complexity of O(n^2)