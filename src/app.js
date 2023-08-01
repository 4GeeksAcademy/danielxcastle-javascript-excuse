/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuse() {
  //write your code here

  const who = ["Ernesto", "My dog", "Lebron James", "My wife", "Jack", "Jill"];
  const action = ["ripped up", "ate", "threw away", "ran over"];
  const what = ["a cheeseburger", "a taco", "my homework", "my cat"];
  const why = ["do not like me", "were late", "were hungry"];

  const randomwhoIndex = Math.floor(Math.random() * who.length);
  const randomactionIndex = Math.floor(Math.random() * action.length);
  const randomwhatIndex = Math.floor(Math.random() * what.length);
  const randomwhyIndex = Math.floor(Math.random() * why.length);

  const phrase = `${who[randomwhoIndex]} ${action[randomactionIndex]} ${what[randomwhatIndex]} because they ${why[randomwhyIndex]}! `;

  const targetheading = document.querySelector("#phrase");
  targetheading.textContent = phrase;

  console.log();
};
