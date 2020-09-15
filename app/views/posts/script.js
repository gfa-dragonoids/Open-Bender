const fs = require('fs');
const path = process.env.gitPaths;

function loadStuffs() {

  var main = document.getElementById('main');
  var files = fs.readdirSync(path + "/stored");

  for (var i = 0; i < files.length; i++) {

    var item = document.createElement("A");
    item.innerHTML = files[i].split("-")[1].replace(/_/g, " ");
    item.href = "gfa-dragonoids.github.io/stored/" + files[i];
    main.append(item);

  }

}

document.onload = loadStuffs();
