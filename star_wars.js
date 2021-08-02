let characters_div = document.getElementById("characters");
var timerId;

async function searchCharacters() {
  let query = document.getElementById("query").value;
  console.log(query.length);
  if (query.length == 0) {
    characters_div.innerHTML = null;
    return;
  }

  let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
  let data = await res.json();
  console.log(data);
  return data.results;
}

function throttleFunction() {
  if (timerId) {
    return false;
  }
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 1000);
  console.log(timerId);
}

function appendCharacters(d) {
  characters_div.innerHTML = null;

  d.forEach(({ name, gender }) => {
    let div = document.createElement("div");
    div.innerHTML = `<p onclick="window.location.href='star_wars2.html'" id="p1">${name}  &nbsp&nbsp;&nbsp ${gender}</p>`;
    characters_div.append(div);
  });
}

async function main() {
  let characters = await searchCharacters();
  appendCharacters(characters);
}
