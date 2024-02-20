let spaceContainer = document.getElementById("space-container");
let titel = document.createElement("h2");
titel.textContent = "the universe";
titel.style = "color:purple ;";
spaceContainer.appendChild(titel);
let imgeing = document.createElement("img");
imgeing.src =
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg";

imgeing.style = "width:500px";
spaceContainer.appendChild(imgeing);

let planetsContainer = document.createElement("div");
spaceContainer.appendChild(planetsContainer);

let planetsListTitle = document.createElement("h3");
planetsListTitle.textContent = "our plants";

let planetsList = document.createElement("ul");

// planetsContainer.id.add("myclass");

planetsContainer.style = "backgroundColor:red;";

planetsList.innerHTML = `<li>11</li> <li>22</li>`;

planetsContainer.appendChild(planetsListTitle);
planetsContainer.style =
  "border:2px solid red; width: 500px; padding: 10px; background-Color:red";
planetsContainer.appendChild(planetsList);
