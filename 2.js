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

var target = josm.layers.activeLayer.data.query(function(p){
  var ref = p.tags.ref;
  return p.tags.highway == 'tertiary' && ref.indexOf('KH') == 0;
});

for(var i in target){
  out.println(target[i].tags.ref);
}
