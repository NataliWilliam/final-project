mapboxgl.accessToken =
  "pk.eyJ1IjoibmF0YWxpOTUiLCJhIjoiY2s0enVjcnhmMGZmeTNqcWd3dDFyZXk0NSJ9.N7XbI6HE6hFLD9gcA30g4A";
let map = new mapboxgl.Map({
  container: "map-LA", // container id
  style: "mapbox://styles/natali95/ck4zui75l0zij1cppgwfq45gv", //hosted style id
  center: [-118.15, 34.024], // starting position
  zoom: 7.39 // starting zoom
});
//on click event li.
const la = document.querySelector("#LA");
const fr = document.querySelector("#FR");

la.addEventListener("click", e => {
  map.flyTo({
    center: [-118.15, 34.024], // starting position
    zoom: 8
  });
});
fr.addEventListener("click", e => {
  map.flyTo({
    center: [3.357, 48.611], // starting position
    zoom: 6
  });
});

// let mapTwo = new mapboxgl.Map({
//   container: "map-LA", // container id
//   style: "mapbox://styles/natali95/ck4zui75l0zij1cppgwfq45gv", //hosted style id
//   center: [-118.15, 34.024], // starting position
//   zoom: 7.39 // starting zoom
// });
