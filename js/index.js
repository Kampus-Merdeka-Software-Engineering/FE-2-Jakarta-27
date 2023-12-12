let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('newsContainer');

  // Fetch news data from your API or source
  fetch('https://tiny-gray-macaw-shoe.cyclic.app/news')
      .then(response => response.json())
      .then(data => {
          // Shuffle the news array
          const shuffledNews = shuffleArray(data);

          // Pick the first 3 items
          const randomNews = shuffledNews.slice(0, 3);

          // Display the random news
          randomNews.forEach(news => {
              const newsElement = document.createElement('div');
              newsElement.classList.add('card')
              newsElement.innerHTML = `
                  <img src="${news.gambar_isu}" alt="News Image" style="max-width: 100%;">
                  <p class="news-title">${news.title_isu}</p>
              `;

              // Add click event listener to the news link
              newsElement.addEventListener('click', () => {
                // Log information when news is clicked
                console.log(`Clicked on news with id and id_berita: ${news.id_paslon} ${news.id_berita}`);
                  // Redirect to a specific page with the news id
                  window.location.href = `berita${news.id_paslon}.html?id_berita=${news.id_berita}`;
              });

              newsContainer.appendChild(newsElement);
          });
      })
      .catch(error => console.error('Error fetching news:', error));

  // Function to shuffle an array
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('newsContainer2');

  // Fetch news data from your API or source
  fetch('https://tiny-gray-macaw-shoe.cyclic.app/news')
      .then(response => response.json())
      .then(data => {
          // Shuffle the news array
          const shuffledNews = shuffleArray(data);

          // Pick the first 3 items
          const randomNews = shuffledNews.slice(0, 3);

          // Display the random news
          randomNews.forEach(news => {
              const newsElement = document.createElement('div');
              newsElement.classList.add('card')
              newsElement.innerHTML = `
                  <img src="${news.gambar_isu}" alt="News Image" style="max-width: 100%;">
                  <p class="news-title">${news.title_isu}</p>
              `;

              // Add click event listener to the news link
              newsElement.addEventListener('click', () => {
                // Log information when news is clicked
                console.log(`Clicked on news with id and id_berita: ${news.id_paslon} ${news.id_berita}`);
                  // Redirect to a specific page with the news id
                  window.location.href = `berita${news.id_paslon}.html?id_berita=${news.id_berita}`;
              });

              newsContainer.appendChild(newsElement);
          });
      })
      .catch(error => console.error('Error fetching news:', error));

  // Function to shuffle an array
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
});

// voooootinggg
document.getElementById('votingForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const selectedPaslon = formData.get('id_paslon');

  try {
    const response = await fetch('https://tiny-gray-macaw-shoe.cyclic.app/submit-vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_paslon: selectedPaslon }),
    });

    if (response.ok) {
      const { votingResults } = await response.json();

      // Display voting results using alert
      displayResultsAlert(votingResults);
    } else {
      alert('Error submitting vote. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting vote:', error);
  }
});

function displayResultsAlert(votingResults) {
  const resultsText = votingResults.map(result => {
    const paslonText = getPaslonText(result.id_paslon);
    return `${result.voteCount} pembaca memilih pasangan ${paslonText}`;
  }).join('\n');

  alert(`Kamu dan pembaca lainnya telah memilih:\n${resultsText}`);
}

function getPaslonText(id_paslon) {
  switch (id_paslon) {
    case 1:
      return 'Anies - Amin';
    case 2:
      return 'Prabowo Gibran';
    case 3:
      return 'Ganjar - Mahfud';
    default:
      return 'Unknown';
  }
}