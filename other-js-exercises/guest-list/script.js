const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

let firstNameAdmit = true;
let firstNameRefuse = true;

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Phil" || people[i] === "Lola") {
    if (firstNameRefuse === true) refused.textContent += `${people[i]}`;
    else refused.textContent += `, ${people[i]}`;
    firstNameRefuse = false;
  } else {
    if (firstNameAdmit === true) admitted.textContent += `${people[i]}`;
    else admitted.textContent += `, ${people[i]}`;
    firstNameAdmit = false;
  }
}
