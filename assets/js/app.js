const share = document.getElementById('share');
const shareIcon = document.querySelector(".share-icon");

shareIcon.addEventListener('click', () => {
    if (share.style.display === 'none') {
        share.style.display = 'flex'
    } else {
        share.style.display = 'none'
    }
  });