const description = document.getElementById("description");
const meaning = document.getElementById("meaning");
const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

description.addEventListener("click", () => {
  if (meaning.style.display === "block") {
    meaning.style.display = "none";
  } else {
    meaning.style.display = "block";
  }
});

button.addEventListener("click", () => {
  if (input.value === "") {
    window.alert("Please input a value");
    return
  }
  const text = clearText(input.value);
  let textrev = "";

  for (let i = text.length - 1; i >= 0; i--) {
    textrev += text.charAt(i);
  }
  if (text === textrev) {
    result.innerHTML = `<strong>${input.value}</strong> is a palindrome`;
    result.style.display = "block";
  } else {
    result.innerHTML = `<strong>${input.value}</strong> is not a palindrome`;
    result.style.display = "block";
  }
});

const clearText = (text) => {
  const regex = /[^a-z0-9]/g;
  text = text.toLowerCase();
  return text.replace(regex, "");
}
