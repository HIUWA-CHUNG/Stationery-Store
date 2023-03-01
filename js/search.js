let params = new URL(document.location).searchParams;
let search = params.get('search');

console.log(search);

let h2 = document.querySelector('#pageTitle');
if (search === '') {
  h2.textContent = 'Search Resutls for All Items';
} else {
  h2.textContent = 'Search Resutls for: ' + search;
}

let url = new URL(
  `https://stingray-app-hpvau.ondigitalocean.app/api/products/?search=${search}`
);

let data = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
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

        quickViewSection.appendChild(button);

        let itemName = document.createElement('div');
        itemName.className = 'item-name';
        let link2 = document.createElement('a');
        link2.href = 'products/product-detail.html?id=${item.id}';
        link2.textContent = item.name + ' $' + item.price;
        itemName.appendChild(link2);

        let itemSection = document.createElement('div');
        itemSection.className = 'list-section';

        itemSection.appendChild(itemPic);
        itemSection.appendChild(quickViewSection);
        itemSection.appendChild(itemName);

        document.querySelector('.item-section').appendChild(itemSection);
      }
    } else {
      let errorMessage = document.createElement('h1');
      errorMessage.textContent = 'No items were found';
      document.querySelector('.item-section').appendChild(errorMessage);
    }
  });
