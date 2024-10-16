function showData(data) {
  container = document.getElementsByClassName("products-container")[0];
  dataToShow = `          <div class="product-card-title">
            <div id="title-id">id</div>
            <div id="title-title" onclick="sort('title')">title🔺</div>
            <div id="title-price" onclick="sort('price')">price🔺</div>
            <div id="title-rating">rating</div>
          </div>`;

  dataToShow += showByPage(Gpage);

  navigationButtons = getNavigationButtons();

  dataToShow += `          <div class="navigation">
            <button id="back-button" onclick="changePage(--Gpage)">back</button>
            <div class="page-container">${navigationButtons}</div>
            <button id="next-button" onclick="changePage(++Gpage)">next</button>
          </div>`;

  container.innerHTML = dataToShow;
  changeLanguage();
}

function showByPage(page) {
  let move = (page - 1) * 5;
  dataToShow = ``;
  for (let i = 0; i < 5; i++) {
    if (GbookList[i + move]) {
      dataToShow += `
        <div class="product-card">
          <div>${GbookList[i + move].id}</div>
          <div onclick="showRateBook(${
            GbookList[i + move].id
          })" class="book-title">${GbookList[i + move].title}</div>
          <div>${GbookList[i + move].price}</div>
          <div class="star-container">  ${addStars(GbookList[i + move].rate)}</div>
          <div class="update-button" onclick="showSetBook(${
            GbookList[i + move].id
          })">update</div>
          <div class="delete-button" onclick="deleteBook(${
            GbookList[i + move].id
          })">🗑️</div>
        </div>
      `;
    }
  }
  return dataToShow;
}

function showRateBook(id) {
  showRate = document.getElementsByClassName("rate")[0];
  showRate.classList.add("show");

  productContainer = document.getElementsByClassName("products-container")[0];
  productContainer.classList.add("products-container-rate");

  book = GbookList.find((i) => i.id === id);

  document.getElementById("rateId").value = book.id;
  document.getElementById("rateTitle").innerText = book.title;
  document.getElementById("ratePrice").innerText = book.price;
  document.getElementById("rateImg").src = book.img;

  highlightRating(book.rate);
}

function hideRateBook(event) {
  event.preventDefault();

  showRate = document.getElementsByClassName("rate")[0];
  showRate.classList.remove("show");

  productContainer = document.getElementsByClassName("products-container")[0];
  productContainer.classList.remove("products-container-rate");

  rateBook(document.getElementById("rateId").value);
}

function showSetBook(id) {
  showRate = document.getElementsByClassName("set")[0];
  showRate.classList.add("show");

  book = GbookList.find((i) => i.id === id);

  document.getElementById("set-id").value = book.id;
  document.getElementById("setTitle").value = book.title;
  document.getElementById("setPrice").value = book.price;
  document.getElementById("setImg").src = book.img;
  document.getElementById("setImgText").value = book.img;
}

function hideSetBook(event, id) {
  event.preventDefault();

  showRate = document.getElementsByClassName("set")[0];
  showRate.classList.remove("show");

  setBook(document.getElementById("set-id").value,event);
}

function showAddBook() {
  showRate = document.getElementsByClassName("form")[0];
  showRate.classList.add("show");
}

function hideAddBook(event) {
  event.preventDefault();

  showRate = document.getElementsByClassName("form")[0];
  showRate.classList.remove("show");

  addBook(event);
}

function getNavigationButtons() {
  let buttons = ``;
  for (let i = 1; i <= Math.ceil(GbookList.length / 5); i++) {
    buttons += `<button onclick="changePage(${i})">${i}</button>`;
  }
  return buttons;
}

function addStars(rate){
  let stars=``
  for (let i = 0; i <rate; i++) {
    stars += `<div>★</div>`;
  }
  return stars;
}

function changePage(page) {
  if (page < 1 || page > Math.ceil(GbookList.length / 5)) return;
  Gpage = page;
  showData(GbookList);
}

function highlightRating(rating) {
  for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`star${i}`);
      if (i <= rating) {
          star.checked = true; 
      } else {
          star.checked = false;
      }
  }
}

function change() {
  document.getElementById("title-id").innerText =
    translationMatrix[language][0];
  document.getElementById("title-title").innerText =
    translationMatrix[language][1];
  document.getElementById("title-price").innerText =
    translationMatrix[language][2];
  document.getElementById("title-rating").innerText =
    translationMatrix[language][3];

  document.getElementById("back-button").innerText =
    translationMatrix[language][4];
  document.getElementById("next-button").innerText =
    translationMatrix[language][5];

  document.getElementById("new-book").innerText =
    translationMatrix[language][6];
  document.getElementById("load-data").innerText =
    translationMatrix[language][7];

  updateButtons = document.getElementsByClassName("update-button");
  Array.from(updateButtons).forEach((b) => {
    b.innerText = translationMatrix[language][8];
  });

  document.getElementById("add-book").innerText =
    translationMatrix[language][15];
  document.getElementById("form-book-title").innerText =
    translationMatrix[language][9];
  document.getElementById("form-book-price").innerText =
    translationMatrix[language][10];
  document.getElementById("form-book-img").innerText =
    translationMatrix[language][11];
  document.getElementById("form-book-submit").innerText =
    translationMatrix[language][12];

  document.getElementById("rateTitle").innerText =
    translationMatrix[language][9];
  document.getElementById("rate-price").innerText =
    translationMatrix[language][10];

  document.getElementById("set-title").innerText =
    translationMatrix[language][9];
  document.getElementById("set-price").innerText =
    translationMatrix[language][10];
  document.getElementById("set-img").innerText =
    translationMatrix[language][11];
  document.getElementById("set-update").innerText =
    translationMatrix[language][8];
}


