<?php

$conn = mysqli_connect("localhost","root" "", "coba");

$query = "select * from isu"
$result = mysqli_query($conn, $query);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/isu.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>isu</title>
    <script>
      // JavaScript untuk toggle menu responsif
      document.addEventListener("DOMContentLoaded", function () {
          const navCheckbox = document.getElementById("nav-check");
          const navLinks = document.querySelector(".nav-links");

          navCheckbox.addEventListener("change", function () {
              navLinks.style.display = navCheckbox.checked ? "block" : "none";
          });
      });

      // JavaScript untuk memperbarui tahun di footer
      document.addEventListener("DOMContentLoaded", function () {
          const currentYear = new Date().getFullYear();
          const footerYear = document.querySelector(".footer-bottom p");

          footerYear.textContent = `copyright © ${currentYear} PilpresKini`;
      });
  </script>
</head>
<body>
    
<!-- Header -->
<div class="navcontainer" id="navcontainer">
  <div class="nav">
      <input type="checkbox" id="nav-check">
      <div class="nav-header">
          <img src="img\logo-pilpreskini.png" alt="logo-portal" width="75%">
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div> 
      <div class="nav-links">
          <a href="index.html" target="_self">Home</a>
          <a class="navactive" href="isu.html" target="_self">Isu</a>
          <a href="pilpres.html" target="_self">Pilpres</a>
          <a href="about.html" target="_self">About</a>
          <img src="img\logo-km.png" alt="logo-km" width="12%" style="margin-right: 4px;">
          <img src="img\logo-revou.png" alt="logo-revou" width="8%">             
      </div>
  </div>
</div>
<!-- header -->

<!-- Judul -->
<div class="container2">
  <h1>Isu - Isu Ter<span>kini</span></h1>
  <p>Rangkuman Isu -Isu dirangkum secara komprehensif dan informatif untuk</p>
  <p>memudahkan melihat progres masing-masing calon presiden dan wakil</p> 
  <p>presiden 2024</p>
</div>
<!-- judul -->

<!-- konten --> 
<?php while($row = mysqli_fetch_assoc($paslon)):?>
<div class="container3">
  <div class="subcontainer3">
    <h1>Seputar <span>Annies - Amin</span></h1>
    <a href="">lihat lebih banyak</a>
  </div>  
  <div class="continerberita">
    <?php while($row2 = mysqli_fetch_assoc($result2)):?>
    <div class="berita">
      <div class="card"><a href=""><img src="img/amin4.png" alt="anies"></a></div>
      <div class="konten">
      <a href="">
        <h1>Pasangan AMIN Dapat Nomor Urut Satu.</h1>
        <p>Cawapres Amin mengaku nomor urut satu yang didapatkannya ini sesuai yang diharapkan.</p>
      </a>
      </div>
    </div>
    <?php endwhile; ?>
  </div>
</div>
<?php endwhile; ?>
<!-- ------------------------------------------------------------------ -->

<div class="container3">
  <div class="subcontainer3">
    <h1>Seputar <span>ganjar - mahfud</span></h1>
    <a href="">lihat lebih banyak</a>
  </div>  
  <div class="continerberita">
    <div class="berita">
      <div class="card"><a href=""><img src="img/ganjar4.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Dapat Nomor Urut 3, Pendukung: Metal, Ganjar-Mahfud Menang Total</h1>
        <p>Salam Metal! Menang Total! Teriakan dukungan langsung bergema di kantor Komisi Pemilihan Umum (KPU) Jakarta saat Capres 2024.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/ganjar1.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Ganjar Pranowo: Demokrasi yang Jujur dan Adil Harus Jauh dari Unsur KKN</h1>
        <p>Ganjar Pranowo mengajak semua pihak untuk mengawal demokrasi dalam ajang pemilihan presiden (pilpres) 2024 agar berjalan jujur dan adil.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/ganjar2.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Ganjar-Mahfud Minta Presiden Jokowi Netral di Pilpres 2024</h1>
        <p>Ganjar-Mahfud menginginkan agar masyarakat damai dan bahagia mengikuti pemilu 2024. Sebab, tujuan pemilu adalah untuk kemajuan bangsa dan negara.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/ganjar3.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>TPN: Ganjar-Mahfud Siapkan 10 Juta Hunian Rakyat Jika Menang Pilpres 2024</h1>
        <p>Program Rumah Kita akan difokuskan ke masyarakat yang tidak mampu dan belum punya rumah.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/ganjar6.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Ganjar-Mahfud Siapkan Program Jaga Teman untuk Cegah Kekerasan ke Perempuan dan Anak</h1>
        <p>Ganjar-Mahfud menyiapkan program untuk mencegah kekerasan terhadap perempuan dan anak di lembaga maupun lingkungan masyarakat. </p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/ganjar5.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Ganjar-Mahfud Siapkan Program Zero Blank Spot, Ingin Akses Internet Merata</h1>
        <p>Kondisi tersebut dijawab oleh Ganjar-Mahfud melalui program zero blank spot sebagai pondasi pertama dalam memenuhi hak-hak digital warga negara.</p>
      </a>
      </div>
    </div>
  </div>
