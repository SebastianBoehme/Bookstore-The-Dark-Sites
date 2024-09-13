function bookTemplate (singleBook, i){
    return /*html*/`
         <div class="content_box">
             <div class="book_showcase">
            <img class="cover_images" src="${singleBook.image}" alt="Cover des Buches">
             <div class="book_information">
                 <h2>${singleBook.series} Volume ${singleBook.volume} <br>
                 ${singleBook.name} </h2>
                 <h3>Genre</h3><span>${singleBook.genre}</span>
                 <p>Preis ${singleBook.price}€</p>
                 <b>Geschrieben von ${singleBook.author}</b>
             </div>
             </div>
             <div class="like_section" id="like_section${i}">
                 <img onclick="likeBook(${i})" id="heart_empty_image${i}" class="heart_empty" src="./assets/img/heart_empty.png" alt="Like Button"><p id="like_counter${i}">${singleBook.likes} Likes</p>
             </div>
             <div class="comment_section" id="comment_section${i}">
            </div>
            <div class="add_comment_section">
                <input type="text" name="" class="comment_input" id="comment_input${i}" placeholder="Dein Kommentar.">
                <button onclick="addComment(${i})" id="send_comment${i}">Kommentar abesenden</button>
                </div>
         </div>
     `
 }

 function commentTemplate (comment){
    return /*html*/`
        <div>
            <h4>${comment.name}:</h4>
            <p>${comment.comment}</p>
        </div>
    `}