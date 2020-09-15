var quill = new Quill('#editor-container', {
  modules: {
    toolbar: [
      [{ header: [2, 3, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  },
  placeholder: 'Body of Post...',
  theme: 'snow'
});

const fs = require('fs');
const path = process.env.gitPaths;
const git = require('simple-git');

function save() {

  var title = document.getElementById('title').value;
  var date = document.getElementById('date').value;
  var attendance = document.getElementById('attendance').value;

  if (title == "" || date == "" || attendance == "") return;

  fs.writeFileSync(path + "/stored/" + date.toLowerCase() + "-" + title.toLowerCase().replace(/ /g, "_") + ".html", quill.root.innerHTML);
  git(path, { binary: 'git' }).add(path + "/stored/" + date.toLowerCase() + "-" + title.toLowerCase().replace(/ /g, "_") + ".html")
        .commit("Post - " + title).push(['-u', 'origin', 'master'], () => alert('uploaded')).catch(function (error) {

          alert(error);
          console.log(error);

        });

}
