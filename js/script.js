var submit = function() {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var male = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
    ];
    var female = [
      "Akosua",
      " Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
    ];
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var day = parseInt(document.getElementById("day").value);
    var date0fbirth = new Date(year + "/" + month + "/" + day);
    var results = date0fbirth.getDay();
    var done= document.getElementById("done");
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    if (male.checked==true) {
      switch (days) {
          case 0:
              done.innnerHtml=("Your akan name is: " + male[days]);
          case 1:
            done.innnerHtml=("your akan name is: " + male[days]);
          case 2:
            done.innnerHtml=("Your akan name is: " + male[days]);
          case 3:
            done.innnerHtml=("Your akan name is: " + male[days]);
          case 4:
            done.innnerHtml=("Your akan name is: " + male[days]);
          case 5:
            done.innnerHtml=("Your akan name is: " + male[days]);
          case 6:
            done.innnerHtml=("Your akan name is: " + male[days]);
      }
  }
  else if (female.checked==true)
      switch (days) {
          case 0:
            done.innnerHtml=("your akan name is: " + female[days]);
          case 1:
            done.innnerHtml=("your akan name is: " + female[days]);
          case 2:
            done.innnerHtml=("your akan name is: " + female[days]);
          case 3:
            done.innnerHtml=("your akan name is: " + female[days]);
          case 4:
            done.innnerHtml=("your akan name is: " + female[days]);
          case 5:
            done.innnerHtml=("your akan name is: " + female[days]);
          case 6:
            done.innnerHtml=("your akan name is: " + female[days]);
      }

    };
