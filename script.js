// @ts-check

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
  });
  return element;
};

const username = document.querySelector(".username");
if (!username) throw new Error("wat");

for (let i = 0; i < 9; i++) {
  username.append(createLetter());
}
