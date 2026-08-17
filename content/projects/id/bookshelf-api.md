---
title: "Book Shelf API yang di-deploy dengan GCP"
date: "2024-06-06"
image: "/images/bookshelf-api.svg"
---

### Nama Proyek

Bookshelf API

### Deskripsi Singkat

API RESTful untuk mengelola rak buku beserta isinya, di-deploy menggunakan Google Cloud Platform (GCP). API ini memungkinkan pengguna membuat, membaca, memperbarui, dan menghapus data rak maupun buku.

### Tujuan dan Latar Belakang

Dikembangkan sebagai bagian dari program Bangkit, proyek ini memperlihatkan cara membangun dan men-deploy API yang lengkap dengan layanan Google Cloud. API ini menyediakan wadah untuk mengelola buku dan rak buku, dengan penekanan pada desain backend yang efisien dan penerapan di cloud.

### Teknologi yang Digunakan

- **Bahasa Pemrograman:** Node.js
- **Framework Backend:** Express.js
- **Basis Data:** Google Cloud Firestore
- **Penerapan Cloud:** Google Cloud Platform (GCP)
- **Arsitektur API:** RESTful

### Fitur Utama

- Operasi CRUD untuk buku dan rak buku, termasuk penyaringan dan pengurutan.
- Data disimpan dan dikelola di Google Cloud Firestore sehingga mudah diskalakan.
- API terdokumentasi lengkap dan mengikuti praktik terbaik REST.
- Di-deploy dan dikelola lewat GCP demi keandalan serta performa.

### Tantangan dan Solusi

- **Tantangan:** Memastikan penyimpanan data yang andal dan mudah diskalakan.  
  **Solusi:** Menggunakan Google Cloud Firestore untuk memanfaatkan keluwesan, skalabilitas, dan integrasinya dengan layanan GCP lain.

- **Tantangan:** Mengoptimalkan respons dan performa API saat lalu lintas tinggi.  
  **Solusi:** Menerapkan indeks yang tepat dan mengoptimalkan kueri Firestore, dipadukan dengan caching untuk data yang sering diakses.

### Hasil dan Dampak

- Menghasilkan API yang berfungsi penuh dan mudah diskalakan untuk mengelola buku dan rak buku dengan akses yang aman.
- Menunjukkan praktik terbaik dalam desain API, penerapan cloud, dan pengelolaan backend.
