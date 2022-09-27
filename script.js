var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


function display(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value +")";
	css.appendChild(document.createTextNode(color1.value + " and " + color2.value));
	css.textContent = body.style.background;
}


color1.addEventListener("input", display);
color2.addEventListener("input", display);






const obj = {
	player: "Sally",
	experience: 100,
	wizardLevel: false
}

const player = obj.player;
const experience = obj.experience; 
const wizardLeve = obj.wizardLevel;

const {player, experience} = obj;



const name  = "Pranoy"
const age = 26
const pet = "Rancho"

const greeting = `Hello ${name}, you are ${age} years old and have a dog named ${pet}!`