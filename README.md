# Note-App Web Service - Submission Back-End Developer JavaScript

Proyek ini adalah submission untuk kelas **Back-End Developer JavaScript** dari Dicoding, dalam rangka event **IDCamp**. Tujuan proyek ini adalah untuk membangun layanan REST API **Note-App** yang dapat mengelola catatan dengan fitur CRUD (Create, Read, Update, Delete), diimplementasikan menggunakan **Node.js** dan **Express.js**, serta di-deploy pada server **AWS EC2** untuk akses publik.

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Fitur](#fitur)
- [Arsitektur](#arsitektur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat](#prasyarat)

## Pendahuluan

Aplikasi Note-App ini dibuat untuk menyediakan REST API yang dapat menyimpan, mengelola, dan menghapus catatan. 
API ini memiliki beberapa endpoint untuk melakukan operasi CRUD dan menerapkan autentikasi menggunakan token. 
Untuk mendemonstrasikan keterampilan deploy di cloud, API ini di-host pada server **AWS EC2**.

## Fitur

API ini mendukung berbagai fitur utama, yaitu:

- **Membuat Catatan Baru** - `POST /notes`
- **Mengambil Semua Catatan** - `GET /notes`
- **Mengambil Catatan Berdasarkan ID** - `GET /notes/:id`
- **Memperbarui Catatan Berdasarkan ID** - `PUT /notes/:id`
- **Menghapus Catatan Berdasarkan ID** - `DELETE /notes/:id`

Setiap catatan memiliki properti:
- **ID** - Unik untuk setiap catatan
- **Title** - Judul dari catatan
- **Body** - Isi catatan
- **CreatedAt** - Waktu pembuatan
- **UpdatedAt** - Waktu terakhir diperbarui

## Arsitektur

Arsitektur proyek ini terdiri dari beberapa komponen, yaitu:

- **Node.js** - Digunakan sebagai runtime server.
- **Express.js** - Framework untuk membangun REST API.
- **AWS EC2** - Cloud server untuk hosting aplikasi.
- **Postman** - Digunakan untuk pengujian endpoint API.

Diagram arsitektur API sederhana ini adalah sebagai berikut:


## Teknologi yang Digunakan

- **Node.js**: Runtime untuk menjalankan JavaScript di server.
- **Express.js**: Framework backend untuk membuat dan mengelola server.
- **AWS EC2**: Cloud server untuk deployment aplikasi.
- **Postman atau Curl**: Tools untuk pengujian API.

## Prasyarat

Pastikan Anda telah menginstal perangkat berikut di sistem Anda:

- Node.js dan NPM
- Akun AWS dan konfigurasi AWS CLI (untuk mengakses EC2)
- SSH Key Pair untuk akses EC2

