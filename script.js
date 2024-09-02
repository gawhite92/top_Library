const myLibrary = [
    { id: 0, title: 'The Lord Of The Rings', author: 'J R R Tolkien', pages: 1216, read: true },
    { id: 1, title: 'The Shining', author: 'Stephen King', pages: 688, read: false },
    { id: 2, title: 'It', author: 'Stephen King', pages: 1184, read: false },
    { id: 3, title: 'Atomic Habits', author: 'James Clear', pages: 320, read: true },
    { id: 4, title: 'It Ends With Us', author: 'Colleen Hoover', pages: 384, read: true },
    { id: 5, title: 'Recipe Tin Eats - Dinner', author: 'Nagi Maehashi', pages: 376, read: false },
    { id: 6, title: 'The Book Of Bill', author: 'Alex Hirsch', pages: 208, read: false }
];

//console.log(myLibrary[1])

class Book {
    constructor(title,author,pages,read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

function showNewBookForm() {
    const formContainer = document.getElementById("formContainer");

    if (formContainer.hasChildNodes()) {  //Removes form if already opened
        console.log('Removing form')
        while (formContainer.lastElementChild) {
            formContainer.removeChild(formContainer.lastElementChild);
        }
        return
    }

    const form = document.createElement("form");
    form.setAttribute("id", "form");
    // form.setAttribute("action", "");

    const newBookHeading = document.createElement("p");
    newBookHeading.textContent = "New book details:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.setAttribute("required", "");

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("placeholder", "Author");
    authorInput.setAttribute("required", "");

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("id", "pages");
    pagesInput.setAttribute("placeholder", "Pages");
    pagesInput.setAttribute("required", "");

    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.setAttribute("id", "checkboxcontainer");


    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "read");
    checkboxLabel.textContent = "Read";

    const readInput = document.createElement("input");
    readInput.setAttribute("type", "checkbox");
    readInput.setAttribute("id", "read");
    readInput.setAttribute("placeholder", "Read");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("onclick", "addBookToLibrary()");

    formContainer.appendChild(form);
    
    form.appendChild(newBookHeading);
    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(pagesInput);
    form.appendChild(checkBoxContainer);
    checkBoxContainer.appendChild(checkboxLabel);
    checkBoxContainer.appendChild(readInput);
    form.appendChild(submitButton);
}


function addBookToLibrary() {
    console.log('Tried to add book to library');
    
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    if (title.value == '' || author.value == '' || pages.value == ''){
        console.log('Insufficient information')
        return
    }

    const newBook = new Book(title.value, author.value, pages.value, read.checked); // uses constructor to create book
    myLibrary.push(newBook); // adds new book to library
    createDisplayCard();
    console.log(`Library contents:`)
    console.table(myLibrary);

    if (cardContainer.hasChildNodes()) {
        reset();
        displayAllBooksInLibrary();
        return
    }
}

function displayBooks() {
    myLibrary.forEach(function (book) {
        console.log(book);
    })
}

function displayAllBooksInLibrary() {  
    const cardContainer = document.getElementById("cardContainer");
    
    if (cardContainer.hasChildNodes()) { //If cards are already present, removes library.
        reset();
        return
    }

    myLibrary.forEach(function (book) {
        title = book.title;
        author = book.author;
        pages = book.pages;
        read = book.read;
        createDisplayCard()
    })
}

function reset() {
    console.log('Removing library')
    
    while (cardContainer.lastElementChild) {
        cardContainer.removeChild(cardContainer.lastElementChild);
    }
}

function createDisplayCard() {
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardPhoto = document.createElement("img")
    cardPhoto.src = `./images/${title}.jpg`;
    cardPhoto.classList.add("cardPhoto");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    cardTitle.textContent = `${title}`;

    const cardAuthor = document.createElement("p");
    cardAuthor.classList.add("cardAuthor");
    cardAuthor.textContent = `${author}`;

    const cardPages = document.createElement("p");
    cardPages.classList.add("cardPages");
    cardPages.textContent = `${pages} pages`;

    const cardReadButton = document.createElement("button");
    cardReadButton.classList.add("cardReadButton");
    cardReadButton.textContent = "Read";
    if(read==true){
        cardReadButton.classList.add("read");
    }

    const cardRemoveButton = document.createElement("button");
    cardRemoveButton.classList.add("cardRemoveButton");
    cardRemoveButton.textContent = "X";

    cardContainer.appendChild(card);
    card.appendChild(cardPhoto);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardReadButton);
    card.appendChild(cardRemoveButton);

    cardRemoveButton.addEventListener('click', function (e) {

        const target = e.target;
        const parent = target.parentNode;
        const parentParent = parent.parentNode;
        const index = [].indexOf.call(parentParent.children, parent);

        myLibrary.splice(index, 1);
        
        console.log('Refreshing library')
        reset();
        displayAllBooksInLibrary();
    })

    cardReadButton.addEventListener('click', function (e) {

        const target = e.target;
        const parent = target.parentNode;
        const parentParent = parent.parentNode;
        const index = [].indexOf.call(parentParent.children, parent);

        myLibrary[index].read = myLibrary[index].read == true ? false : true;
        console.log(myLibrary[index]);
        
        console.log('Refreshing library')
        reset();
        displayAllBooksInLibrary();
    })
}


function homeButton() {
    reset();
}