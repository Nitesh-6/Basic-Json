// 1
// Fix the errors in data.json file

let container = document.getElementById("container");
container.setAttribute("class","containor")

// 2
//Import the data here from data.json

let json;
let response = await fetch("./data.json");

if (response.ok) {
  json = await response.json();
  console.log(json);
} else {
  alert("HTTP-Error: " + response.status);
}

// 3
// For each alien create a list item and add it in container

let aliens = json.aliens;
console.log(aliens);
aliens.map((alien) => {
  const list = document.createElement("li");
  list.setAttribute("class",alien);
  const node = document.createTextNode(alien);
  list.appendChild(node);
  const element = document.getElementById("container");
  element.appendChild(list);
});
