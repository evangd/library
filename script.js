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

// control dialog window
const bookDialog = document.querySelector('dialog');

document.querySelector('#add').addEventListener('click', function() {
    bookDialog.show();
});

document.querySelector('#close').addEventListener('click', function(e) {
    e.preventDefault();
    bookDialog.close();
});

bookDialog.addEventListener('close', function() {
    showBooks();
});

document.querySelector('#addBook').addEventListener('click', function(e) {
    e.preventDefault();
    addBook();
});

function addBook() {
    const vals = document.querySelectorAll('dialog input');
    let read;
    document.querySelector('select').value === 'Yes' ? read = true : read = false;
    const newBook = new Book(vals[0].value, vals[1].value, Number(vals[2].value), read);
    lib.push(newBook);
    vals.forEach(input => {
        input.value = '';
    });
    showBooks();
}

function showBooks() {
    const bookshelf = document.querySelector('#bookshelf');
    bookshelf.innerHTML = '';

    for (let i = 0; i < lib.length; ++i) {
        bookshelf.innerHTML += 
            `<tr><td>${lib[i].title}</td><td>${lib[i].author}</td>
            <td>${lib[i].wordCount}</td><td>${lib[i].read ? 'Yes' : 'No'}</td>
            <td><button class="remove" data-index="${i}">Remove</button></td></tr>`;
    }
    
    document.querySelectorAll('.remove').forEach(removal => {
        removal.addEventListener('click', function(e) {
            lib.splice(e.target.dataset.index, 1);
            showBooks();
        });
    });
}

showBooks();