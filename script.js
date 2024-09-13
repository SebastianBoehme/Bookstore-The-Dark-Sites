function init() {
  renderContent();
}

function renderContent() {
  let contentRef = document.getElementById("content_section");
  contentRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const singleBook = books[i];

    contentRef.innerHTML += bookTemplate(singleBook, i);
    renderLikedBook(i)

    for (let j = 0; j < books[i].comments.length; j++) {
      const singleBook = books[i];
      renderComments(singleBook.comments[j], i);
    }
  }
}

function renderComments(comment, i) {
  let commentRef = document.getElementById(`comment_section${i}`);

  commentRef.innerHTML += commentTemplate(comment);
}

function likeBook(i) {
  if (books[i].liked) {
    books[i].liked = false;
    document.getElementById(`like_counter${[i]}`).innerHTML = `${(books[i].likes -= 1)} Likes`;
    document.getElementById(`heart_empty_image${[i]}`).setAttribute("src", "./assets/img/heart_empty.png");
  } else {
    books[i].liked = true;
    document.getElementById(`like_counter${[i]}`).innerHTML = `${(books[i].likes += 1)} Likes`;
    document.getElementById(`heart_empty_image${[i]}`).setAttribute("src", "./assets/img/heart_full.png");
  }
}

function renderLikedBook(i) {
    if (books[i].liked) {
      document.getElementById(`like_counter${[i]}`).innerHTML = `${(books[i].likes)} Likes`;
      document.getElementById(`heart_empty_image${[i]}`).setAttribute("src", "./assets/img/heart_full.png");
    } else {
      document.getElementById(`like_counter${[i]}`).innerHTML = `${(books[i].likes)} Likes`;
      document.getElementById(`heart_empty_image${[i]}`).setAttribute("src", "./assets/img/heart_empty.png");
    }
  }

function addComment(i) {
  let commentInputRef = document.getElementById("comment_input" + i);
  let commentInput = commentInputRef.value;
  const commentText = commentInput.trim();
  const newComment = {
    name: "Dein Kommentar",
    comment: commentText,
  };

  if (commentInput == "") {
    alert(
      "Du musst einen Kommentar schreiben, um einen Kommentar absenden zu können"
    );
    return;
  } else {
    books[i].comments.push(newComment);

    commentInputRef.value = "";

    renderComments(newComment, i);
  }
}
