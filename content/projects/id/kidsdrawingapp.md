---
title: "Kids Drawing App"
date: "2023-10-07"
image: "/images/kidsdrawingapp.svg"
---

### Nama Proyek

MyQuizApp

### Deskripsi Singkat

Aplikasi kuis interaktif yang dikembangkan di Android Studio dengan Kotlin, dirancang untuk memberi pengguna cara yang menyenangkan dalam menguji pengetahuan mereka di berbagai topik.

### Tujuan dan Latar Belakang

Proyek ini dibangun untuk mendalami pengembangan Android dengan Kotlin sekaligus menghasilkan aplikasi yang berfungsi penuh dan mudah dipakai. MyQuizApp memperlihatkan konsep dasar pengembangan aplikasi seluler, mulai dari siklus hidup activity, desain antarmuka, hingga penanganan interaksi pengguna.

### Teknologi yang Digunakan

- **Bahasa Pemrograman:** Kotlin
- **IDE:** Android Studio
- **Perkakas:** Gradle untuk proses build dan pengelolaan proyek

### Fitur Utama

- Antarmuka yang bersih dan mudah dipahami.
- Beragam soal pilihan ganda dengan umpan balik langsung atas jawaban yang dipilih.
- Sistem penilaian dinamis untuk memantau capaian pengguna.
- Perpindahan antar soal lewat tombol berikutnya dan sebelumnya.
- Desain responsif yang mendukung berbagai ukuran dan orientasi layar.

### Tantangan dan Solusi

- **Tantangan:** Mengelola status kuis dan perpindahan antar soal.  
  **Solusi:** Memanfaatkan ViewModel dan LiveData bawaan Android untuk mempertahankan status saat siklus hidup activity berubah.

- **Tantangan:** Menjaga tampilan tetap responsif di berbagai ukuran layar.  
  **Solusi:** Menyusun tata letak yang luwes dengan ConstraintLayout dan mengujinya di beberapa emulator.

- **Tantangan:** Menangani validasi masukan pengguna secara efektif.  
  **Solusi:** Menerapkan penanganan galat untuk pengiriman yang belum lengkap dan memastikan setiap tindakan mendapat umpan balik.

### Peran dan Tanggung Jawab

- **Developer:** Muhammad Sahal Nurdin  
  Merancang dan membangun arsitektur, antarmuka, serta fungsi aplikasi sesuai praktik terbaik Kotlin dan pengembangan Android.

### Hasil dan Dampak

- Berhasil menghadirkan aplikasi kuis yang berfungsi penuh dan memperlihatkan kemampuan dasar pengembangan Android.
- Memperoleh pengalaman langsung dengan Kotlin dan perkakas Android Studio.
- Menghasilkan basis kode yang dapat dipakai ulang untuk proyek Android berikutnya.
