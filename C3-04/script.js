const likeButton = document.querySelector('.like-button-js');

likeButton.addEventListener('click',()=>{
    if(likeButton.classList.contains('liked')){
        likeButton.classList.remove('liked');
        likeButton.textContent = '👍 いいね';
    }else{
        likeButton.classList.add('liked');
        likeButton.textContent = '👍 いいね済み';
    }
});

const favButton = document.querySelector('.fav-button-js');

favButton.addEventListener('click',()=>{
    if(favButton.classList.contains('faved')){
        favButton.classList.remove('faved');
        favButton.textContent = '☆ お気に入り';
    }else{
        favButton.classList.add('faved');
        favButton.textContent = '★ お気に入り済み';
    }
});