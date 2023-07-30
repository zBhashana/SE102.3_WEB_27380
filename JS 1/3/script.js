let originalColors = {};
function changeColor(color) {
  var button = document.getElementById(color + 'Button');
  originalColors[color] = button.style.backgroundColor;
  button.style.backgroundColor = color;
}
function resetColor(color) {
  var button = document.getElementById(color + 'Button');
  button.style.backgroundColor = originalColors[color];
}
