var maleDays = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"];
var femaleDays = ["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , "Afua","Ama"];

function dayCalculator(day , month , century , decade) {
  var cc = (((century / 4) - 2 * century - 1));
  var yy = ((5 * decade / 4));
  var mmdd = ((26 *(month + 1) / 10)) + day;
  var total = (cc + yy + mmdd) % 7;
  return total;
}

function determineName() {
  let x;
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var century = document.getElementById('century').value;
  var decade = document.getElementById('decade').value;
  let dayCalc = dayCalculator(day,month,century,decade);
  var gender = document.getElementById('gender').value;
  if(gender == "female") {
    x = femaleDays[dayCalc];
  }  else {
    x = maleDays[dayCalc];
  }

}

function maxMonths {
  var months = document.getElementById('month').value;
  if(month <= 0 && month > 12) {
    console.log("Invalid Entry");
  }
}

function maxDays {
  var days = document.getElementById('day').value;
  if(day <= 0  && > 31){
    console.log("Invalid Entry");
  }
}
