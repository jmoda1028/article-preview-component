
const shareIcon = document.querySelector(".share-icon");
const section = document.querySelector('section');

shareIcon.addEventListener('click', () => {
    
    section.classList.toggle('shares');

    // if (share.style.display === 'none') {
    //     share.style.display = 'flex'
    // } else {
    //     share.style.display = 'none'
    // }
  });