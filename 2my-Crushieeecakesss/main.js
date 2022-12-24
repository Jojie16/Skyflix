
// JavaScript source code
var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Regina" && password == "Weirdooo<3") {
        alert("Login successfully");
        window.location = "https://www.skyflix.cf/home"; // Redirecting to other page.
        return false;
    }
    else if (username == "admin" && password == "01001010") {
        alert("Sorry, This account is not valid anymore\nPlease use other account or you may click (Register) below.");
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt\nPlease read the Note!");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            alert("Please follow the instructions\n\n\n Reload the page to Re-Continue")
            return false;
        }
    }
}

// --------------------------------- TIMER ----------------------------------------//
 // Get the current time
 var currentTime = new Date();
 // Set the target time to 3:00 AM
 var targetTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 12, 0, 0);
 
 // If the current time is after 3:00 AM, set the target time to 3:00 AM on the following day
 if (currentTime.getTime() > targetTime.getTime()) {
   targetTime.setDate(targetTime.getDate() + 1);
 }
 
 // Calculate the time remaining in seconds
 var timeRemaining = (targetTime.getTime() - currentTime.getTime()) / 1000;
 
 // Update the countdown every second
 var interval = setInterval(function() {
   // Decrement the time remaining
   timeRemaining--;
 
   // Calculate the hours, minutes, and seconds remaining
   var hours = Math.floor(timeRemaining / 3600);
   var minutes = Math.floor((timeRemaining % 3600) / 60);
   var seconds = Math.floor(timeRemaining % 60);
 
   // Pad the hours, minutes, and seconds with leading zeros if necessary
   hours = hours.toString().padStart(2, "0");
   minutes = minutes.toString().padStart(2, "0");
   seconds = seconds.toString().padStart(2, "0");
 
   // Update the countdown display
   document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
 
   // If the countdown is finished, clear the interval and display a message
   if (timeRemaining <= 0) {
     clearInterval(interval);
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("countdown").innerHTML = "Time's up!\nServers Shutdown ^n^";
       }
     }, 1000);