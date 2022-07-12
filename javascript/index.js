const products = JSON.parse(localStorage.getItem("products"));
const productsEle = document.querySelector(".product-item");
const input = document.querySelector('input[type="search"]');
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const pagination = document.querySelector(".page-number");
let currentPage = 1;
let recordPerPage = 3;

window.onload = () => {
  if (products === null) {
    fetch("./data/baseData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("products", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderUI(products, 1);
};

function convertMoney(num) {
  return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderUI(products, currentPage);
  }
}

function nextPage() {
  if (currentPage < numPages(products)) {
    currentPage++;
    renderUI(products, currentPage);
  }
}

function renderUI(currentProducts, page) {
  if (page < 1) page = 1;
  if (page > numPages(currentProducts)) page = numPages(currentProducts);

  productsEle.innerHTML = "";
  pagination.innerHTML = "";

  if (currentProducts.length !== 0) {
    for (let i = (page - 1) * recordPerPage; i < page * recordPerPage; i++) {
      let product = currentProducts[i];
      if (product !== undefined) {
        productsEle.innerHTML += `
        <tr>
            <td data-label="Id">${product.id}</td>
            <td data-label="Name">${product.name}</td>
            <td data-label="Price">${convertMoney(+product.price)}</td>
            <td data-label="Image"><img src="${product.image}" /></td>
            <td data-label="Action"><a href="/form.html?id=${
              product.id
            }"><button class="btn btn-update">Update</button></a><button class="btn btn-delete" onClick="handleDelete(${
          product.id
        })">Delete</button></td>
        </tr>
        `;
      }
    }
  } else {
    productsEle.innerHTML = `<h2 style="display:flex; justify-content:center;">No item found</h2>`;
  }

  for (let i = 0; i < numPages(currentProducts); i++) {
    pagination.innerHTML += `<a href="#" class="${
      currentPage === i + 1 ? "active" : ""
    }" onClick="handlePage(${i + 1})">${i + 1}</a>`;
  }

  if (page == 1) {
    btnPrev.style = "pointer-events:none; color:grey";
  } else {
    btnPrev.style = "pointer-events:auto; color:black";
  }

  if (page == numPages(currentProducts)) {
    btnNext.style = "pointer-events:none; color:grey";
  } else {
    btnNext.style = "pointer-events:auto; color:black";
  }
}

function numPages(data) {
  return Math.ceil(data.length / recordPerPage);
}

input.oninput = () => {
  let newData = products.filter((item) => {
    let name = item.name.toLowerCase();
    return name.includes(input.value.toLowerCase());
  });
  renderUI(newData, 1);
};

function handleDelete(id) {
  if (confirm("Are you sure you want to delete this!") === true) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    renderUI(products, currentPage);
  }
}

function handlePage(numberOfPage) {
  currentPage = numberOfPage;
  renderUI(products, currentPage);
}
