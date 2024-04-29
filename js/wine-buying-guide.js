document.addEventListener('DOMContentLoaded', function() {
    const buyWinesButton = document.getElementById('buyWinesBtn'); // Кнопка Buy wines
    const learnMoreButton = document.getElementById('learnMoreBtn'); // Кнопка Learn More

    buyWinesButton.addEventListener('click', function() {
        const wineSection = document.getElementById('wine-selection');
        wineSection.scrollIntoView({ behavior: 'smooth' });
    });

    learnMoreButton.addEventListener('click', function() {
        const faqSection = document.getElementById('faq');
        faqSection.scrollIntoView({ behavior: 'smooth' });
    });
});