document.addEventListener('DOMContentLoaded', function () {
    const dogContainer = document.getElementById('dogContainer');
    const catContainer = document.getElementById('catContainer');
    const quoteContainer = document.getElementById('quoteContainer');

    const dogImage = document.getElementById('dogImage');
    const catImage = document.getElementById('catImage');
    const quoteElement = document.getElementById('quote');

    // Fetch and show images immediately on page load
    fetchAndShowImage('https://dog.ceo/api/breeds/image/random', dogImage);
    fetchAndShowImage('https://api.thecatapi.com/v1/images/search', catImage);
    fetchRandomQuote();

    const dogBtn = document.getElementById('dogBtn');
    const catBtn = document.getElementById('catBtn');
    const quoteBtn = document.getElementById('quoteBtn');

    dogBtn.addEventListener('click', () => fetchAndShowImage('https://dog.ceo/api/breeds/image/random', dogImage));
    catBtn.addEventListener('click', () => fetchAndShowImage('https://api.thecatapi.com/v1/images/search', catImage));
    quoteBtn.addEventListener('click', fetchRandomQuote);

    function fetchAndShowImage(apiUrl, imageElement) {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                imageElement.src = data.message;
            } else if (data[0] && data[0].url) {
                imageElement.src = data[0].url;
            }

            // Automatically show the image
            openImageModal(imageElement.src);
        })
        .catch(error => console.error('Error fetching random image:', error));
    }

    function fetchRandomQuote() {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = data.content;
        })
        .catch(error => console.error('Error fetching random quote:', error));
    }

    function openImageModal(imageSrc) {
        // You can implement your logic to display the image in a modal or any other way you prefer
        // For simplicity, an alert is used here
        alert('Image URL: ' + imageSrc);
    }
});
