document.addEventListener('DOMContentLoaded', () => {
    // Get the id_berita from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const id_berita = urlParams.get('id_berita');

    // Fetch the news details based on id_berita
    fetch(`https://tiny-gray-macaw-shoe.cyclic.app/news/${id_berita}`)
        .then(response => response.json())
        .then(newsDetails => {
            // Update the HTML to display the full news details
            const newsContainer = document.getElementById('container');
            const { title_isu, upload_date, gambar_isu, isu } = newsDetails;

            const titleElement = document.createElement('h1');
            titleElement.textContent = title_isu;
            titleElement.classList.add('article-title');

            const dateElement = document.createElement('p');
            dateElement.textContent = `Upload Date: ${upload_date}`;
            dateElement.classList.add('article-date');

            const imageElement = document.createElement('img');
            imageElement.src = gambar_isu;
            imageElement.alt = 'News Image';
            imageElement.classList.add('article-image');

            const contentElement = document.createElement('p');
            contentElement.textContent = isu;
            contentElement.classList.add('article-content');

            newsContainer.appendChild(titleElement);
            newsContainer.appendChild(dateElement);
            newsContainer.appendChild(imageElement);
            newsContainer.appendChild(contentElement);
        })
        .catch(error => console.error('Error fetching news details:', error));
});