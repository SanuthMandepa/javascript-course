
let words = ['hello', 'world', 'search', 'good'];
let index = -1;
  
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}
console.log(index);

function findIndex(array,word){
  let index = -1;
  for (let i =0;i<array.length;i++){
    if (word === array[i]){
      index = i;
    }
  }
  return index;
}
console.log(findIndex(['qw','qe',,'qef3'],'qe'));

function removeEgg(foods){
  const foodsCopy = foods.slice();
  const reverseFoods = foodsCopy.reverse();
  let afterRemove =[];

  let eggsRemoved = 0;
  for(let i=0;i<=foods.length;i++){
    if(reverseFoods[i]==='egg' && eggsRemoved <2){
      eggsRemoved++;
      continue;
    }
    afterRemove.push(reverseFoods[i]);
   }
  return afterRemove.reverse();
  
  
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));