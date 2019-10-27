alert("hello");
var mySubmission = function() {
  var daysOfTheWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  var maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];
  var femaleNames = [
    "Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var date = parseInt(document.getElementById("date").value);
  var gender = document.getElementById("gender");
  var yearString = year.toString();
  var centuryString = yearString.slice(0, 2);
  var century = parseInt(centuryString);
  var dayOfWeek = Math.trunc((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7);

  
}