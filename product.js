function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

let products = [
  {
    id: 1,
    name: "Apple Pencil (2nd Generation), White",
    price: 250000,
    image:
      "	https://flone.reactdemo.hasthemes.com/assets/img/product/furnitures/2.jpg",
  },
  {
    id: 2,
    name: "HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A)",
    price: 350000,
    image:
      "https://flone.reactdemo.hasthemes.com/assets/img/product/furnitures/5.jpg",
  },
  {
    id: 3,
    name: "Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
    price: 250000,
    image:
      "	https://flone.reactdemo.hasthemes.com/assets/img/product/furnitures/4.jpg",
  },
  {
    id: 4,
    name: "Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV",
    price: 350000,
    image:
      "https://flone.reactdemo.hasthemes.com/assets/img/product/furnitures/1.jpg",
  },
  {
    id: 5,
    name: "Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote",
    price: 250000,
    image:
      "https://flone.reactdemo.hasthemes.com/assets/img/product/furnitures/3.jpg",
  },
  {
    id: 6,
    name: "SanDisk 128GB Ultra microSDXC UHS-I Memory Card with Adapter ",
    price: 350000,
    image:
      "https://flone.reactdemo.hasthemes.com/assets/img/product/furnitures/8.jpg",
  },
];

let productsEle = document.querySelector(".product-list");
let countEle = document.querySelector(".badge");

function renderUI(arr) {
  productsEle.innerHTML = "";

  product = JSON.parse(localStorage.getItem("products") || "[]");

  countEle.innerText = `${product.length}`;

  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    productsEle.innerHTML += `
                <li class="product-item">
                <div class="product-image">
                <img src="${p.image}" alt="img">
                <div class="product-tag">
                    <p>-10%</p>
                    <p>New</p>
                </div>
                </div>
                <div class="product-title">
                <p>${p.name}</p>
                <div class="product-text">
                    <p>${convertMoney(p.price)}</p>
                    <button><i class="fa-solid fa-cart-plus" onclick="addToCart(${
                      p.id
                    })"></i></button>
                </div>
                
                </div>
            </li>
          `;
  }
}

function addToCart(id) {
  product = JSON.parse(localStorage.getItem("products") || "[]");
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      const index = product.findIndex((object) => object.id === products[i].id);
      if (index === -1) {
        product.push(products[i]);
      }
    }
  }
  countEle.innerHTML = product.length;
  localStorage.setItem("products", JSON.stringify(product));
}

window.onload = renderUI(products);
