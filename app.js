function getSleepHours(day) {
  // making sure day is not case sensetive
  day = day.toLowerCase();
  // setting all days
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 9;
  } else if (day === 'friday') {
    return 6;
  } else if (day === 'saturday') {
    return 7;
  } else if (day === 'sunday') {
    return 9;
  }
}
// Console log to see if all days works
// console.log(getSleepHours("Friday"))

// Calculate all h of the week
function getActualSleepHours() {
  let result =
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  return result;
}
// Check if function works
// console.log(getActualSleepHours())

// Setting my desired sleeping h per week 8 per nigt * 7 days
function getIdealSleepHours() {
  const idealHours = 8 * 7;
  return idealHours;
}
//checking if my functions works
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// Calculate diference between desired h and actual h
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  //perfect sleeping time
  if (actualSleepHours === idealSleepHours) {
    return 'perfect amount of sleep';
    // Sleeping more than you need
  } else if (actualSleepHours > idealSleepHours) {
    return (
      'You get ' +
      (actualSleepHours - idealSleepHours) +
      ' h more sleep than you need'
    );
  }
  //sleeping less than you need
  else {
    return (
      'You should try to sleep for ' +
      (idealSleepHours - actualSleepHours) +
      ' h more'
    );
  }
}
// console log to check if it works
console.log(calculateSleepDebt());
