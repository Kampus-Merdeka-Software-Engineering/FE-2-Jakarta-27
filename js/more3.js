async function moreNEWS() {
    try {
        const response = await fetch('https://tiny-gray-macaw-shoe.cyclic.app/news');
        const data = await response.json();

        // Filter data for id_paslon = 3
        const filteredData = data.filter(item => item.id_paslon === 3);

        const parent3 = document.getElementById('parent3');

        for (let index = 0; index < filteredData.length; index++) {
            const { title_isu, gambar_isu, upload_date, isu } = filteredData[index];

            const newsContainer = document.createElement('div');
            newsContainer.classList.add('card-cover');

            const imageElement = document.createElement('img');
            imageElement.src = gambar_isu;
            imageElement.alt = 'News Image';
            imageElement.classList.add('c-img');

            const kontenContainer = document.createElement('div');
            kontenContainer.classList.add('c-content');

            const dateElement = document.createElement('p');
            dateElement.textContent = upload_date;
            dateElement.classList.add('c-date');

            const newsLink = document.createElement('div');
            newsLink.style.textDecoration = 'none'; // Remove underline

            const titleElement = document.createElement('p');
            titleElement.textContent = title_isu;
            titleElement.classList.add('c-title');

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = isu;

            newsLink.appendChild(titleElement);
            newsLink.appendChild(descriptionElement);
            newsLink.appendChild(dateElement);
            kontenContainer.appendChild(newsLink);

            // Append imageElement and kontenContainer to newsContainer
            newsContainer.appendChild(imageElement);
            newsContainer.appendChild(kontenContainer);

            // Append the newsContainer to the parent
            parent3.appendChild(newsContainer);

            // Add click event listener to the news container
            newsContainer.addEventListener('click', (event) => {
                event.preventDefault();
            
                // Check if the clicked element was the image or the link
                if (event.target === imageElement || event.target === descriptionElement,titleElement,dateElement) {
                    // Extract the id_berita from the data
                    const id_berita = filteredData[index].id_berita;
                    console.log('Clicked on news with id_berita:', id_berita)
                    // Redirect to berita1.html with the id_berita parameter
                    window.location.href = `berita3.html?id_berita=${id_berita}`;
                }
            });
        }
    } catch (error) {
        alert(error);
    }
}

moreNEWS();

