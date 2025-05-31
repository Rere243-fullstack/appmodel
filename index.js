const likeBtn = document.querySelector('.like')      // Sélectionne le bouton 💚
const dislikeBtn = document.querySelector('.dislike')// Sélectionne le bouton ❌
const profileCard = document.querySelector('.profile-card') // Sélectionne la carte du profil

// Quand on clique sur le bouton "like"
likeBtn.addEventListener('click', () => {
  profileCard.classList.add('liked')      // On ajoute la classe "liked" à la carte
  setTimeout(() => {
    profileCard.classList.remove('liked') // On la retire après 500 ms
  }, 500)
})

// Idem pour "dislike"
dislikeBtn.addEventListener('click', () => {
  profileCard.classList.add('disliked')
  setTimeout(() => {
    profileCard.classList.remove('disliked')
  }, 500)
})
