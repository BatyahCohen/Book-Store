//function to load books from the dump
function loadData() {
  GbookList = JSON.parse(JSON.stringify(booksList));

  localStorage.setItem("bookList", JSON.stringify(GbookList));

  showData(GbookList);
}

function updateLocalStorage() {
  localStorage.setItem("bookList", JSON.stringify(GbookList));
}

function setBook(id,event) {
  bookToChange = GbookList.find((i) => i.id == id);

  book = buildSetBook(bookToChange.id,event);

  const updatedBook = buildSetBook(id,event);

  if (bookToChange) {
    bookToChange.title = updatedBook.title;
    bookToChange.price = updatedBook.price;
    bookToChange.img = updatedBook.img;
  }

  updateLocalStorage();
  showData(GbookList);
}

function addBook(event) {
  book = buildBook(event);
  GbookList.push(book);

  updateLocalStorage();
  showData(GbookList);
}

function deleteBook(id) {
  GbookList = GbookList.filter((i) => i.id != id);

  updateLocalStorage();
  showData(GbookList);

  if(document.getElementById("rate").classList.contains("show"))
   {
    console.log("rate book removed")
     document.getElementById("rate").classList.remove("show")
   }

  if(document.getElementById("set").classList.contains("show"))
    document.getElementById("set").classList.remove("show")
}

function getBook(id) {
  return GbookList.find((i) => i.id === id);
}

function buildBook(event) {
  form=event.target
  return {
    id: GbookList[GbookList.length - 1].id + 1,
    title: form.formTitle.value,
    price: form.formPrice.value,
    img: form.formImg.value,
    rate: 0,
  };
}

function buildSetBook(id,event) {
  form=event.target
  return {
    id: id,
    title: form.setTitle.value,
    price: form.setPrice.value,
    img: form.setImgText.value,
    rate: 0,
  };
}

function rateBook(id) {
  bookToChange = GbookList.find((i) => i.id == id);
  
  bookToChange.rate = document.querySelector(".star-rating input:checked").value

  updateLocalStorage();
  showData(GbookList);
}

function sort(type) {
  if (type == "title") {
    GbookList.sort((a, b) => a.title.localeCompare(b.title));
  } else if (type == "price") {
    GbookList.sort((a, b) => a.price - b.price);
  }

  showData(GbookList);
}

function changeLanguage() {
  const selectedLanguage = document.getElementById("languageSelect").value;

  language = selectedLanguage == "en" ? 0 : 1;

  change();
}

function saveRate(id){
  document.querySelector(".star-rating input:checked").value = id;
}

