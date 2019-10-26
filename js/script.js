// var myResult = function(){

// var daysOfTheWeek =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var maleName = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleName = ["Akosua", "Adwoa", "Abenna", "Aku", "Yaa", "Afua", "Ama"];

// var yy = parseInt(document.getElementById("year").value);
// var mm = parseInt(document.getElementById("month").value);
// var dd = parseInt(document.getElementById("day").value);
// var result =
//  parseInt(
//    century / 4 -
//      2 * century -
//      1 +
//      (5 * year) / 4 +
//      (26 * (month + 1)) / 10 +
//      day
//  ) % 7;
//  if (document.getElementById("gender").checked) {
//    var gender = 'male';
//  }
//  else {
//    var gender = 'female';
//  }

// }
// if(Math.round(result)=== 0 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[0]+ " and your Akan Name is" + maleNames[0])
// }
// else if(Math.round(result)=== 0 && gender ==="female") {
//   doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[0]+ " and your Akan Name is" + femaleNames[0])
// }
// else if(Math.round(result)=== 1 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[1]+ " and your Akan Name is" + maleNames[1])
//   }
//   else if(Math.round(result)=== 1 && gender ==="female") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[1]+ " and your Akan Name is" + femaleNames[1])
//   }
//   else if(Math.round(result)=== 2 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[2]+ " and your Akan Name is" + maleNames[2])
//   }
//   else if(Math.round(result)=== 2 && gender ==="female") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[2]+ " and your Akan Name is" + femaleNames[2])
//   }
//   else if(Math.round(result)=== 3 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[3]+ " and your Akan Name is" + maleNames[3])
//   }
//   else if(Math.round(result)=== 3 && gender ==="female") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[3]+ " and your Akan Name is" + femaleNames[3])
//   }
//   else if(Math.round(result)=== 4 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[4]+ " and your Akan Name is" + maleNames[4])
//   }
//   else if(Math.round(result)=== 4 && gender ==="female") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[4]+ " and your Akan Name is" + femaleNames[4])
//   }
//   else if(Math.round(result)=== 5 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[5]+ " and your Akan Name is" + maleNames[5])
//   }
//   else if(Math.round(result)=== 5 && gender ==="female") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[5]+ " and your Akan Name is" + femaleNames[5])
//   }
//   else if(Math.round(result)=== 6 && gender ==="male") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[6]+ " and your Akan Name is" + maleNames[6])
//   }
//   else if(Math.round(result)=== 6 && gender ==="female") {
//     doucument.getElementById("output").innerHTML = ("You were born on" + dayOfTheWeek[6]+ " and your Akan Name is" + femaleNames[6])
//   }
// }



// function getDayOfWeek() {
//     var year = parseInt(document.getElementById("year").value);
//     var month = parseInt(document.getElementById("month").value);
//     var date = parseInt(document.getElementById("date").value);
//     var gender = document.getElementById("gender");
//     var yearString = year.toString();
//     var centuryString = yearString.slice(0, 2);
//     var century = parseInt(centuryString);
//     var dayOfWeek = Math.trunc((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7);
//     var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "Kofi", "Kwame"];
//     var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
//     if (maleName.checked==true) {
//         switch (dayOfWeek) {
//             case 0:
//                 alert("Your akan name is: " + maleNames[dayOfWeek]);
//             case 1:
//                 alert("your akan name is: " + maleNames[dayOfWeek]);
//             case 2:
//                 alert("Your akan name is: " + maleNames[dayOfWeek]);
//             case 3:
//                 alert("Your akan name is: " + maleNames[dayOfWeek]);
//             case 4:
//                 alert("Your akan name is: " + maleNmaes[dayOfWeek]);
//             case 5:
//                 alert("Your akan name is: " + maleNmaes[dayOfWeek]);
//             case 6:
//                 alert("Your akan name is: " + maleNmaes[dayOfWeek]);
//         }
//     }
//     else if (femaleNames.checked==true)
//         switch (dayOfTheWeek) {
//             case 0:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//             case 1:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//             case 2:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//             case 3:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//             case 4:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//             case 5:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//             case 6:
//                 alert("your akan name is: " + femaleNames[dayOfWeek]);
//         }
//   }




function validateResult() {
    //form validate
    function myResult () {
        var cc = parseInt(document.getElementById("year").Value.slice(0, 2));
        var yy = parseInt(document.getElementById("year").value.slice(2, 4));
        var mm = parseInt(document.getElementById("month").value);
        var dd = parseInt(document.getElementById("day").value);
        var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

        
    }
}