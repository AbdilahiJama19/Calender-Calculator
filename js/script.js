function dayCalculator(dd, mm, yy, cc) {
  const akanDay = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  return akanDay.toFixed();
}

function maxMonths(days, months) {
  if (days <= 0 && days > 31) {
    alert('Invalid Entry');
  } else if (months <= 0 && months > 12) {
    alert('Invalid Entry');
  }
}

function determineName() {
  let x;
  const maleDays = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  const femaleDays = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

  const century = parseInt(document.getElementById('century').value);
  const decade = parseInt(document.getElementById('decade').value);
  const month = parseInt(document.getElementById('month').value);
  const day = parseInt(document.getElementById('day').value);

  let dayCalc = dayCalculator(day, month, decade, century);
  const gender = document.getElementById('gender').value;

  if (gender === 'female') {
    x = femaleDays[dayCalc];
  } else {
    x = maleDays[dayCalc];
  }
  document.getElementById('output-name').innerHTML = x;
}
