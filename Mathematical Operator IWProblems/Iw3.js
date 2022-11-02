//Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let day = "Mon"

switch (day) {
  case "Sun": console.log("Monday");
    break;
  case "Mon": console.log("Tuesday");
    break;
  case "Tue": console.log("Wednesday");
    break;
  case "Wed": console.log("Thursday");
    break;
  case "Thur": console.log("Friday");
    break;
  case "Fri": console.log("Saturday");
    break;
  case "Sat": console.log("Sunday");
    break;
  default: console.log("Wrong Input");
}