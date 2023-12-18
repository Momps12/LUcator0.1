$(document).ready(function() {
    var availableTags = [
      "LU01",
      "LU02",
      "LU03",
      "LU04",
      "LU05",
      "LU06",
      "LU07",
      "LU08",
      "LU09",
      "LU10",
      "LU11",
      "LU12",
      "LU13",
      "LU14",
      "LU15",
      "LU16",
      "LU17",
      "LU18",
      "LU19",
      "LU20",
      "Oreta",
      "Oval",
      "Canteen",
      "New Building",
    ];
    $("#output").autocomplete({
      source: availableTags
    });
  });
  