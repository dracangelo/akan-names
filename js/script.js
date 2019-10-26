// function submitButton() {
//     var cc = parseInt(document.getElementById("year").value.slice(0, 2));
//     var yy = parseInt(document.getElementById("year").value.slice(2, 4));
//     var mm = parseInt(document.getElementById("month").value);
//     var dd = parseInt(document.getElementById("day").value);
//     var gender = document.querySelector('input[name=gender]:checked').value;
//     var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

function getDayOfWeek() {
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var gender = document.getElementById("gender");
    var yearString = year.toString();
    var centuryString = yearString.slice(0, 2);
    var century = parseInt(centuryString);
    var dayOfWeek = Math.trunc((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7);

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];