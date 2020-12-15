// Write your JavaScript code here!
function loaded() {
   let validForm = document.getElementById("launchForm");
   validForm.addEventListener('submit', function (event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let coPilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");

      const letters = /^[a-zA-Z]+$/;
      const numbers = /^[0-9]+$/;


      if (pilotInput.value === "" || coPilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!")
         event.preventDefault();
      };

      if (!letters.test(pilotInput.value) || !letters.test(coPilotInput.value) || !numbers.test(fuelInput.value) || !numbers.test(cargoInput.value)) {
         alert("Invalid input!")
         event.preventDefault();
      }

      // if ((fuelInput.value) || isNaN(cargoInput.value)) {
      //    alert("Invalid input!")
      //    event.preventDefault();
      // }
   });
};
window.onload = loaded();




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
