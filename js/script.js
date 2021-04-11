var daysOfTheWeek = ["0" , "1" , "2" , "3", "4" , "5", "6"];
var maleDays = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"];
var femaleDays = ["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , "Afua","Ama"];
var day = document.getElementById('day').innerHTML;
var month = document.getElementById('month').innerHTML;
var century = document.getElementById('century').innerHTML;
var decade = document.getElementById('decade').innerHTML;
var female = document.getElementById('female').innerHTML;
var male = document.getElementById('male').innerHTML;
var gender = document.getElementById('gender').innerHTML;

if(day <= 0 || > 31) {

  console.log("Inavlid entry");
}

if(month <= 0 || > 12) {
  console.log("Invalid entry!");
}

function dayCalculator(day , month , century , decade) {
  var cc = (((century / 4) - 2 * century - 1));
  var yy = ((5 * decade / 4));
  var mmdd = ((26 *(month + 1) / 10)) + day;
  var total = (cc + yy + mmdd) % 7;
}

function femaleDays (gender) {
  if(gender === female) {

  }
}
