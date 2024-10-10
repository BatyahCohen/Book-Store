function showData(data) {
  container = document.getElementsByClassName("products-container")[0];
  dataToShow = `          <div class="product-card-title">
            <div>id</div>
            <div onclick="sort('title')">title🔺</div>
            <div onclick="sort('price')">price🔺</div>
            <div>action</div>
          </div>`;

  dataToShow += showByPage(Gpage);

  navigationButtons=getNavigationButtons()

  dataToShow += `          <div class="navigation">
            <button onclick="changePage(--Gpage)">back</button>
            <div class="page-container">${navigationButtons}</div>
            <button onclick="changePage(++Gpage)">next</button>
          </div>`;

  container.innerHTML = dataToShow;
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
          <div>price: ${GbookList[i + move].price}</div>
          <div>rate: ${GbookList[i + move].rate}</div>
          <button onclick="showSetBook(${
            GbookList[i + move].id
          })">update</button>
          <button onclick="deleteBook(${GbookList[i + move].id})">🗑️</button>
        </div>
      `;
    }
  }
  return dataToShow;
}

function showRateBook(id) {
  showRate = document.getElementsByClassName("rate")[0];
  showRate.classList.add("show");

  book = GbookList.find((i) => i.id === id);

  document.getElementById("rateId").innerText = book.id;
  document.getElementById("rateTitle").innerText = book.title;
  document.getElementById("ratePrice").innerText = book.price;
  document.getElementById("rateImg").src = book.img;
  document.getElementById("rateRate").value = book.rate;
}

function hideRateBook(event) {
    event.preventDefault();

  showRate = document.getElementsByClassName("rate")[0];
  showRate.classList.remove("show");

  rateBook(document.getElementById("rateId").innerText);
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

function getNavigationButtons(){
    let buttons = ``;
    for(let i=1; i<=Math.ceil(GbookList.length/5); i++){
        buttons += `<button onclick="changePage(${i})">${i}</button>`
    }
    return buttons;
}

function changePage(page){
    if(page<0 || page>Math.ceil(GbookList.length/5))
        return
    Gpage = page;
    showData(GbookList);
}
