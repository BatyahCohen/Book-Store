function showData(data) {
  container = document.getElementsByClassName("products-container")[0];
  dataToShow = `          <div class="product-card-title">
            <div>id</div>
            <div onclick="sort('title')">title🔺</div>
            <div onclick="sort('price')">price🔺</div>
            <div>action</div>
          </div>`;

  data.map((book) => {
    dataToShow += `
          <div class="product-card">
            <div>${book.id}</div>
            <div onclick="showRateBook(${book.id})" class="book-title">${book.title}</div>
            <div>price: ${book.price}</div>
            <div>rate: ${book.rate}</div>
            <button onclick="showSetBook(${book.id})">update</button>
            <button onclick="deleteBook(${book.id})">🗑️</button>
          </div>
        `;
  });

  dataToShow += `          <div class="navigation">
            <button>back</button>
            <div class="page-container"></div>
            <button>next</button>
          </div>`;

  container.innerHTML = dataToShow;
}

function showRateBook(id) {
  showRate = document.getElementsByClassName("rate")[0];
  showRate.classList.add("show");

  book = GbookList.find((i) => i.id === id);

  document.getElementById("rateTitle").innerText = book.title;
  document.getElementById("ratePrice").innerText = book.price;
  document.getElementById("rateImg").src = book.img;
  document.getElementById("rateRate").value = book.rate;
}

function hideRateBook(id) {
  showRate = document.getElementsByClassName("rate")[0];
  showRate.classList.remove("show");

  rateBook(id);
}

function showSetBook(id) {
  showRate = document.getElementsByClassName("set")[0];
  showRate.classList.add("show");

  book = GbookList.find((i) => i.id === id);

  document.getElementById("setId").innerText = book.id;
  document.getElementById("setTitle").value = book.title;
  document.getElementById("setPrice").value = book.price;
  document.getElementById("setImg").src = book.img;
  document.getElementById("setImgText").value = book.img;

}

function hideSetBook(event, id) {
  event.preventDefault();

  showRate = document.getElementsByClassName("set")[0];
  showRate.classList.remove("show");

  setBook(document.getElementById("setId").innerText);
}

function showAddBook() {
  showRate = document.getElementsByClassName("form")[0];
  showRate.classList.add("show");
}

function hideAddBook(event) {
  event.preventDefault();

  showRate = document.getElementsByClassName("form")[0];
  showRate.classList.remove("show");

  addBook();
}
