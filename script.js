document.addEventListener('DOMContentLoaded', () => {
    const recForm = document.getElementById('recForm');
    const recList = document.getElementById('recommendation-list');
    const popupModal = document.getElementById('popupModal');
    const closePopup = document.getElementById('closePopup');

    // Handle Form Submission Pipeline (Task 7 & Task 9)
    recForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const textValue = document.getElementById('recText').value;
        let nameValue = document.getElementById('recName').value;

        if(!nameValue.trim()) {
            nameValue = "Anonymous Contributor";
        }

        // 1. Create structural components for the new element layout
        const newCard = document.createElement('div');
        newCard.classList.add('rec-card');

        const pText = document.createElement('p');
        pText.textContent = `"${textValue}"`;

        const sAuthor = document.createElement('span');
        sAuthor.classList.add('rec-author');
        sAuthor.textContent = `- ${nameValue}`;

        // Append to parent DOM list tree (Task 7)
        newCard.appendChild(pText);
        newCard.appendChild(sAuthor);
        recList.appendChild(newCard);

        // 2. Clear input field parameters completely
        recForm.reset();

        // 3. Trigger Confirmation Popup Viewport (Task 9)
        popupModal.classList.add('active');
    });

    // Close Modal Event Handler
    closePopup.addEventListener('click', () => {
        popupModal.classList.remove('active');
    });
});