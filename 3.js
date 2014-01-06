var command = require("josm/command");
var nodeBuilder = require("josm/builder").NodeBuilder; 
josm.layers.activeLayer.apply(
    command.add(
      nodeBuilder.withTags({amenity: 'restaurant'})
      .withPosition(22.7211427, 122.3289928).create()
      )
);
