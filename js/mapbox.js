// The majority of this script / mapbox implementation is a copy of the mapbox implementation from the project 'Solbiler' by Frederik Barbré

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJlZDk4OTEiLCJhIjoiY2xmYXh0bndwMmZ4YzN6bnRhOTZoa3BiZCJ9.ajDp70TNtFQ5XE4cKiArYQ";
const map = new mapboxgl.Map({
  container: "map",
  // Replace YOUR_STYLE_URL with your style URL.
  style: "mapbox://styles/fred9891/clik96ogp00em01pg5vb7gfr5",
  center: [10.208778, 56.158807],
  zoom: 16,
});

// Add source - found in the Discord chat!

// Source - https://stackoverflow.com/questions/50578519/mapbox-disable-zoom-on-scroll-but-use-ctrscroll-instead

// To stop the zoom on scroll when the cursor hovers over the map.
// With this piece of code you now have to hold down ctrl, alt or the meta key to zoom.

map.on("wheel", (event) => {
  if (event.originalEvent.ctrlKey) {
    return;
  }

  if (event.originalEvent.metaKey) {
    return;
  }

  if (event.originalEvent.altKey) {
    return;
  }

  event.preventDefault();
});

/* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["symbols"], // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */

  const popup = new mapboxgl.Popup({ offset: [0, -30] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `
      <div class="popup-card">
        <h3 class="popup-header">BADSTUE<span>ROCK</span></h3>
        <a href="https://goo.gl/maps/5w6DURsU4BGbTK7h6" target="_blank" class="popup-address" >Badstuegade 22</a>
        <div class="popup-hours">
            <h4>MAN - TOR</h4>
            <h5>11:00-17:30</h5>
        </div>
        <div class="popup-hours">
            <h4>FRE</h4>
            <h5>11:00-18:00</h5>
        </div>
        <div class="popup-hours">
            <h4>LØR</h4>
            <h5>10:30-15:30</h5>
        </div>
        <div class="popup-hours">
            <h4>SØN</h4>
            <h5>LUKKET</h5>
        </div>
      </div>
    `
    )
    .addTo(map);
});