$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "application/json",
    url: "https://reqres.in/api/users",
    dataType: "json",
    success: function (data) {
      renderListUser(data);
    },
  });
});

const renderListUser = (data) => {
  let listItem = document.querySelector(".list-user-ajax");
  let listUser = data.data;
  for (let i = 0; i < listUser.length; i++) {
    const ele = listUser[i];
    listItem.innerHTML += `
                <li>
                  <div class="card" style="width: 18rem;">
                  <img src="${ele.avatar}" class="card-img-top" alt="${
      ele.avatar
    }">
                  <div class="card-body">
                    <h5 class="card-title">${
                      ele.first_name + " " + ele.last_name
                    }</h5>
                    <p class="card-text">${ele.email}</p>
                    <button type="button" class="btn btn-primary" onClick="handleDetail(${
                      ele.id
                    })" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      See more
                    </button>
                  </div>
                  </div>
                </li>
          `;
  }
};

fetch("https://reqres.in/api/unknown")
  .then((response) => response.json())
  .then((data) => renderListResource(data));

const renderListResource = (data) => {
  let table = document.querySelector(".list-user-fetch");
  let listResource = data.data;
  for (let i = 0; i < listResource.length; i++) {
    const ele = listResource[i];
    table.innerHTML += `
                  <tr>
                    <td>${ele.id}</td>
                    <td>${ele.name}</td>
                    <td>${ele.pantone_value}</td>
                    <td>${ele.year}</td>
                    <td style="display:flex"><div style="width:20px;height:20px;background-color:${ele.color}"></div>${ele.color}</td>
                  </tr>
            `;
  }
};

const handleDetail = async (id) => {
  await fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => renderUserDetail(data));
};

const renderUserDetail = (data) => {
  let item = document.querySelector(".modal-body");
  let listResource = data.data;
  item.innerHTML = `
  <div class="card" style="width: 100%;">
  <img src="${listResource.avatar}" class="card-img-top" alt="${
    listResource.avatar
  }">
  <div class="card-body">
    <h5 class="card-title">${
      listResource.first_name + " " + listResource.last_name
    }</h5>
    <p class="card-text">${listResource.email}</p>
  </div>
  </div>
            `;
};
