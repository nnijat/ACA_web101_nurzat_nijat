const exampleArr = [1, 0, 9, 18, 3, 0, 0, 9, 70, 44, 0];

const removeZeros = arr => {
  for (i = 0; i < exampleArr.length; i++) {
    if(exampleArr[i]===0){
        return exampleArr.splice[i];
    }
  }
  console.log(exampleArr);
};

removeZeros(exampleArr);
