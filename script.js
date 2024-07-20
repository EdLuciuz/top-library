const bookContainer = document.querySelector('#bookContainer')
const addBook = document.querySelector('#addBook')

const popUp = document.querySelector('#popup-form')
const blackTitnt = document.querySelector('.black-tint')

const submitBtn = document.querySelector('#submit')
const form = document.querySelector('#form')

addBook.addEventListener('click', () => {
    popUp.style.display = 'block'
    blackTitnt.style.display = 'block'
})

submitBtn.addEventListener('click', () => {
    event.preventDefault();
    popUp.style.display = 'none'
    blackTitnt.style.display = 'none'

    book = new createBook(form.title.value, form.author.value, form.pages.value, form.status.checked)
    library.push(book)
    clear()
    display()
    form.reset()
})

const library = []

function createBook(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function display() {
    for (let i = 0; i < library.length; i++) {
        let closeCard = document.createElement('i')
        closeCard.classList.add('fa-solid')
        closeCard.classList.add('fa-xmark')
        closeCard.classList.add('close-btn')

        closeCard.addEventListener('click', () => {
            library.splice(i, 1)
            clear()
            display()
        })

        let newBookCard = document.createElement('div')
        newBookCard.classList.add('bookCard')

        const newTitle  = document.createElement('p')
        newTitle.textContent = library[i].title
        newTitle.classList.add('cardTitle')

        const newAuthor  = document.createElement('p')
        newAuthor.textContent = `by ${library[i].author}`
        newAuthor.classList.add('cardAuthor')

        const newPages  = document.createElement('p')
        newPages.textContent = `${library[i].pages} pages`
        newPages.classList.add('cardPages')

        const newRead  = document.createElement('button')
        newRead.textContent = library[i].status ? "Read" : "Not Read"
        newRead.classList.add('cardStatus')
        
        if (library[i].status) {
            newRead.classList.add('read')
        }
        else {
            newRead.classList.add('not-read')
        }

        newRead.addEventListener('click', () => {
            library[i].status = !library[i].status
            newRead.textContent = library[i].status ? "Read" : "Not Read"
            if (library[i].status) {
                newRead.classList.replace('not-read', 'read')
            }
            else {
                newRead.classList.replace('read', 'not-read')
            }
        })

        newBookCard.appendChild(closeCard)
        newBookCard.appendChild(newTitle)
        newBookCard.appendChild(newAuthor)
        newBookCard.appendChild(newPages)
        newBookCard.appendChild(newRead)
        bookContainer.appendChild(newBookCard)
    }
}

function clear() {
    const bookCardList = document.querySelectorAll('.bookCard')

    for (let i = 0; i < bookCardList.length; i++) {
        bookCardList[i].remove()
    }
}

book = new createBook('One Piece Vol. 1', 'Eiichiro Oda', 216, true)
    library.push(book)
    clear()
    display()
    form.reset()