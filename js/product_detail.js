let params = new URL(document.location).searchParams;
let id = params.get('id');
let url = new URL(
  `https://stingray-app-hpvau.ondigitalocean.app/get-product/${id}/`
);
let data = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(id);
    if (data.image_1) {
      let image1 = document.querySelector('#image1');
      image1.src = data.image_1;
    }
    if (data.image_2) {
      let image2 = document.querySelector('#image2');
      image2.src = data.image_2;
    }
    if (data.image_3) {
      let image3 = document.querySelector('#image3');
      image3.src = data.image_3;
    }
    if (data.image_4) {
      let image4 = document.querySelector('#image4');
      image4.src = data.image_4;
    }

    let pageTitle = document.querySelector('#mainTitle');
    pageTitle.textContent = 'PODUCT DETAIL';

    let itemName = document.querySelector('#itemName');
    itemName.textContent = data.name;

    let itemPrice = document.querySelector('#itemPrice');
    itemPrice.textContent = '$' + data.price;
  });
