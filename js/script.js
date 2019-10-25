alert ("welcome!!!");

var daysOfTheWeek =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleName = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenna", "Aku", "Yaa", "Afua", "Ama"];

var cc = parseInt(document.getElementById("century").value);
var yy = parseInt(document.getElementById("year").value);
var mm = parseInt(document.getElementById("month").value);
var dd = parseInt(document.getElementById("day").value);
var result =
 parseInt(
   century / 4 -
     2 * century -
     1 +
     (5 * year) / 4 +
     (26 * (month + 1)) / 10 +
     day
 ) % 7;
 if (document.getElementById("gender").checked) {
   var gender = 'male';
 }
 else {
   var gender = 'female';
 }

}
if(Math.round(result)=== 0 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[0]+ " and your Akan Name is" + maleNames[0])
}
else if(Math.round(result)=== 0 && gender ==="female") {
  doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[0]+ " and your Akan Name is" + femaleNames[0])
}
else if(Math.round(result)=== 1 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[1]+ " and your Akan Name is" + maleNames[1])
  }
  else if(Math.round(result)=== 1 && gender ==="female") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[1]+ " and your Akan Name is" + femaleNames[1])
  }
  else if(Math.round(result)=== 2 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[2]+ " and your Akan Name is" + maleNames[2])
  }
  else if(Math.round(result)=== 2 && gender ==="female") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[2]+ " and your Akan Name is" + femaleNames[2])
  }
  else if(Math.round(result)=== 3 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[3]+ " and your Akan Name is" + maleNames[3])
  }
  else if(Math.round(result)=== 3 && gender ==="female") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[3]+ " and your Akan Name is" + femaleNames[3])
  }
  else if(Math.round(result)=== 4 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[4]+ " and your Akan Name is" + maleNames[4])
  }
  else if(Math.round(result)=== 4 && gender ==="female") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[4]+ " and your Akan Name is" + femaleNames[4])
  }
  else if(Math.round(result)=== 5 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[5]+ " and your Akan Name is" + maleNames[5])
  }
  else if(Math.round(result)=== 5 && gender ==="female") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[5]+ " and your Akan Name is" + femaleNames[5])
  }
  else if(Math.round(result)=== 6 && gender ==="male") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[6]+ " and your Akan Name is" + maleNames[6])
  }
  else if(Math.round(result)=== 6 && gender ==="female") {
    doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[6]+ " and your Akan Name is" + femaleNames[6])
  }
  