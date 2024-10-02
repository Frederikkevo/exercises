const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const showAllButton = document.getElementById("showAll");
const electricVehiclesButton = document.getElementById("electricVehicles");
const moreThanTwoSeatsButton = document.getElementById("moreThanTwoSeats");
const electricOwnedByJonasButton = document.getElementById("electricOwnedByJonas");
const rugbroedWithMultipleSeatsButton = document.getElementById("rugbroedWithMultipleSeats");

showAllButton.addEventListener("click", () => showTheseVehicles(vehicles));
electricVehiclesButton.addEventListener("click", showElectricVehicles);
moreThanTwoSeatsButton.addEventListener("click", showMoreThanTwoSeats);
electricOwnedByJonasButton.addEventListener("click", showElectricOwnedByJonas);
rugbroedWithMultipleSeatsButton.addEventListener("click", showRugbroedWithMultipleSeats);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // Nulstil tabellen først
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type || ""}</td>
      <td>${each.fuel || ""}</td>
      <td>${each.passengers || ""}</td>
      <td>${each.stops ? each.stops.join(", ") : ""}</td>
      <td>${each.ownedBy || ""}</td>
      <td>${each.isElectric ? "Ja" : "Nej"}</td>
      <td>${each.isTandem ? "Ja" : "Nej"}</td>
    </tr>`;
  });
}

function showElectricVehicles() {
  const filtered = vehicles.filter(vehicle => vehicle.isElectric);
  showTheseVehicles(filtered);
}

function showMoreThanTwoSeats() {
  const filtered = vehicles.filter(vehicle => vehicle.passengers > 2);
  showTheseVehicles(filtered);
}

function showElectricOwnedByJonas() {
  const filtered = vehicles.filter(vehicle => vehicle.isElectric && vehicle.ownedBy === "Jonas");
  showTheseVehicles(filtered);
}

function showRugbroedWithMultipleSeats() {
  const filtered = vehicles.filter(vehicle => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
  showTheseVehicles(filtered);
}

// Start med at vise alle fartøjer
showTheseVehicles(vehicles);
