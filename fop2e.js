console.log(localStorage.getItem("data"));

// dio(localStorage.getItem("otems"));
let sub_syn = async function (dark) {
  try {
    let ferros = await fetch(
      `https://superheroapi.com/api.php/314498107107064/${dark}`
    );
    let pars_main = ferros.json();
    return pars_main;
 
  } catch (errors) {
    console.log(errors);
  }
};

sub_syn(`search/${localStorage.getItem("data")}`).then((contains) => {
  console.log(contains);
  let item_details = `  <img src="${contains.results[0].image.url}" alt="" />
        <div>
          <ul class="cross">
            <li class="cross-content">name:${contains.results[0].name}</li>
            <li class="cross-content">alias name:${contains.results[0].biography["biography"]}</li>
            <li class="cross-content">intelligence:${contains.results[0].powerstats.intelligence}</li>
            <li class="cross-content">strength:${contains.results[0].powerstats.strength}</li>
            <li class="cross-content">power:${contains.results[0].powerstats.power}</li>
          </ul>
        </div>
        <table style="margin:10px" class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">biography</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-primary">
            <td>speed</td>
            <td>${contains.results[0].powerstats.speed}</td>
        
          </tr>
          <tr class="bg-success">
            <td>publisher</td>
            <td>${contains.results[0].biography.publisher}</td>
          </tr>
          <tr class="bg-danger">
            <td>gender</td>
            <td>${contains.results[0].appearance.gender}</td>
          </tr>
          <tr class="bg-info">
            <td>race</td>
            <td>${contains.results[0].appearance.race}</td>
          </tr>
          <tr class="bg-warning">
            <td>durability</td>
            <td>${contains.results[0].powerstats.durability}</td>
          </tr>
        </tbody>
      </table>
        `;
  let item_curr = contains.results[0].id;
  console.log(item_curr);
  three_baits(item_curr);
  document.querySelector("#coli").innerHTML = item_details;
});

function three_baits(poiu) {
  poiu++;
  let spike_2 = [];
  let final_2;
  let item_details_2;
  for (let j = poiu; j <= +poiu + 2; j++) {
    console.log(j);
    sub_syn(j).then((cabage) => {
      console.log(cabage);
      item_details_2 = `<div class="card mb-3 col-lg-4 mx-2">
      <h3 class="card-header">${cabage.name}</h3>
      <img style="height: 300px;" src="${cabage.image.url}" alt="">
      <div class="card-body">
      <a href="./sedc.html" class="card-link sub-linker" onclick ="dsoc(event)" data-item ="${cabage.name}">click here</a>
      </div>
    </div>
    `;

      spike_2.push(item_details_2);
       final_2 = spike_2.join('');
      document.querySelector("#sub_con").innerHTML = final_2;
    }); 
  }
}

