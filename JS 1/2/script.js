let marks = [];

function getMarks() {
  marks = []; // Reset the marks array

  for (let i = 1; i <= 5; i++) {
    let input = prompt(`Enter Mark ${i}:`);
    let mark = parseFloat(input);

    // Check if the input is valid (a number)
    if (!isNaN(mark)) {
      marks.push(mark);
    } else {
      alert(`Invalid input for Mark ${i}. Please enter a valid number.`);
      return;
    }
  }

  // Calculate the sum and average and display them
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  let average = total / marks.length;

  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = `
    <p>Total: ${total}</p>
    <p>Average: ${average.toFixed(2)}</p>
  `;

  document.getElementById('gradeButton').style.display = 'block';
}

function calculateGrade() {
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  let average = total / marks.length;

  // Display the result based on the average
  if (average > 30) {
    alert('Congratulations, you passed!');
  } else {
    alert('Better luck next time.');
  }
}
