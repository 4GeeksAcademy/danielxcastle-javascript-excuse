/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuse() {
  const who = ["Ernesto", "My dog", "Lebron James", "My wife", "Jack", "Jill"];
  const action = ["ripped up", "ate", "threw away", "ran over"];
  const what = ["a cheeseburger", "a taco", "my homework", "my cat"];
  const why = ["do not like me", "were late", "were hungry"];

  const selectedWhoIndex = Math.floor(Math.random() * who.length);
  const selectedActionIndex = Math.floor(Math.random() * action.length);
  const selectedWhatIndex = Math.floor(Math.random() * what.length);
  const selectedWhyIndex = Math.floor(Math.random() * why.length);

  const phrase = `${who[selectedWhoIndex]} ${action[selectedActionIndex]} ${what[selectedWhatIndex]} because they ${why[selectedWhyIndex]}! `;

  const selectedPhrase = document.querySelector("#phrase");
  selectedPhrase.textContent = phrase;

  console.log();
};
