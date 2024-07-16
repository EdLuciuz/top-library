const container = document.querySelector('#container');
const addCard = document.querySelector('#addCard')
addCard.addEventListener('click', () => {
    popUp.style.display = 'block'
})

const popUp = document.querySelector('#add-book-form')


const form = document.querySelector('#form')

const submit = document.querySelector('#input-submit')
submit.addEventListener('click', () => {
    event.preventDefault();
    popUp.style.display = 'none'

    newbook = new Book(form.title.value, form.author.value, form.pages.value, false)
    library.push(newbook)
    displayCard()
    form.reset()
})

const library = []

//fill form get info
function createForm() {
    popUp.style.display = 'block';
}
//use info to create new object
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

//display
function displayCard() {
    for (let i = 0; i < library.length; i++) {
        let newCard = document.createElement('div')
        newCard.classList.add('card')

        const newTitle  = document.createElement('span')
        newTitle.textContent = library[i].title
        const newAuthor  = document.createElement('span')
        newAuthor.textContent = library[i].author
        const newPages  = document.createElement('span')
        newPages.textContent = library[i].pages
        const newRead  = document.createElement('span')
        newRead.textContent = library[i].status ? "Read" : "Not Read"
    
        newCard.appendChild(newTitle)
        newCard.appendChild(newAuthor)
        newCard.appendChild(newPages)
        newCard.appendChild(newRead)
        container.appendChild(newCard)
    }
}

displayCard()
