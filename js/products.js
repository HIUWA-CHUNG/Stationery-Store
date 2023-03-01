let params = new URL(document.location).searchParams;
let category = params.get('category');
let h1Title = undefined;
switch (category) {
  case 'S':
    h1Title = 'STICKERS';
    break;
  case 'n':
    h1Title = 'NOTEBOOKS';
    break;
  case 'p':
    h1Title = 'PENS';
    break;
  case 'o':
    h1Title = 'OTHERS';
    break;
  default:
    h1Title = 'NEW ARRIVALS';
    break;
}

let h2 = document.querySelector('#pageTitle');
h2.textContent = h1Title;
let url = undefined;
if (category) {
  url = new URL(
    `https://stingray-app-hpvau.ondigitalocean.app/api/products/?category=${category}`
  );
} else {
  url = new URL(`https://stingray-app-hpvau.ondigitalocean.app/api/products/`);
}

let data = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let item of data) {
      let image = document.createElement('img');
      image.src = item.image_1;
      image.alt = item.name + ' image';

      let link = document.createElement('a');
      link.href = `products/product-detail.html?id=${item.id}`;
      link.appendChild(image);

      let itemPic = document.createElement('div');
      itemPic.className = 'item-pic';
      itemPic.appendChild(link);

      let quickViewSection = document.createElement('div');
      quickViewSection.className = 'quick-view-section';

      let button = document.createElement('button');
      button.className = 'quick-view-button';
      button.type = 'button';
      button.textContent = 'Quick View';

      button.addEventListener('click', () => {
        window.location.href = `products/product-detail.html?id=${item.id}`;
      });

      quickViewSection.appendChild(button);

      let itemName = document.createElement('div');
      itemName.className = 'item-name';
      let link2 = document.createElement('a');
      link2.href = `products/product-detail.html?id=${item.id}`;
      link2.textContent = item.name + ' $' + item.price;
      itemName.appendChild(link2);

      let itemSection = document.createElement('div');
      itemSection.className = 'list-section';

      itemSection.appendChild(itemPic);
      itemSection.appendChild(quickViewSection);
      itemSection.appendChild(itemName);

      document.querySelector('.item-section').appendChild(itemSection);
    }
  });
