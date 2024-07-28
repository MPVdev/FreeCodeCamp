const input = document.getElementById("user-input");
const btnCheck = document.getElementById("check-btn");
const btnClear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

btnCheck.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    alert("Please provide a phone number");
    return;
  }

  if (validateUSPhoneNumber(value)) {
    result.innerHTML += `<p class="green">Valid US number: <br>${value}</p>`;
  } else {
    result.innerHTML += `<p class="red">Invalid US number: <br>${value}</p>`;
  }
});

btnClear.addEventListener("click", () => {
  result.innerHTML = "";
});

function validateUSPhoneNumber(phoneNumber) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-.\s]?)\d{4}$/;
  return regex.test(phoneNumber);
}
