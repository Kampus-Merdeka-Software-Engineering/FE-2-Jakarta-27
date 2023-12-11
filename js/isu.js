async function getDataFromBE() {
  try {
      const response = await fetch('https://tiny-gray-macaw-shoe.cyclic.app/news');
      const data = await response.json();

      // Filter data for id_paslon = 1 and limit to 5 items
      const filteredData = data.filter(item => item.id_paslon === 1).slice(0, 5);

      const parent1 = document.getElementById('parent1');

      for (let index = 0; index < filteredData.length; index++) {
          const { title_isu, gambar_isu, isu } = filteredData[index];

          const newsContainer = document.createElement('div');
          newsContainer.classList.add('news-container');

          const cardContainer = document.createElement('div');
          cardContainer.classList.add('card');

          const imageLink = document.createElement('a');

          const imageElement = document.createElement('img');
          imageElement.src = gambar_isu;
          imageElement.alt = 'News Image';

          imageLink.appendChild(imageElement);
          cardContainer.appendChild(imageLink);

          const kontenContainer = document.createElement('div');
          kontenContainer.classList.add('konten');

          const newsLink = document.createElement('a');

          const titleElement = document.createElement('h1');
          titleElement.textContent = title_isu;

          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = isu;

          newsLink.appendChild(titleElement);
          newsLink.appendChild(descriptionElement);
          kontenContainer.appendChild(newsLink);

          // Append cardContainer and kontenContainer to newsContainer
          newsContainer.appendChild(cardContainer);
          newsContainer.appendChild(kontenContainer);

          // Append the newsContainer to the parent
          parent1.appendChild(newsContainer);

          // Add click event listener to the news link
          newsContainer.addEventListener('click', (event) => {
            event.preventDefault();
        
            // Check if the clicked element was the image or the link
            if (event.target === imageElement || event.target === descriptionElement,titleElement) {
              // Extract the id_berita from the data
              const id_berita = filteredData[index].id_berita;
        
                // Redirect to berita1.html with the id_berita parameter
                window.location.href = `berita1.html?id_berita=${id_berita}`;
            }
        });
      }
  } catch (error) {
      alert(error);
  }
}

getDataFromBE();

async function getDataFromBE2() {
  try {
      const response = await fetch('https://tiny-gray-macaw-shoe.cyclic.app/news');
      const data = await response.json();

      // Filter data for id_paslon = 1 and limit to 5 items
      const filteredData = data.filter(item => item.id_paslon === 2).slice(0, 5);

      const parent2 = document.getElementById('parent2');

      for (let index = 0; index < filteredData.length; index++) {
          const { title_isu, gambar_isu, isu } = filteredData[index];

          const newsContainer = document.createElement('div');
          newsContainer.classList.add('news-container');

          const cardContainer = document.createElement('div');
          cardContainer.classList.add('card');

          const imageLink = document.createElement('a');

          const imageElement = document.createElement('img');
          imageElement.src = gambar_isu;
          imageElement.alt = 'News Image';

          imageLink.appendChild(imageElement);
          cardContainer.appendChild(imageLink);

          const kontenContainer = document.createElement('div');
          kontenContainer.classList.add('konten');

          const newsLink = document.createElement('a');

          const titleElement = document.createElement('h1');
          titleElement.textContent = title_isu;

          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = isu;

          newsLink.appendChild(titleElement);
          newsLink.appendChild(descriptionElement);
          kontenContainer.appendChild(newsLink);

          // Append cardContainer and kontenContainer to newsContainer
          newsContainer.appendChild(cardContainer);
          newsContainer.appendChild(kontenContainer);

          // Append the newsContainer to the parent
          parent2.appendChild(newsContainer);

          // Add click event listener to the news link
          newsContainer.addEventListener('click', (event) => {
            event.preventDefault();
        
            // Check if the clicked element was the image or the link
            if (event.target === imageElement || event.target === descriptionElement,titleElement) {
              // Extract the id_berita from the data
              const id_berita = filteredData[index].id_berita;
        
                // Redirect to berita1.html with the id_berita parameter
                window.location.href = `berita2.html?id_berita=${id_berita}`;
            }
        });
      }
  } catch (error) {
      alert(error);
  }
}

getDataFromBE2();

async function getDataFromBE3() {
  try {
      const response = await fetch('https://tiny-gray-macaw-shoe.cyclic.app/news');
      const data = await response.json();

      // Filter data for id_paslon = 1 and limit to 5 items
      const filteredData = data.filter(item => item.id_paslon === 3).slice(0, 5);

      const parent3 = document.getElementById('parent3');

      for (let index = 0; index < filteredData.length; index++) {
          const { title_isu, gambar_isu, isu } = filteredData[index];

          const newsContainer = document.createElement('div');
          newsContainer.classList.add('news-container');

          const cardContainer = document.createElement('div');
          cardContainer.classList.add('card');

          const imageLink = document.createElement('p');

          const imageElement = document.createElement('img');
          imageElement.src = gambar_isu;
          imageElement.alt = 'News Image';

          imageLink.appendChild(imageElement);
          cardContainer.appendChild(imageLink);

          const kontenContainer = document.createElement('div');
          kontenContainer.classList.add('konten');

          const newsLink = document.createElement('p');

          const titleElement = document.createElement('h1');
          titleElement.textContent = title_isu;

          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = isu;

          newsLink.appendChild(titleElement);
          newsLink.appendChild(descriptionElement);
          kontenContainer.appendChild(newsLink);

          // Append cardContainer and kontenContainer to newsContainer
          newsContainer.appendChild(cardContainer);
          newsContainer.appendChild(kontenContainer);

          // Append the newsContainer to the parent
          parent3.appendChild(newsContainer);

          // Add click event listener to the news link
          newsContainer.addEventListener('click', (event) => {
            event.preventDefault();
        
            // Check if the clicked element was the image or the link
            if (event.target === imageElement || event.target === descriptionElement,titleElement) {
                // Extract the id_berita from the data
                const id_berita = filteredData[index].id_berita;
                
                // Redirect to berita1.html with the id_berita parameter
                window.location.href = `berita3.html?id_berita=${id_berita}`;
            }
        });
      }
  } catch (error) {
      alert(error);
  }
}

getDataFromBE3();