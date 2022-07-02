function exercise1() {
  let a = document.querySelector(".exercise1-a").value;
  let b = document.querySelector(".exercise1-b").value;

  let rs = document.querySelector(".result1");

  if (a === b) {
    rs.innerHTML = (+a + +b) * 3;
  } else {
    rs.innerHTML = +a + +b;
  }
}

function exercise2() {
  let input = document.querySelector(".exercise2").value;

  let rs = document.querySelector(".result2");

  if (input < 19) {
    rs.innerHTML = 19 - input;
  } else {
    rs.innerHTML = (input - 19) * 3;
  }
}

function exercise3() {
  let input = document.querySelector(".exercise3").value;

  let rs = document.querySelector(".result3");

  let output = [];

  for (let i = 0; i <= 10; i++) {
    let newNumber = input.replace("*", i);
    if (newNumber % 3 === 0) {
      output.push(newNumber);
    }
  }

  rs.innerHTML = output;
}

function exercise4() {
  let input = document.querySelector(".exercise4").value;

  let rs = document.querySelector(".result4");

  let output = [];

  for (let i = 0; i <= 10; i++) {
    let newNumber = input.replace("*", i);
    if (newNumber % 6 === 0) {
      output.push(newNumber);
    }
  }

  rs.innerHTML = output;
}
