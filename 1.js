function dumpObject (o, pfx, sep)
{
  var p;
  var s = "";

  sep = (typeof sep == "undefined") ? " = " : sep;
  pfx = (typeof pfx == "undefined") ? "" : pfx;
  for (p in o){

    if (typeof (o[p]) != "function")
      s += pfx + p + sep + o[p] + "\n";
    else 
      s += pfx + p + sep + "function\n";

  }

  return s;
}

var layer = josm.layers.activeLayer;
var target = layer.data.query('ref=KH34');
var command = require("josm/command");
var target = josm.layers.activeLayer.data.query('ref=KH34');
for(var i in target){
  out.println(dumpObject(target[i].tags));
}
