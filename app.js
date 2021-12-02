const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button")
const outputDiv =   document.querySelector("#output-div")

checkButton.addEventListener('Click' , checkLucky) 


function compareValue(sum ,luckyNumber){
  
  if(sum%luckyNumber === 0){
    outputDiv.innerText= "your birthday is lucky"
  }else{
    outputDiv.innerText= "your birthday is not lucky"
  }
}

function checkLucky(){

  const dob = dateOfBirth.value;
  const sum = calculate(dob);
  compareValue(sum, luckyNumber.value)

}

function calculate(dob){

  dob = dob.replaceAll("_", "");
  let sum = 0;
  for(let index = 0; index < dob.length; index++){
    sum = sum + Number(dob.charAt(index));
  }
  return sum;

}