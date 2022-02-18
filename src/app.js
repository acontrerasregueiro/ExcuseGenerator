/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generatenumber(numero) {
  return numero;
}

window.onload = function() {
  let numaleatorio = Math.random() * 10; //write your code here
  document.body.innerHTML = generarexcusa();
  //console.log("Hello Rigo from the console! ,", numaleatorio);
};

let generarexcusa = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "the bike"];
  let when = [
    "before the class",
    "right on time",
    "during my lunch",
    "while I was praying"
  ];
  let indicewho = Math.floor(Math.random() * who.length);
  let indiceaction = Math.floor(Math.random() * action.length);
  let indicewhat = Math.floor(Math.random() * what.length);
  let indicewhen = Math.floor(Math.random() * when.length);
  let excusacompleta =
    who[indicewho] +
    " " +
    action[indiceaction] +
    " " +
    what[indicewhat] +
    " " +
    when[indicewhen];
  console.log(excusacompleta);
  return excusacompleta;
};
