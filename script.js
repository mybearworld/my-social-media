// @ts-check

const username = document.querySelector(".username");
if (!username) throw new Error("wat");
const submit = document.querySelector(".submit");
if (!submit) throw new Error("wat²");
/** @type {HTMLParagraphElement | null} */
const error = document.querySelector(".error");
if (!error) throw new Error("wat³");

const createLetter = () => {
  const element = document.createElement("div");
  element.className = "base-character";
  const letter = document.createElement("span");
  letter.className = "character";
  let codepoint = 42;
  letter.textContent = "*";
  element.append(letter);
  const down = document.createElement("button");
  down.className = "down";
  down.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`; // from lucide icons
  element.append(down);
  down.addEventListener("click", () => {
    codepoint--;
    codepoint %= 0x10ffff;
    letter.textContent = String.fromCodePoint(codepoint);
    error.style.display = "none";
  });
  return element;
};

for (let i = 0; i < 9; i++) {
  username.append(createLetter());
}

submit.addEventListener("click", () => {
  const pass = [...document.querySelectorAll(".character")]
    .map((el) => el.textContent)
    .join("");
  if (!/[a-z_0-9\-]/gi.test(pass)) {
    error.style.display = "block";
    error.textContent =
      "error: your password may only contain letters from a to z or numbers from zero to nine";
  }
});
