function getNotesHTML(booksIndex) {
    let book = books[booksIndex];

    return `
  <div class="book_title">
                <h2>${book.name}</h2>
            </div>

            <div class="book_container"><img src="./assets/book_logo.png" alt="Buch"></div>

            <div class="price_like_section">
                <div class="price">
                    <p>${book.price}€</p>
                </div>
                <div class="like_section">
                        <p>${book.likes}</p>
                    <div class="like_button">
                          <input type="checkbox" id="heart">
                        <label for="heart">&#9829</label>
                    </div>
                </div>
            </div>

            <div class="book_info">
                <p>Autor: ${book.author}</p>
                <p>Erscheinungsjahr: ${book.publishedYear}</p>
                <p>Genre: ${book.genre}</p>
            </div>

            <div class="comments_section">
                <h3>Kommentare:</h3>

                <div class="comment_box">
                    <div id="comments_${booksIndex}" class="comments">
                     ${getCommentsTemplate(booksIndex)}
                    </div>
                     <div class="button_text">
                      <textarea id="commentInput_${booksIndex}" placeholder="Add comment..."></textarea>
                      <button onclick="addComment(${booksIndex})">Send</button>
                      </div>
                </div>
            </div> 
    `
}