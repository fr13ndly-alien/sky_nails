const ENABLE_POPUP = false;
const promotionPopup = document.getElementById('promotion-popup');
const closeButton = promotionPopup.querySelector('.close-button');

if (ENABLE_POPUP) {
    // Show the popup initially (set timeout for visual appeal if desired)
    promotionPopup.style.opacity = 1; // Or: setTimeout(() => promotionPopup.style.opacity = 1, 1000);

    closeButton.addEventListener('click', () => {
        promotionPopup.style.opacity = 0;
    });

    // Optional: Close the popup if the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (event.target === promotionPopup) {
            promotionPopup.style.opacity = 0;
        }
    });
} else {
    promotionPopup.disabled = true;
}