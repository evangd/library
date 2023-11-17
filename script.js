const testBook1 = {
    title: 'The Count of Monte Cristo',
    author: 'Alexander Dumas',
    wordCount: 464162,
    read: true
};

const testBook2 = {
    title: 'Demon Copperhead',
    author: 'Barbara Kingsolver',
    wordCount: 0,
    read: true
};

const lib = [testBook1, testBook2];

function Book(title, author, wordCount, read) {
    this.title = title;
    this.author = author;
    this.wordCount = wordCount;
    this.read = read;
}

function addBook() {

}

function showBooks() {
    const bookshelf = document.querySelector('#bookshelf');

    for (const book of lib) {
        bookshelf.innerHTML += 
            `<tr><td>${book.title}</td><td>${book.author}</td>
            <td>${book.wordCount}</td><td>${book.read ? 'Yes' : 'No'}</td></tr>`;
    }
}

showBooks();