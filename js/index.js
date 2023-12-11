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

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault(); // Menghentikan perilaku bawaan tombol submit

  var selectedOption = document.getElementById('candidate-input').value; // Ambil nilai pilihan

  // Kirim nilai pilihan ke server (Anda perlu mengirim data ini ke server menggunakan AJAX atau fetch)

  alert('Terima kasih atas partisipasi Anda dalam polling!');
});

document.getElementById('results-button').addEventListener('click', function() {
  // Tampilkan hasil polling dari server
  var infoElement = document.getElementById('info');
  if (infoElement.style.maxHeight === '0px') {
      infoElement.style.maxHeight = infoElement.scrollHeight + 'px';
  } else {
      infoElement.style.maxHeight = '0px';
  }
});
