document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("srchbtn");

  searchButton.addEventListener("click", function () {
    const searchInput = document.getElementById("output");
    const searchQuery = searchInput.value.trim().toLowerCase(); // Convert to lowercase

    // Pass the map variable to the searchMap function
    searchMap(window.map, searchQuery);
  });
});

function searchMap(map, markerName) {
  // Assume you have an array of markers with names and corresponding coordinates
  const markers = [
    //TODO Admin Building
    {name: 'LU01', coordinates: [121.40530,14.25673]},
    {name: 'LU02', coordinates: [121.40532, 14.25662] },
    {name: 'LU01', coordinates: []},
    {name: 'LU02', coordinates: []},
    {name: 'LU03', coordinates: []},
    {name: 'LU04', coordinates: []},
    {name: 'LU05', coordinates: []},
    {name: 'LU06', coordinates: []},
    {name: 'LU07', coordinates: []},
    {name: 'LU08', coordinates: []},
    {name: 'LU09', coordinates: []},
    {name: 'LU10', coordinates: []},
    {name: 'LU11', coordinates: []},
    {name: 'LU12', coordinates: []},
    {name: 'LU13', coordinates: []},
    {name: 'LU14', coordinates: []},
    {name: 'LU15', coordinates: []},
    {name: 'LU16', coordinates: []},
    {name: 'LU17', coordinates: []},
    {name: 'LU18', coordinates: []},
    {name: 'LU19', coordinates: []},
    {name: 'LU20', coordinates: []},
    
    //! Others
    { name: 'Oval', coordinates: [121.40515001845127, 14.255105352437454] },
    { name: 'Oreta', coordinates: [121.40774, 14.25559] },
    { name: 'New Building', coordinates: [121.40917,14.25436] },
  ];

  // Convert marker names to lowercase for case-insensitive comparison
  const lowerCaseMarkerName = markerName.toLowerCase();

  // Find the marker with the specified name
  const targetMarker = markers.find(marker => marker.name.toLowerCase() === lowerCaseMarkerName);

  console.log("Searching for:", markerName);

  if (targetMarker) {
    // Zoom in on the target marker
    map.flyTo({ center: targetMarker.coordinates, zoom: 19 });

  } else {
    console.error(`Marker with name "${markerName}" not found.`);
  }
}
