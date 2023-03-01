let url = new URL('https://stingray-app-hpvau.ondigitalocean.app/home-page/');
let data = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let new_arrials = data.new_arrials;
    let notebooks = data.notebooks;
    let pens = data.pens;

    document.querySelector('#newArrival1Image').src = new_arrials[0].image_1;
    document.querySelector('#newArrival1Name').textContent =
      new_arrials[0].name;
    document.querySelector(
      '#newArrival1Name'
    ).href = `/products/product-detail.html?id=${new_arrials[0].id}`;
    document.querySelector('#newArrival1Price').textContent =
      '$' + new_arrials[0].price;

    document.querySelector('#newArrival2Image').src = new_arrials[1].image_1;
    document.querySelector('#newArrival2Name').textContent =
      new_arrials[1].name;
    document.querySelector(
      '#newArrival2Name'
    ).href = `/products/product-detail.html?id=${new_arrials[1].id}`;
    document.querySelector('#newArrival2Price').textContent =
      '$' + new_arrials[1].price;

    document.querySelector('#newArrival3Image').src = new_arrials[2].image_1;
    document.querySelector('#newArrival3Name').textContent =
      new_arrials[2].name;
    document.querySelector(
      '#newArrival3Name'
    ).href = `/products/product-detail.html?id=${new_arrials[2].id}`;
    document.querySelector('#newArrival3Price').textContent =
      '$' + new_arrials[2].price;

    document.querySelector('#notebook1Image').src = notebooks[0].image_1;
    document.querySelector('#notebook1Name').textContent = notebooks[0].name;
    document.querySelector(
      '#notebook1Name'
    ).href = `/products/product-detail.html?id=${notebooks[0].id}`;
    document.querySelector('#notebook1Price').textContent =
      '$' + notebooks[0].price;

    document.querySelector('#notebook2Image').src = notebooks[1].image_1;
    document.querySelector('#notebook2Name').textContent = notebooks[1].name;
    document.querySelector(
      '#notebook2Name'
    ).href = `/products/product-detail.html?id=${notebooks[1].id}`;
    document.querySelector('#notebook2Price').textContent =
      '$' + notebooks[1].price;

    document.querySelector('#notebook3Image').src = notebooks[2].image_1;
    document.querySelector('#notebook3Name').textContent = notebooks[2].name;
    document.querySelector(
      '#notebook3Name'
    ).href = `/products/product-detail.html?id=${notebooks[2].id}`;
    document.querySelector('#notebook3Price').textContent =
      '$' + notebooks[2].price;

    //   PENS
    document.querySelector('#pen1Image').src = pens[0].image_1;
    document.querySelector('#pen1Name').textContent = pens[0].name;
    document.querySelector(
      '#pen1Name'
    ).href = `/products/product-detail.html?id=${pens[0].id}`;
    document.querySelector('#pen1Price').textContent = '$' + pens[0].price;

    document.querySelector('#pen2Image').src = pens[1].image_1;
    document.querySelector('#pen2Name').textContent = pens[1].name;
    document.querySelector(
      '#pen2Name'
    ).href = `/products/product-detail.html?id=${pens[1].id}`;
    document.querySelector('#pen2Price').textContent = '$' + pens[1].price;

    document.querySelector('#pen3Image').src = pens[2].image_1;
    document.querySelector('#pen3Name').textContent = pens[2].name;
    document.querySelector(
      '#pen3Name'
    ).href = `/products/product-detail.html?id=${pens[2].id}`;
    document.querySelector('#pen3Price').textContent = '$' + pens[2].price;
  });
