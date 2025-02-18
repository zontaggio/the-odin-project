const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien", 
        pages: 295,
        read: true,
        info: function() {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
        }
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        read: false,
        info: function() {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
        }
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = book.info() + '<br>';
        container.appendChild(bookCard);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        const readButton = document.createElement('button');
        readButton.textContent = book.read ? 'Unread' : 'Read';
        readButton.classList.add(book.read ? 'read-button' : 'unread-button');
        readButton.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks();
        });
        
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(removeButton);
        buttonContainer.appendChild(readButton);
        bookCard.appendChild(buttonContainer);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});

document.getElementById("book-form-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;
    
    addBookToLibrary(title, author, pages, read);
    
    e.target.reset();
});