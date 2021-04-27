
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



  //This code limits the extent of the map to prevent users from scrolling far away from the
  //initial extent.
  var initialExtent; 

  map.on('extent-change', function(event) {
    if(!initialExtent){
      initialExtent = map.extent;
    }
    
    //If the map has moved to the point where it's center is outside the initial boundaries,
    //then move it back to the edge where it moved out
    var currentCenter = map.extent.getCenter();
    if (initialExtent && !initialExtent.contains(currentCenter) && event.delta && event.delta.x !== 0 && event.delta.y !== 0) {
      var newCenter = map.extent.getCenter();

      //check each side of the initial extent and if the current center is outside that extent, 
      //set the new center to be on the edge that it went out on
      if (currentCenter.x < initialExtent.xmin) {
        newCenter.x = initialExtent.xmin;
      }
      if (currentCenter.x > initialExtent.xmax) {
        newCenter.x = initialExtent.xmax;
      }
      if (currentCenter.y < initialExtent.ymin) {
        newCenter.y = initialExtent.ymin;
      }
      if (currentCenter.y > initialExtent.ymax) {
        newCenter.y = initialExtent.ymax;
      }
      map.centerAt(newCenter);
    }
  });
});
		