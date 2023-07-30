function getDayOfWeek() {
    // Get the user input for the day number using an alert box
    var userInput = prompt("Enter a number from 1 to 7:");
  
    // Parse the input and check if it's a valid number between 1 and 7
    var dayNumber = parseInt(userInput);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
      alert("Invalid input. Please enter a valid number between 1 and 7.");
      return;
    }
  
    // Define an array of days of the week
    var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    // Get the corresponding day from the array and display it using an alert box
    var day = daysOfWeek[dayNumber - 1];
    alert("The day is: " + day);
  }
  