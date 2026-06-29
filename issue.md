# Planning: Inisiasi Project Bun dengan Elysia.js, PostgreSQL, dan Drizzle ORM

Dokumen ini berisi panduan tingkat tinggi (high-level) untuk membuat project baru menggunakan runtime Bun dan stack modern untuk backend development.

---

## 1. Inisiasi Project & Struktur Folder
* **Inisiasi project** menggunakan Bun (`bun init` atau template setup Elysia).
* **Struktur Folder**: Buat struktur folder modular yang rapi, contohnya:
  * `src/` - Folder utama untuk kode sumber.
  * `src/db/` - Konfigurasi database, koneksi, dan definisi skema Drizzle.
  * `src/controllers/` atau `src/routes/` - Untuk logika endpoint Elysia.
  * `src/index.ts` - Entry point aplikasi.

## 2. Manajemen Dependensi
Instal dependensi berikut menggunakan Bun:
* **Dependensi Utama**:
  * `elysia` (Web framework)
  * `drizzle-orm` (ORM)
  * `pg` atau `postgres` (PostgreSQL client)
* **Dependensi Developer (Dev Dependencies)**:
  * `drizzle-kit` (Tooling untuk migrasi database)
  * `@types/pg` (Jika menggunakan TypeScript dan driver `pg`)

## 3. Konfigurasi Database & Skema Drizzle
* **Koneksi Database**: Setup koneksi ke database PostgreSQL menggunakan variabel lingkungan (`.env`).
* **Definisi Skema (Schema Definition)**: Buat skema sederhana (misalnya tabel `users` atau `todos`) menggunakan Drizzle schema builder.
* **Drizzle Config**: Buat file `drizzle.config.ts` untuk menentukan letak file skema dan direktori output hasil migrasi (folder `drizzle/`).

## 4. Migrasi Database
* **Generate Migration**: Buat langkah instruksi untuk menghasilkan file migrasi SQL berdasarkan skema Drizzle yang telah dibuat (`bunx drizzle-kit generate`).
* **Run Migration**: Jalankan migrasi tersebut ke database PostgreSQL target (`bunx drizzle-kit migrate` atau script kustom runner).

## 5. Implementasi API dengan Elysia.js
* **Server Setup**: Jalankan HTTP server Elysia sederhana pada port tertentu (misal: `3000`).
* **Integrasi Database**: Hubungkan instance database Drizzle ke routing Elysia.
* **Endpoints (CRUD)**: Buat beberapa endpoint dasar tingkat tinggi untuk mendemonstrasikan integrasi database:
  * `GET /` - Health check.

## 6. Pengujian & Menjalankan Aplikasi
* Jalankan server dalam mode development (`bun --watch src/index.ts` atau via script `bun dev`).
* Lakukan verifikasi sederhana bahwa endpoint merespons dengan benar dan data berhasil masuk/keluar dari PostgreSQL melalui Drizzle.
