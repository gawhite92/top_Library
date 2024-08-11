const myLibrary = [
    { title: 'The Lord Of The Rings', author: 'J R R Tolkien', pages: 1216, read: 'Read' },
    { title: 'The Shining', author: 'Stephen King', pages: 688, read: 'Unread' },
    { title: 'It', author: 'Stephen King', pages: 1184, read: 'Unread' },
    { title: 'A Game of Thrones', author: 'George R. R. Martin', pages: 912, read: 'Read' }
];

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addBookToLibrary() {
    title = prompt('Title?');
    author = prompt('Author?');
    pages = Number(prompt('Pages?'));
    read = prompt('Read? y/n');
    if (read[0].toLowerCase() === 'y') {  // Really only verifies whether the first letter is y or not
        read = 'Read';
    } else {
        read = 'Unread';
    }
    const newBook = new Book(title, author, pages, read); // uses constructor to create book
    myLibrary.push(newBook); // adds new book to library
    createDisplayCard();
    console.log(`Library contents:`)
    console.table(myLibrary);

}

function displayBooks() {
    myLibrary.forEach(function (book) {
        console.log(book);
    })
}

function displayAllBooksInLibrary() {
    myLibrary.forEach(function (book) {
        title = book.title;
        author = book.author;
        pages = book.pages;
        read = book.read;
        createDisplayCard()
    })
}

function reset() {
    const cardContainer = document.querySelector(".cardContainer");
    const card = document.querySelector(".card");
    while (cardContainer.lastElementChild) {
        cardContainer.removeChild(cardContainer.lastElementChild);
    }
}

    function createDisplayCard() {
        const cardContainer = document.querySelector(".cardContainer");

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
        cardPages.textContent = `${pages}`;

        const cardReadButton = document.createElement("button");
        cardReadButton.classList.add("cardReadButton");
        cardReadButton.textContent = "Read";

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
    }
