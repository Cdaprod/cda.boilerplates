document.addEventListener('DOMContentLoaded', () => {
    const tabBar = document.querySelector('.tab-bar');
    const cardContainer = document.querySelector('.card-container');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.tabs.forEach(tab => {
                // Create tab button
                const tabButton = document.createElement('button');
                tabButton.classList.add('tab-button');
                tabButton.dataset.target = tab.id;
                tabButton.textContent = tab.title;
                tabBar.appendChild(tabButton);

                // Create cards for the tab
                tab.cards.forEach(cardContent => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.dataset.tab = tab.id;
                    card.textContent = cardContent;

                    if (tab.id !== 'tab1') {
                        card.hidden = true;
                    }

                    cardContainer.appendChild(card);
                });
            });

            // Add click event listeners to the tab buttons
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
        })
        .catch(error => console.error('Error fetching data:', error));
});
