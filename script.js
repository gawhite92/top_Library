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
    console.log(`Library contents:`)
    console.table(myLibrary);
}

function displayBooks() {
    myLibrary.forEach(function (book) {
        console.log(book);
    })
}