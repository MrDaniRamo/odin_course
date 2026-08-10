const myLibraray = []

function Book(title, author, pages, isread, bookid) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
    this.bookid = bookid;
    this.info = function() {
        console.log(this.title, "by", this.author + ",", this.pages, "pages,", "ID:", this.bookid, this.isread);
    };
}

function addBookToLibrary(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
    myLibraray.push(new Book(title, author, pages, isread, crypto.randomUUID()));
}

function displayLibrary(myLibraray){
    for (let i = 0; i < myLibraray.length(); i++){
        
    }
}