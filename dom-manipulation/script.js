/* QUERY SELECTORS */
const container = document.querySelector("#container"); // same as CSS selectors
const display = container.firstElementChild; // an example way
const allControls = document.querySelectorAll(".controls"); // returns a NodeList (!== array because several array methods don't exist)

/* ELEMENTS CREATION AND ACTIONS */
const interest = document.querySelector(".controls.interest");
for (let i = 1; i <= 10; i++) {
  const div = document.createElement("div");
  // set the element's class and styles
  div.className = "new";
  div.style.cssText = `
  color: gold;
  font-style: italic;
  border: 1px dashed gold`;
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

// clicking counter button
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
    e.target.style.cssText =
      "background: rgb(225, 79, 113); font-weight: 700; color: whitesmoke";
  }
  document.getElementById("button-results").appendChild(div);
}
buttonClick.addEventListener("click", buttonPressed); // doing this is generally better because it allows adding >1 events

// keyboard inputs
const textOutput = document.querySelector("#output");
const textBox = document.querySelector("input#textBox");
textBox.addEventListener("keydown", (e) => {
  textOutput.textContent = `${e.code}`; // or e.key
});

controls.forEach((div) => {
  div.addEventListener("click", () => console.log(div.textContent));
});

// mouse event
const box = document.querySelector("#box");
let cursorPos = document.querySelector("#cursor-pos");
cursorPos.innerText = "Hover on this box";
box.addEventListener("mousemove", (e) => {
  cursorPos.innerText = `[Screen Cursor Position]\t(${e.screenX}, ${e.screenY})
  [Client Cursor Position]\t(${e.clientX}, ${e.clientY})
  `;
});

// page event
document.addEventListener(
  "load",
  alert("Webpage and its external resources have been completely loaded.")
);

// event delegation (use 1 listener for the parent tag to trigger all its children’s events at once):
// implementation-wise, this isn't the same as using forEach to add those listeners
// this technique is inherently achieved with event bubbling
let menu = document.querySelector("#menu");
menu.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "home":
      console.log("Home menu item was clicked");
      break;
    case "dashboard":
      console.log("Dashboard menu item was clicked");
      break;
    case "report":
      console.log("Report menu item was clicked");
      break;
  }
});

// event dispatch (programmatically create and trigger events):
// listen for the custom event on box
let colorCode = document.querySelector("#color-code");
box.addEventListener("changeBackgound", (e) => {
  box.style.backgroundColor = colorCode.innerText = e.detail.bgColor;
});
// set up dispatch button to create and trigger that event right when clicked
const btnDispatch = document.querySelector("#dispatch");
btnDispatch.addEventListener("click", () => {
  const changeBackgoundEvent = new CustomEvent("changeBackgound", {
    detail: {
      bgColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
    },
    bubbles: false, // no need to bubble for this
    cancelable: false,
  });
  // dispatch on the box, not on the button
  box.dispatchEvent(changeBackgoundEvent);
});
