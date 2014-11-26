var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt",
  "Barry Duke"
];

function alphabetizer(names) {
  return arrange(names).sort();
}
function arrange(_arr) {
  var arr = [];
  var firstName;
  var lastName;
  for (i in _arr) {
    arr[i] = _arr[i].split(" ");
    firstName = arr[i][0];
    lastName = arr[i][1];
    arr[i] = lastName + ", " + firstName;
  }
  return arr;
}
// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));