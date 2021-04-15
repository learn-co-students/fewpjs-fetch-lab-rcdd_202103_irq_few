
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch('https://anapioficeandfire.com/api/books')
  .then(resp =>  resp.json())
  .then((r)=>{
    // console.log(r)
    renderBooks(r)
  });

}

function renderBooks(books) {

  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name+ 'hi';
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

});
