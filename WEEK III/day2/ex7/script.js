const allBooks = [
    {
        title: "HarryPotter",
        author: "JKRowling",
        image: "https://via.placeholder.com/100",
        alreadyRead: true
    },
    {
        title: "Lord of the Rings",
        author: "JRR Tolkien",
        image: "https://via.placeholder.com/100",
        alreadyRead: false
    }
];

const bookListSection = document.querySelector('.listBooks');

allBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = `${book.title} written by ${book.author}`;
    
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = "100px";

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookImage);

    if (book.alreadyRead) {
        bookDiv.classList.add('red');
    }

    bookListSection.appendChild(bookDiv);
});
