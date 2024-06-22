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
      col.classList = "container col-xl-3 col-md-4 col-sm-8 col-xs-5";
      col.innerHTML = `
      <div class="card" style="width: 18erm";>
      <img class="card-img-top" src="${result.data.memes[i].url}" alt="memes img" id="img">
       <div class ="card-footer">
        <h6 class=text-center>${result.data.memes[i].name}</h4>
      </div>
      ` 
      row.append(col)
    }
  });

// appending part
document.body.append(h1, container);
container.append(row);
