const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-button")
const outputDiv   = document.querySelector("#output-div")

checkButton.addEventListener("click", function calculateDateOfBirth(dateOfBirth.value) {

    //let dob = dateOfBirth.value;
    //calculateDateOfBirth(dateOfBirth.value);
     if(sum % luckyNumber === 0){
      outputDiv.innerText = "you are lucky"
     }else{
      outputDiv.innerText = "sorry you are not"
     }

})

function calculateDateOfBirth (dateOfBirth.value){
  let dob = dateOfBirth.value.replaceAll("-", "");
  let sum = 0;
  for(let index=0; index<dob.length; index++){
      sum = sum + Number(dob.charAt(index));
}
  return sum;
}
