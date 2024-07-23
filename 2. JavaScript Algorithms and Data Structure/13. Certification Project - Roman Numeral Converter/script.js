const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumerals = [{
    value: 1000,
    symbol: 'M'
  },
  {
    value: 900,
    symbol: 'CM'
  },
  {
    value: 500,
    symbol: 'D'
  },
  {
    value: 400,
    symbol: 'CD'
  },
  {
    value: 100,
    symbol: 'C'
  },
  {
    value: 90,
    symbol: 'XC'
  },
  {
    value: 50,
    symbol: 'L'
  },
  {
    value: 40,
    symbol: 'XL'
  },
  {
    value: 10,
    symbol: 'X'
  },
  {
    value: 9,
    symbol: 'IX'
  },
  {
    value: 5,
    symbol: 'V'
  },
  {
    value: 4,
    symbol: 'IV'
  },
  {
    value: 1,
    symbol: 'I'
  }
];

btn.addEventListener("click", () => {
  let number = input.value;
  if (number === "") {
    result.innerText = "Please enter a valid number";
    return;
  } else if (number < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (number > 3999) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  let romanNumber = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      romanNumber += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }
  result.innerText = romanNumber;
});
