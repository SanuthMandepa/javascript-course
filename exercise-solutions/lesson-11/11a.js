// function getLastValue(array) {
//   const lastIndex = array.length - 1;
//   return array[lastIndex];
// }
// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi', 'hello', 'hey']));

// function arraySwap(array){
//   const firstIndex = array[0]
//   const lastIndex = array[array.length -1];
//   array[0] = lastIndex;
//   array[array.length -1] = firstIndex;

//   return array;
// }
// console.log(arraySwap([1, 20, 22, 24, 5]));
// console.log(arraySwap(['hi', 'hello', 'hey']));
// const countArray =[];
// let i = 0;
// while(i<=10){
//   if(i%2===0){
//     countArray.push(i);
//     i++;
//   }
//   console.log(countArray);
// }
// console.log(countArray)

// let total =0;
// for (i=5; i >0;i--){
//   total = total+i;
//   console.log(i);
// }
for (let i = 2; i >= 0; i--) {
  console.log(i);
}
console.log();
let i =3;
while (i >= 0) {
  console.log(i);
  i--;
}
function addOne(array1,array2){
  let oldArray = array1;
  let newArray = [];
  for(let i =0; i<oldArray.length;i++){
    let plusValue = oldArray[i]+array2[i];
    newArray.push(plusValue);
    
  }
  console.log(newArray);
}
addOne([1,2,3],[1,1,2]);
