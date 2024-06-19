function minMax(nums){
  let min = null;
  let max = null;

  for(let i = 0; i< nums.length;i++){
    const value = nums[i];
    if (value ===null || value < min){
      min = value;
    }

    if(value === max || value > max){
      max = value;
    }
  }
  return { min, max };
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));

function countWords(words){
  const result = {};
   for(let i =0; i <words.length;i++){
    const word = words[i];

    if(!result[word]){
      result[word] =1;

    }else{
      result[word]++;
    }
    
   }
   return result;
  }
    
console.log(countWords(['apple', 'grape', 'apple', 'apple']))
   
