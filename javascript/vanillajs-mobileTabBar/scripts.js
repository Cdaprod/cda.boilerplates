document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const cards = document.querySelectorAll('.card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.target;
            
            // Hide all cards
            cards.forEach(card => {
                card.hidden = true;
            });

            // Show cards related to the selected tab
            const selectedCards = document.querySelectorAll(`.card[data-tab="${targetTab}"]`);
            selectedCards.forEach(card => {
                card.hidden = false;
            });
        });
    });
});
