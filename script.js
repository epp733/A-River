document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }

    // Function to highlight the current page in the navigation
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Call the function to highlight the current page
    highlightCurrentPage();
});
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.history.back(); // Go back to the previous page
        });
    }

    // Function to highlight the current page in the navigation
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Call the function to highlight the current page
    highlightCurrentPage();
});