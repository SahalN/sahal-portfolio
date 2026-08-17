---
title: "Kliniku"
date: "2023-01-25"
image: "/images/kliniku-landing-page.png"
---

**Lihat repositorinya di sini:** [Kliniku](https://github.com/SahalN/Production-Kliniku)  
**Kliniku - Kesehatan Anda, Cukup Satu Klik**

### Nama Proyek

Kliniku

### Deskripsi Singkat

Kliniku adalah aplikasi yang merapikan proses pembuatan janji temu dengan dokter lewat dasbor yang mudah dipakai, sehingga proses reservasi menjadi lebih sederhana baik bagi pasien maupun dokter.

### Tujuan dan Latar Belakang

Kliniku dikembangkan untuk menjawab kebutuhan akan cara yang efisien dan mudah dijangkau dalam memesan janji temu medis. Platform ini bertujuan mengurangi kerumitan penjadwalan dan memperbaiki pengalaman pasien secara keseluruhan, sekaligus memberi penyedia layanan kesehatan sistem janji temu yang tertata.

### Teknologi yang Digunakan

- **Backend:** Node.js dengan Mongoose dan Express untuk API serta pengelolaan server.
- **Frontend:** React.js untuk antarmuka yang interaktif dan dinamis.
- **Basis Data:** MongoDB untuk penyimpanan data yang luwes dan mudah diskalakan.
- **Autentikasi:** JSON Web Token (JWT) untuk kontrol akses yang aman, dengan `moment` untuk pengelolaan waktu dan `bcryptjs` untuk enkripsi kata sandi.
- **Kontrol Versi:** Git untuk melacak perubahan dan mengelola kode secara efektif.

### Fitur Utama

- **Login Admin dan Pengguna:** Portal masuk terpisah untuk administrator dan pengguna biasa, memberi kontrol akses yang aman sesuai peran masing-masing.
- **Reservasi Dokter dan Pasien:** Memudahkan pemesanan dan pengelolaan janji temu, baik dari sisi dokter maupun pasien.
- **Pembaruan Profil:** Memungkinkan pengguna memperbarui profil dengan data pribadi dan riwayat medis yang diperlukan.

### Tantangan dan Solusi

Salah satu tantangan utamanya adalah memastikan proses autentikasi yang aman sekaligus lancar untuk admin maupun pengguna. Hal ini dicapai dengan menerapkan JWT untuk kontrol akses dan `bcryptjs` untuk enkripsi kata sandi, yang menambah lapisan keamanan pada aplikasi.

### Hasil dan Dampak

Proyek ini rampung dalam satu bulan dan berhasil menyediakan sistem penjadwalan yang efisien bagi penggunanya. Tanggapan awal menyoroti kemudahan pemakaian dan aksesibilitas platform, dengan perbaikan yang cukup berarti dalam pengelolaan janji temu bagi penyedia layanan kesehatan.
