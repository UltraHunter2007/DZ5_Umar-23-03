//DZ1
function filterBooks(...books) {
    const booksWithU = []
    const otherBooks = []

    for (let i = 0; i < books.length; i++) {
        const bookTitle = books[i]
        if (bookTitle.includes('у')) {
            booksWithU.push(bookTitle)
        } else {
            otherBooks.push(bookTitle)
        }
    }

    console.log('Книги с буквой "у":')
    console.log(booksWithU)

    console.log('Остальные книги:')
    console.log(otherBooks)
}

const books = []
let book

while (book !== null) {
    book = prompt('Введите название книги:')
    if (book !== null) {
        books.push(book)
    }
}

filterBooks(...books)

//DZ2
function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
const user = prompt('Введите строку')
console.log(reverseString(user))
