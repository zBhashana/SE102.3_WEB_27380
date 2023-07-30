function calculateCircleArea() {
    var radiusInput = prompt("Enter the radius of the circle:");
    var radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius <= 0) {
        alert("Invalid input. Please enter a valid positive number.");
        return;
    }
    var pi = 22 / 7;
    var area = pi * radius * radius;
    alert("The area of the circle is: " + area.toFixed(2));
}
