document.write("Let the fizz buzzing commence!")

let input = parseInt(prompt("Enter the number you'd like to FizzBuzz to"))

function documentspace() {
  document.write("<br>")
  document.write("<br>")
}

for (let i = 1; i <= input; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    documentspace()
    document.write("FizzBuzz")
  } else if (i % 3 === 0) {
    documentspace()
    document.write("Fizz");
  } else if (i % 5 === 0) {
    documentspace()
    document.write("Buzz")
  } else {
    documentspace()
    document.write(i)
  }
}
