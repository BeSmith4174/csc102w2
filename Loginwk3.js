function checkCreds() {
    // place to store first name
    var firstName = document.getElementById("fName").value;
    // place to store last name
    var lastName = document.getElementById("lName").value;
    //place to store badge id
    var badgeNumb = document.getElementById("badgeID").value;
//combines first and last name
    var fullName = firstName + " " + lastName;
//establishes character length allowed
    if (fullName.length > 20 || fullName == 1) {
//this is an alert shown for an invalid entry
        document.getElementById("loginStatus").innerHTML = "Invalid full name!";
    }
//sets max allowable numbers entered
    else if (badgeNumb > 999 || badgeNumb < 1) {
        //this alerts user to an invalid entry
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";

    }
//means if all entries are valid 
    else{
        //this is the alert upon succesful entry of all info
alert("Access Granted! Welcome! " + fullName);
//this redirects you to the space webpage
location.replace("HTMLW2.html")
    }


}