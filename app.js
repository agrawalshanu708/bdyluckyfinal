var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var checkButton = document.querySelector("#check-button")

checkButton.addEventListener("click", function clickValidate() {

    var dob = dateOfBirth.value;
    var sum = calculateDateOfBirth(dob);
    console.log(sum);

})


   




function calculateDateOfBirth (dob){
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for(let index=0; index<dob.length; index++){
      sum = sum + Number(dob.charAt(index));
   
}

  return sum;
}