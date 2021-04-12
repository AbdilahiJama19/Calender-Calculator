function dayCalculator(day , month , century , decade) {
  var cc = (((century / 4) - 2 * century - 1));
  var yy = ((5 * decade / 4));
  var mmdd = ((26 *(month + 1) / 10)) + day;
  var total = (cc + yy + mmdd) % 7;
  return total;
}

function determineName() {
  let x;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var maleDays = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var femaleDays = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];
  var day = parseInt(document.getElementById('day').value);
  var month = parseInt(document.getElementById('month').value);
  var century = parseInt(document.getElementById('century').value);
  var decade = parseInt(document.getElementById('decade').value);
  let dayCalc = dayCalculator(day,month,century,decade);
  var gender = document.getElementById('gender').value;
  if(gender == "female") {
    x = femaleDays[dayCalc];
    console.log(femaleDays[dayCalc])
  }  else {
    x = maleDays[dayCalc];
  }

}

function maxMonths() {
  var months = document.getElementById('month').value;
  if(months <= 0 && months > 12) {
    console.log("Invalid Entry");
  }
}

function maxDays() {
  var days = document.getElementById('day').value;
  if(days <= 0  && days > 31){
    console.log("Invalid Entry");
  }
}

function is
