function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

let cartsEle = document.querySelector(".cart-list");
let countEle = document.querySelector(".badge");

function renderUI(product) {
  cartsEle.innerHTML = "";
  countEle.innerText = `${product.length}`;

  for (let i = 0; i < product.length; i++) {
    const p = product[i];
    cartsEle.innerHTML += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${p.name}</td>
                            <td>${convertMoney(p.price)}</td>
                            <td><button onClick="handelDelete(${
                              p.id
                            })"><i class="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                      `;
  }
}

function handelDelete(id) {
  product = JSON.parse(localStorage.getItem("products") || "[]");
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      product.splice(i, 1);
    }
  }
  countEle.innerHTML = product.length;
  localStorage.setItem("products", JSON.stringify(product));
  renderUI(product);
}

window.onload = function () {
  product = JSON.parse(localStorage.getItem("products") || "[]");
  renderUI(product);
};