</div>
<!-- ----------------------------------------- -->
<div class="container3">
  <div class="subcontainer3">
    <h1>Seputar <span>Prabowo - Gibran</span></h1>
    <a href="">lihat lebih banyak</a>
  </div>  
  <div class="continerberita">
    <div class="berita">
      <div class="card"><a href=""><img src="img/prabowo4.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Infografis Prabowo Subianto Dukung Gibran Rakabuming Maju dalam Pilgub 2024</h1>
        <p>Kami akan selalu mendukung pemimpin-pemimpin yang dinamis yang bekerja keras untuk rakyat.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/prabowo5.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>TKN Prabowo-Gibran Targetkan Raih 22 Juta Suara Pemilih Muda</h1>
        <p>Bersama Prabowo-Gibran, Insyaallah pemuda akan terus duduk bersama sebagai subyek pembangunan, sebagai game changer dalam menyongsong Indonesia Emas 2045</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/prabowo6.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Nomor Urut 2 Prabowo-Gibran, Jubir TKN: Jalan Tengah dan Keseimbangan</h1>
        <p>Karena ini adalah simbol jalan tengah yang tepat untuk meneruskan pembangunan yang sudah on the track menuju Indonesia Emas 2024.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/prabowo7.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Prabowo: Di Planet Kita yang Semakin Kecil, Kebutuhan Kerja sama Sangat Mendesak</h1>
        <p>Prabowo Subianto mengapresiasi para Delegasi Menhan se-ASEAN atas partisipasinya dalam acara The 17th ASEAN Defence Minister's Meeting (ADMM) and The 10th ASEAN Defence Minister's Meeting Plus 2023 di JCC Senayan, Jakarta.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/prabowo8.png" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Ratusan Seniman Bantengan Jatim Deklarasi Dukung Prabowo-Gibran di Pilpres 2024</h1>
        <p>Para seniman bertekad dapat memenangkan Prabowo-Gibran di Jatim pada Pilpres 2024.</p>
      </a>
      </div>
    </div>
    <div class="berita">
      <div class="card"><a href=""><img src="img/prabowo3.jpg" alt="kibar"></a></div>
      <div class="konten">
      <a href="">
        <h1>Prabowo-Gibran Ungkap 8 Tantangan Indonesia di Masa Mendatang</h1>
        <p>Ada delapan tantangan strategis yang menjadi pertimbangan Prabowo-Gibran dalam menyusun visi, misi dan program periode 2024-2029.</p>
      </a>
      </div>
    </div>
  </div>
</div>
</body>
<!-- konten -->

<!-- Fotter -->
<footer class="footer">
  <div class="footercontainer">
    <div class="footer-content">
      <img src="img\logo-pilpreskini.png" alt="logo-portal" width="120">
      <p style="text-align: start">PilpresKini is a news portal will provide up-to-date coverage of the
        indonesian  presidential  election, as well as in-depth analysis for each candidate</p>
    </div>
    <div class="footer-bottom">
        <div class="footer-social">
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <p style="text-align: end">copyright © 2023 PilpresKini</p>
    </div>
  </div>
</div>
</footer>
</html>