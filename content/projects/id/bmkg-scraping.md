---
title: "Web Scraping BMKG"
date: "2022-04-19"
image: "/images/bmkg.svg"
---

### Nama Proyek

Laporan Gempa Indonesia SHL

### Deskripsi Singkat

Aplikasi berbasis terminal yang mengambil data gempa dari situs BMKG dan menyajikan informasi terkini secara rinci mengenai aktivitas seismik di Indonesia.

### Tujuan dan Latar Belakang

Proyek ini menjawab kebutuhan akan akses cepat dan sederhana terhadap data gempa bagi peneliti, developer, dan siapa pun yang memantau aktivitas seismik. Dengan memanfaatkan data BMKG, aplikasi ini memastikan laporan gempa terbaru bisa dibaca langsung dari terminal.

### Teknologi yang Digunakan

- **Bahasa Pemrograman:** Python
- **Pustaka:** BeautifulSoup untuk web scraping, Requests untuk permintaan HTTP
- **Sumber Data:** Situs BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)

### Fitur Utama

- Mengambil dan menampilkan data gempa terbaru, termasuk magnitudo, lokasi, dan kedalaman.
- Antarmuka terminal yang sederhana sehingga mudah digunakan.
- Penyaringan data berdasarkan tanggal atau wilayah.
- Ekspor data ke berkas teks atau CSV untuk dianalisis secara luring.

### Tantangan dan Solusi

- **Tantangan:** Menyesuaikan diri dengan perubahan struktur situs BMKG.  
  **Solusi:** Merancang scraper secara modular sehingga mudah diperbarui ketika struktur HTML situs berubah.

- **Tantangan:** Menangani permintaan data yang sering tanpa membebani server.  
  **Solusi:** Menerapkan pembatasan laju permintaan dan mekanisme caching untuk mengurangi permintaan berulang.

### Hasil dan Dampak

- Mempermudah akses ke data gempa BMKG bagi pengguna terminal.
- Meningkatkan efisiensi pemantauan aktivitas seismik tanpa perlu membuka peramban.
- Memberi kemudahan bagi developer dan peneliti yang bekerja di bidang analisis data atau penanganan bencana.
