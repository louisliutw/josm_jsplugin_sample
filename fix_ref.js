var layer = josm.layers.activeLayer;
var command = require("josm/command");
/* http://mathiasbynens.be/notes/javascript-encoding */
var str = '\u9AD8'; //高

var target = layer.data.query(function(p){
  var ref = p.tags.ref;
  return p.tags.highway == 'tertiary' && ref.indexOf('KH') == 0;
});

for ( var i = 0; i < target.length; i++){
  var ref = target[i].tags.ref;
  var new_ref = str + ref.replace('KH', '');
  layer.apply(
  command.change(target[i], {tags: {ref: new_ref}}));
  target[i].setModified(true);
}
