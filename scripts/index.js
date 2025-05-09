let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems')
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayitemsOnSecondPage();
  displayBagIcon();
}


function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag_count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  }else {
    bagItemCountElement.style.visibility = 'hidden';
  } 
}

function displayitemsOnSecondPage() {
  let itemsContainerElement = document.querySelector(".items_container");
  if (!itemsContainerElement) {
    return;
  }

  let innerHTML = '';

  items.forEach(item => {
    innerHTML += 
    `<div class="item_container">
      <img class="item_image" src="${item.image}" alt="item image">
      <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}k
      </div>
      <div class="company">${item.company}</div>
      <div class="item_name">${item.item_name}</div>
      <div class="price">
        <span class="current_price">${item.current_price}</span>
        <span class="original_price">${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHTML;
}


