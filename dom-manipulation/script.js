/* QUERY SELECTORS */
const container = document.querySelector("#container"); // same as CSS selectors
const display = container.firstElementChild; // an example way
const allControls = document.querySelectorAll(".controls");
console.log(allControls); // returns a NodeList (!== array because several array methods don't exist)

/* ELEMENTS CREATION AND ACTIONS */
const interest = document.querySelector(".controls.interest");
for (let i = 1; i <= 10; i++) {
  const div = document.createElement("div");
  // set the element's class and styles
  div.className = "new";
  div.style.cssText = "color: gold; font-style: italic";
  div.textContent = `New div #${i}`;
  interest.parentNode.insertBefore(div, interest); // each node as its own properties as it's created with an interface
}
const controls = Array.from(document.querySelectorAll(".controls")); // because we need to find it, which is only compatible with arrays and not node lists
// remove one (use find)
const targetToDelete = controls.find((elm) => elm.textContent === "Controls D");
targetToDelete.parentNode.removeChild(targetToDelete);
// remove multiple (use filter)
const targetElements = controls.filter(
  (elm) => elm.textContent === "Controls D" || elm.textContent === "Controls E"
);
// applying actions to multiple elements of the same kind
// not removeChild because there are no children in here
targetElements.forEach((el) => el.remove());

/* EVENT HANDLING */
let count = 0;
const buttonClick = document.querySelector(".button-click");
const buttonResults = document.querySelector("#button-results");
const div = document.createElement("div");
div.style.cssText = "font-size: 1rem; line-height: 4px";
if (count === 0) div.textContent = "← Click that button";
buttonResults.appendChild(div);
function buttonPressed(e) {
  count++;
  div.textContent =
    count < 50
      ? `You've clicked me ${count} ${count === 1 ? "time." : "times."}`
      : "You clicked me too many times!";
  if (count >= 50) {
    e.target.textContent = "Stop!";
    e.target.style.cssText = "background: crimson; font-weight: 700;";
  }
  document.getElementById("button-results").appendChild(div);
  console.log(e.target); // target = the clicked DOM node
}
buttonClick.addEventListener("click", buttonPressed); // doing this is generally better because it allows adding >1 events

const textOutput = document.querySelector("#output");
const textBox = document.querySelector("input#textBox");
console.log(textOutput);
console.log(textBox);
textBox.addEventListener("keydown", (e) => {
  if (e.key === " ") textOutput.textContent = "Space";
  else textOutput.textContent = `${e.key}`;
});

controls.forEach((div) => {
  div.addEventListener("click", () => console.log(div.textContent));
});
