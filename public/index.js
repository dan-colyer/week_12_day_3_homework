const app = function () {
  const url = 'https://api.punkapi.com/v2/beers';

  makeRequest(url, requestComplete);


}

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open( 'GET', url );
  request.send();
  request.addEventListener('load', callback);

}

const requestComplete = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateBeerList(beers);
}

const populateBeerList = function(beerHash) {
  const ul = document.querySelector('#beer-list');
  beerHash.forEach(function(beer) {
    const li = document.createElement('li');
    li.innerText = beer.name;
    ul.appendChild(li);

    const img = document.createElement('img')
    img.src = beer.image_url;
    img.className = "beerImages";

    li.appendChild(img)
  })
}

document.addEventListener('DOMContentLoaded', app);

// allCats.forEach(function(animal) {
//     addInfo(animal.name, animal.favouriteFood, animal.imglink);
//   })
// }
//
// const addInfo = function (name, favouriteFood, imglink) {
//   const list1 = createElement('li', name)
//   const list2 = createElement('li', favouriteFood)
//   const list3 = createElement('li')
//
//   const img = document.createElement('img');
//   img.src = imglink;
//   img.className ="derp";
//
//   list3.appendChild(img);
//
//   const ul = createElement('ul');
//
//   ul.appendChild(list1);
//   ul.appendChild(list2);
//   ul.appendChild(list3);
//
//   document.querySelector('#cats').appendChild(ul)
// }
