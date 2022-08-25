// Write your code below

function palindrome(string){
    let strLength = string.length
    for(let i = 0; i < strLength; i++){
      if(string[i] !== string[strLength - 1 - i]){
        return false;
      }
    }return true;
  }
  console.log(palindrome('tacocat'))