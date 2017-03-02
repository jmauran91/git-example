let inventory = [
  ['LA-LG-STICKER', 300, 'Large Sticker', 'images/la-large-sticker-256px.png', 'Show your Launch pride by plastering your laptop with these beautiful die-cut stickers.'],
  ['LA-SM-STICKER', 200, 'Small Sticker', 'images/la-small-sticker-128px.png', 'It\'s a tiny Launch sticker. How cute!'],
  ['LA-T-SHRIT', 50, 'T-Shirt', 'images/la-t-shirt-200px.png', '100% Cotton. Makes a great gift.']
]

// your code, here

class Product  {
  constructor (id, quantity, name, image, desc){
    this.id = id;
    this.quantity = quantity;
    this.name = name;
    this.image = image;
    this.desc = desc;
  }
  sell(){
    quantity -= 1;
  }
  toHTML(){
    let htmlPrinter = `<div class='product'>
            <h1>Product Name: ${this.name}</h1>
            <h5>${this.quantity} In Stock</h5>
            <img src=${this.image} />

            <h3>Description</h3>
            <p>${this.desc}</p>
          </div>`;
    return htmlPrinter;
  }
}
let lgSticker = inventory[0];
let smSticker = inventory [1];
let lgShirt = inventory [2];

let lgStickerObject = new Product(...lgSticker);
let smStickerObject = new Product(...smSticker);
let lgShirtObject = new Product(...lgShirt);
let productObjects = [lgStickerObject, smStickerObject, lgShirtObject];

let ecommPrint = document.getElementById('all-products');
productObjects.forEach((object) => {
  ecommPrint.innerHTML += object.toHTML();
})
