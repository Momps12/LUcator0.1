document.addEventListener("DOMContentLoaded", function () {
  // Set MapTiler API key
//  maptilersdk.config.apiKey = '2mGYTTS8Ud5GQd1R4FCF';

  // Create a MapTiler map with street style
  const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS,
    center: [121.40663,14.25612],
    zoom: 16.3,
    minZoom: 16.3,
    maxZoom: 20,
    maxBounds: [
      [121.3991,14.2503], // SouthWest
      [121.4118, 14.2588]    // NorthEast 
    ]
  });

  //! MARKER FUNCTIONS

  // Function to create a marker with an iframe-based popup and custom label
  function DefMarker(lngLat, iframeSrc, popupContent, label) {
    const popup = new maptilersdk.Popup({ offset: 25, maxWidth: "400px" });

    // Create an iframe element
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.width = 'auto';
    iframe.style.height = '28rem'; // Adjusted to fit the screen size
    iframe.frameBorder = 0;

    // Append the iframe to the popup content
    popup.setDOMContent(iframe);

    // Create a regular marker with the iframe popup
    const marker = new maptilersdk.Marker()
      .setLngLat(lngLat)
      .setPopup(popup)
      .addTo(map);

    // Add a custom label to the marker
    if (label) {
      const labelElement = document.createElement('div');
      labelElement.className = 'custom-label';
      labelElement.innerHTML = label;

      // Append the label to the marker
      marker.getElement().appendChild(labelElement);
    }
  }

  // Function to create a custom marker with label and iframe popup
  function CustomMarker(lngLat, imageUrl, imageSize, label, iframeSrc) {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.backgroundImage = `url(${imageUrl})`;
    markerElement.style.width = imageSize.width + 'px';
    markerElement.style.height = imageSize.height + 'px';
  
    // Add a label to the marker
    if (label) {
      const labelElement = document.createElement('div');
      labelElement.className = 'custom-label';
      labelElement.innerHTML = label;
      markerElement.appendChild(labelElement);
    }
  
    // Create a custom marker
    const marker = new maptilersdk.Marker(markerElement)
      .setLngLat(lngLat)
      .addTo(map);
  
    // Create and attach an iframe
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.style.width = 'auto'; 
    iframe.style.height = '28rem'; 
    iframe.frameBorder = 0;
  
    const popup = new maptilersdk.Popup({
      offset: 25, 
      maxWidth: "400px",
    })
      .setLngLat(lngLat)
      .setDOMContent(iframe);
  
    marker.setPopup(popup);
  }

  // Function to create a standalone label without marker
  function createStandaloneLabel(lngLat, label) {
    const labelElement = document.createElement('div');
    labelElement.className = 'standalone-label';
    labelElement.innerHTML = label;

    const marker = new maptilersdk.Marker(labelElement)
      .setLngLat(lngLat)
      .addTo(map);
  }

  // Make the map variable global
  window.map = map;


  //! Create custom markers with HTML-based iframe popups
  
  //? NEW BUILDING
  CustomMarker(
    [121.40898,14.25435],
    'src/NewBuilding.png',          //* Icon Path
    { width: 42, height: 42 },      //* Icon Size
    'New Building',                 //* Name
    '.html'  //* HTML Path
  );

  //? ORETA BUILDING
  CustomMarker(
    [121.40760,14.25559],
    'src/Oreta.png',
    { width: 32, height: 32 },
    'Oreta Building',
    'assets/html/footer.html'
  );
  
  //? GATE
  CustomMarker(
    [121.40073,14.25545],
    'src/Entrance.png',
    { width: 36, height: 22 },
    'Entrace & Exit Gate 1',
    'assets/html/footer.html'
  );

  //? GATE 2
  CustomMarker(
    [121.40779,14.25626],
    'src/exit.png',
    { width: 36, height: 22 },
    'Entrace & Exit Gate 2',
    'assets/html/footer.html'
  );

  //? Athlete's Village
  CustomMarker(
    [121.40753,14.25499],
    'src/Athletes.png',
    { width: 42, height: 42 },
    `Athlete's Village`,
    'assets/html/footer.html'
  );
  
  //? Rizal Mon.
  CustomMarker(
    [121.40580,14.25568],
    'src/RizalMon.png',
    { width: 32, height: 32 },
    `Jose Rizal Monument`,
    'assets/html/footer.html'
  );
  
  //! Default MARKERS 

  //* LU ROOMS
  DefMarker( //1
    [121.40530, 14.25673],
    'assets/html/Lu01.html',
    'LU01',
    `<style>#lb1{text-align:center}</style>
    <b id=lb1>LU01</b>`
  );

  DefMarker( //2
    [121.40533, 14.25666],
    '.html',
    'LU02',
    '<b id=lb1>LU02</b>'
  );
  DefMarker( //3
    [121.40536,14.25658],
    '.html',
    'LU03',
    '<b id=lb1>LU03</b>'
  );

   //! Standalone Label

   createStandaloneLabel(
    [121.40510,14.25483],
    `<i>Complex Oval</i>`
  );

  // Custom styles
  const customLabelStyle = document.createElement('style');
  customLabelStyle.textContent = `
    .custom-marker, .standalone-label {
      cursor: pointer;
    }

    .standalone-label{
      color: black; 
      text-shadow: 1px 2px 2px white;
      font-weight: bold;
      font-size: 10px
      font-family: Calibri, sans-serif;
    }

    .custom-label {
      color: #874e03;
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      font-family: Calibri, sans-serif;
      font-weight: bold;
      font-size: 12px;
      white-space: nowrap;
      text-shadow: 1px 2px 2px white;
    }

    .custom-marker {
      background-size: cover;
    }
  `;
  document.head.appendChild(customLabelStyle);
});