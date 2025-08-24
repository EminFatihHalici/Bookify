function init() {
    renderImages();
}

function renderImages() {

    let contentImg = document.getElementById('content');
    for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
        contentImg.innerHTML += getNotesHTML(booksIndex);
    }
}

function getCommentsTemplate(bookIndex) {
    let commentsHTML = "";
    let comments = books[bookIndex].comments;

    for (let i = 0; i < comments.length; i++) {
        commentsHTML += `
            <div class="single_comment">
                <p>${comments[i].name}: ${comments[i].comment}</p>
            </div>
        `;
    }

    if (comments.length === 0) {
        commentsHTML = "<p>No comments.</p>";
    }

    return commentsHTML;
}

function addComment(bookIndex) {
    let input = document.getElementById(`commentInput_${bookIndex}`);
    let text = input.value.trim();

    if (text === "") {
        alert("Write something");
        return;
    }

    books[bookIndex].comments.push({
        name: "You", 
        comment: text
    });

    document.getElementById(`comments_${bookIndex}`).innerHTML = getCommentsTemplate(bookIndex);

    input.value = "";
}