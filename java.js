// 1-masala
function minimal_son(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minimal_son([11, 21, 12, 3, 23, 33]));

// 2-masala
function toq_orindagi_son(arr) {
    let sum = 0;
    for(let i = 1; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}
console.log(toq_orindagi_son([1, 2, 3, 4, 5]));

// 3-masala
// function tub_son(mas) {
    // let prime = [];
    // for(let i = 0; i < mas.length; i++) {
        // if(tub_son(mas[i])) {
            // prime.push(mas[i]);
        // }
    // }
    // return prime;
// }
// console.log(tub_son());

// 4-masala
function karraliSonlar(n) {
    let sum = 0;
  
    for (let i = 0; i < n.length; i++) {
      if (n[i] % 3 === 0) {
        sum++;
      }
    }
  
    return sum;
  }
  
console.log(karraliSonlar([2, 3, 7 , 9, 12]));