document.addEventListener("DOMContentLoaded", function () {
    // Set MapTiler API key
    maptilersdk.config.apiKey = 'xCqST7P0WA7ORZJP9QYR';
  
    // Create a MapTiler map with street style
    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.STREETS,
      center: [121.4064, 14.2557],
      zoom: 16.3,
      minZoom: 16.3,
      maxZoom: 22,
    });
  
    // Declare a global variable to hold the custom image marker
    let customImageMarker;
  
    // Function to create a marker with an iframe-based popup and custom label
    function createMarkerWithIframePopupAndLabel(lngLat, iframeSrc, popupContent, label) {
      const popup = new maptilersdk.Popup({ offset: 25, maxWidth: "400px" });
  
      // Create an iframe element
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.style.width = '100%';
      iframe.style.height = '200px';
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
  
    // Function to create a custom image marker with an iframe-based popup and custom label
    function createCustomImageMarkerWithIframeAndLabel(lngLat, imageUrl, imageSize, iframeSrc, popupContent, label) {
      const popup = new maptilersdk.Popup({ offset: 12, maxWidth: "400px" });
  
      // Create an iframe element
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.style.width = '100%';
      iframe.style.height = '200px';
      iframe.frameBorder = 0;
  
      // Append the iframe to the popup content
      popup.setDOMContent(iframe);
  
      // Create a custom image marker with the iframe popup
      customImageMarker = new maptilersdk.Marker({ element: createCustomImageMarkerElement(imageUrl, imageSize) })
        .setLngLat(lngLat)
        .setPopup(popup)
        .addTo(map);
    }
  
    // Function to create a custom image marker element
    function createCustomImageMarkerElement(imageUrl, imageSize) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.style.width = imageSize.width + 'px';
      imageElement.style.height = imageSize.height + 'px';
  
      return imageElement;
    }
  
    // Make the map variable global
    window.map = map;
  
    // Markers with iframe-based popups and custom labels
    createMarkerWithIframePopupAndLabel(
      [121.40530, 14.25673],
      '.html',
      'LU01',
      `<style>#lb1{text-align:center}</style>
      <b id=lb1>LU01</b>`
    );
  
    createMarkerWithIframePopupAndLabel(
      [121.40532, 14.25662],
      '.html',
      'LU02',
      '<b id=lb1>LU02</b>'
    );
  
    // Custom image markers with iframes inside and custom labels
    createCustomImageMarkerWithIframeAndLabel(
      [121.405, 14.256],
      'src/663342.png',
      { width: 30, height: 32 },
      '.html',
      'Custom Marker 1',
      'Label A'
    );
  
    createCustomImageMarkerWithIframeAndLabel(
      [121.40907515758796, 14.254214751707318],
      'src/LU.Cator.png',
      { width: 20, height: 20 },
      'assets/html/footer.html',
      'Custom Marker 2',
      'Label A'
    );
  
    const customLabelStyle = document.createElement('style');
    customLabelStyle.textContent = `
      .custom-label {
        color: black;
        position:absolute;
        font-family: Calibri(body);
        font-size: 12px;
      }
    `;
    
    //! LABEL
    document.head.appendChild(customLabelStyle);
  
    function createCustomLabel(htmlContent) {
      const labelElement = document.createElement('div');
      labelElement.className = 'custom-label';
      labelElement.innerHTML = htmlContent;
    
      return labelElement;
    }
    
    // Create a custom label with the specified styles
    const customLabel = new maptilersdk.Marker({ element: createCustomLabel(
      '<>Oval</>') })
      .setLngLat([121.405, 14.255])
      .addTo(map);
  
  });
  