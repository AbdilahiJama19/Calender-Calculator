function dayCalculator(dd, mm, yy, cc) {
  const akanDay = (((century / 4) - 2*century - 1) +((5*decade / 4)) + ((26*(month + 1) / 10)) + day) % 7;
  return akanDay.toFixed();
}

function maxMonths(days, months) {
  if(days <= 0  && days > 31){
    alert("Invalid Entry");
  }
  else if(months <= 0 && months > 12) {
    alert("Invalid Entry");
  }
function determineName() {
  let x;
  var maleDays = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var femaleDays = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const century = parseInt(document.getElementById('century').value);
  const decade = parseInt(document.getElementById('decade').value);

  let dayCalc = days[akanDay];
  var gender = document.getElementById('gender').value;
  if(gender == "female") {
    x = femaleDays[dayCalc]
  }  else {
    x = maleDays[dayCalc];
  }

}


}
