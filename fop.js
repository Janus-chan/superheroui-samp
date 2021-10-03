let inmp = document.querySelector(".kiop");
let serch = document.querySelector(".minop");
let autofils = document.querySelector("#search-box");

inmp.addEventListener("input", (e) => {
  e.preventDefault();
  main_syn(inmp.value);
});

let main_syn = async function (red) {
  if (red.length >= 2) {
    console.log(red);
    let pars = await fetch(
      `https://superheroapi.com/api.php/314498107107064/search/${red}`
    );
    let res = await pars.json();
    console.log(res);
    // return res
    oper(res);
  } else {
    autofils.innerHTML = "";
  }
};

function oper(params) {
  let spike = [];
  let realml;
  let kant = params.results;
  kant.map((elem) => {
    realml = `  <div  class="lafe">
   <button  class="but-aut"   ><a href="./sedc.html" onclick="dsoc(event)"  data-item ="${elem.name}">${elem.name}</a></button>
   <span class="dats-nam">${elem.biography["full-name"]}</span>      
 </div>`;
    spike.push(realml);
  });
  let final = spike.join("");
  // console.log(final);
  autofils.innerHTML = final;
}

serch.addEventListener("click", () => {
  loc();
});

function loc() {
  localStorage.setItem("data", inmp.value);
}
function dsoc(event) {
  localStorage.setItem("data", event.currentTarget.getAttribute("data-item"));
  inmp.value = "";
}

let page_items = [
  {
    name: "Darkseid",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/668.jpg",
  },
  {
    name: "Captain Marvel",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/103.jpg",
  },
  {
    name: "Captain America",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
  },
  {
    name: "Black Adam",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/643.jpg",
  },
  {
    name: "Naruto Uzumaki",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/1540.jpg",
  },
  {
    name: "Iron Man",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
  },
  {
    name: "Bumblebee",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/1542.jpg",
  },
  {
    name: "Superman",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
  },
  {
    name: "Flash",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/891.jpg",
  },
];

page_items.forEach((page) => {
 let realml_1 = `<div class="card mb-3 col-lg-3 mx-2">
 <h3 class="card-header">${page.name}</h3>
 <img style="height: 300px;" src="${page.url}" alt="">
 <div class="card-body">
 <a href="./sedc.html" class="card-link sub-linker" onclick ="dsoc(event)" data-item ="${page.name}">click here</a>
 </div>
</div>`;
document.querySelector("#main--body").insertAdjacentHTML("beforeend",realml_1);
});
