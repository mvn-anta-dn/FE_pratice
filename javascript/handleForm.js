const products = JSON.parse(localStorage.getItem("products"));
const form = document.querySelector("form");
const upload = document.querySelector(".upload");
const getImage = document.querySelector("#image");
const iid = document.querySelector("#id");
const pageTitle = document.querySelector(".page-title");
const previewImage = document.querySelector("#preview-image");

let image = "";
previewImage.style = "display:none";

function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let id = params.id;

pageTitle.innerHTML = "Create product";

if (id) {
  pageTitle.innerHTML = "Update product";
  const name = document.querySelector("#name");
  const price = document.querySelector("#price");
  const amount = document.querySelector("#amount");
  const type = document.querySelector("#type");
  const description = document.querySelector("#description");
  products.forEach((item) => {
    if (item.id == id) {
      iid.value = item.id;
      name.value = item.name;
      price.value = item.price;
      previewImage.style = "display:block";
      previewImage.setAttribute("src", item.image);
      amount.value = item.amount;
      type.value = item.type;
      description.value = item.description;
    }
  });
}

upload.addEventListener("change", () => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    image = reader.result;
    previewImage.style = "display:block";
    previewImage.setAttribute("src", reader.result);
  });

  reader.readAsDataURL(upload.files[0]);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {
    ...Object.fromEntries(new FormData(e.target).entries()),
    image,
  };

  let flag = false;

  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    if (item.id == data.id) {
      flag = true;
      break;
    }
  }

  if (id) {
    let objIndex = products.findIndex((item) => item.id == id);
    products[objIndex].name = data.name;
    products[objIndex].price = data.price;
    if (getImage.value) {
      products[objIndex].image = data.image;
    }
    products[objIndex].amount = data.amount;
    products[objIndex].type = data.type;
    products[objIndex].description = data.description;
    localStorage.setItem("products", JSON.stringify(products));
    alert("Update success!");
    window.location = "/index.html";
  } else {
    if (!flag) {
      let newData = { ...data, id: +products[products.length - 1].id + 1 };
      products.push(newData);
      localStorage.setItem("products", JSON.stringify(products));
      alert("Create success!");
      window.location = "/index.html";
    } else {
      alert("Id already exists!");
    }
  }
});
