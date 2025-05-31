const likeBtn = document.querySelector('.like')      // Sélectionne le bouton 💚
const dislikeBtn = document.querySelector('.dislike')// Sélectionne le bouton ❌
const profileCard = document.querySelector('.profile-card') // Sélectionne la carte du profil

// Quand on clique sur le bouton "like"
likeBtn.addEventListener('click', () => {
  profileCard.classList.add('liked')      // On ajoute la classe "liked" à la carte
  setTimeout(() => {
    profileCard.classList.remove('liked')
    window.location.href = 'matches.html' // On la retire après 500 ms
  }, 500)
})

// Idem pour "dislike"
dislikeBtn.addEventListener('click', () => {
  profileCard.classList.add('disliked')
  setTimeout(() => {
    profileCard.classList.remove('disliked')
    window.history.back()  // Retour à la page précédente dans l'historique
    // Ou remplacer par : window.location.href = 'autrePage.html'
  }, 500)
})

// Affiche un message quand on clique sur un profil
document.querySelectorAll('.messages li').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.querySelector('strong').textContent
    alert(`Ouvrir la conversation avec ${name}`)
  })
})

// Animation des nouveaux avatars au survol
document.querySelectorAll('.avatars img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.borderColor = '#ff4f81'
  })
  img.addEventListener('mouseout', () => {
    img.style.borderColor = '#ddd'
  })
})

// Redirection vers la page de détails de l’événement
document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', () => {
    const eventId = card.dataset.id || '1'  // Si tu veux gérer plusieurs fiches plus tard
    window.location.href = `event-details.html?id=${eventId}`
  })

  // Petite animation de survol
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.02)'
    card.style.transition = '0.3s'
  })

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)'
  })
})

// Effet clignotant sur les badges "Annulé"
document.querySelectorAll('.badge.danger').forEach(badge => {
  setInterval(() => {
    badge.style.opacity = badge.style.opacity === '0.5' ? '1' : '0.5'
  }, 600)
})

