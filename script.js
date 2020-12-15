// Write your JavaScript code here!
let pilotInput = document.querySelector("input[name=pilotName]");
let coPilotInput = document.querySelector("input[name=copilotName]");
let fuelInput = document.querySelector("input[name=fuelLevel]");
let cargoInput = document.querySelector("input[name=cargoMass]");

function loaded() {
   let validForm = document.getElementById("launchForm");
   validForm.addEventListener('submit', function (event) {
      //VALIDATION
      const letters = /^[a-zA-Z]+$/;
      const numbers = /^[0-9]+$/;


      if (pilotInput.value === "" || coPilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!")
      } else if (!letters.test(pilotInput.value) || !letters.test(coPilotInput.value) || !numbers.test(fuelInput.value) || !numbers.test(cargoInput.value)) {
         alert("Invalid input!")
      };
      statusUpdate();
      event.preventDefault();
   });

   //UPDATING SHUTTLE REQUIREMENTS
   let statusUpdate = function () {
      faultyItems.style.visibility = 'visible';
      pilotStatus.innerText = `Pilot ${pilotInput.value} is ready for launch.`;
      copilotStatus.innerText = `Co-pilot ${coPilotInput.value} is ready for launch.`;

      if (Number(fuelInput.value) < 10000) {
         fuelStatus.innerText = `Fuel level too low for launch.`;
         launchStatus.style.color = `red`;
         launchStatus.innerText = `Shuttle not ready for launch`;
      } else if (Number(cargoInput.value) > 10000) {
         cargoStatus.innerText = `Cargo mass too heavy for launch`;
         launchStatus.style.color = `red`;
         launchStatus.innerText = `Shuttle not ready for launch`;
      } else {
         launchStatus.style.color = `green`;
         launchStatus.innerText = `Shuttle is ready for launch`;
      }
   }
};
window.onload = loaded;




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
