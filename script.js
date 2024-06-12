// using function create dom elements
function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

// create a (container ,heading , row)
let container = element("div", "container", "", "");
const h1 = element("h1", "text-center", "title", "MEMES BOARD");
const row = element("div", "row", "", "");

// getting Memes api
const response = fetch("https://api.imgflip.com/get_memes");
response
  .then((data) => data.json())
  .then((result) => {
    for (let i = 0; i < result.data.memes.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-3 col-lg-4 col-xl-4 main";
      col.innerHTML = `
      <div class="card-group">
      <div class="card" style="width: 18erm";>
      <img class=""img-fluid rounded"" src="${result.data.memes[i].url}" alt="memes img" id="img">
       <div class ="card-body">
        <h4 class=text-center>${result.data.memes[i].name}</h4>
       </div>
      </div>
      `
      row.append(col)
    }
  });

// appending part
document.body.append(h1, container);
container.append(row);
