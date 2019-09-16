
var map;

require(["esri/map", "esri/geometry/Extent", "esri/layers/FeatureLayer", "dojo/domReady!"],function(Map, Extent, FeatureLayer) {

var bounds = new Extent({
            "xmin":-120,
            "ymin":51.5,
            "xmax":-140,
            "ymax":72
          });

  map = new Map("map", {
          //basemap: "streets",
          center: [-123, 51.5],
          zoom: 6,
		  extent: bounds,
		  minScale: 20000000
     });
	var layer = new esri.layers.ArcGISTiledMapServiceLayer("http://maps.gov.bc.ca/arcgis/rest/services/province/roads_wm/MapServer");
	map.addLayer(layer);
	//map.setMinScale(1500000);


  
});
		