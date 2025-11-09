-- phpMyAdmin SQL Dump
-- Database: db_mahasiswa
-- Tanggal: 2025-11-09
-- Charset: utf8mb4

CREATE DATABASE IF NOT EXISTS db_mahasiswa;
USE db_mahasiswa;

-- --------------------------------------------------------
-- Struktur tabel untuk tabel `mahasiswa`
-- --------------------------------------------------------

DROP TABLE IF EXISTS mahasiswa;
CREATE TABLE mahasiswa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nim VARCHAR(20) NOT NULL,
  nama VARCHAR(100) NOT NULL,
  asal_daerah VARCHAR(100) NOT NULL,
  jurusan VARCHAR(100) NOT NULL,
  angkatan INT NOT NULL,
  foto VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Struktur tabel untuk tabel `nilai_mahasiswa`
-- --------------------------------------------------------

DROP TABLE IF EXISTS nilai_mahasiswa;
CREATE TABLE nilai_mahasiswa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mahasiswa_id INT NOT NULL,
  mata_kuliah VARCHAR(100) NOT NULL,
  semester INT NOT NULL,
  nilai_angka DECIMAL(5,2) NOT NULL,
  nilai_huruf VARCHAR(2) NOT NULL,
  FOREIGN KEY (mahasiswa_id) REFERENCES mahasiswa(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Data untuk tabel `mahasiswa`
-- --------------------------------------------------------

INSERT INTO mahasiswa (nim, nama, asal_daerah, jurusan, angkatan, foto) VALUES
('230101001', 'Ahmad Fauzan', 'Bandung', 'Teknik Informatika', 2023, 'https://randomuser.me/api/portraits/men/11.jpg'),
('230101002', 'Siti Nurhaliza', 'Jakarta', 'Sistem Informasi', 2023, 'https://randomuser.me/api/portraits/women/12.jpg'),
('230101003', 'Rizky Pratama', 'Surabaya', 'Teknik Komputer', 2022, 'https://randomuser.me/api/portraits/men/13.jpg'),
('230101004', 'Putri Maharani', 'Yogyakarta', 'Manajemen Informatika', 2021, 'https://randomuser.me/api/portraits/women/14.jpg'),
('230101005', 'Dewi Ayu Lestari', 'Medan', 'Teknik Informatika', 2023, 'https://randomuser.me/api/portraits/women/15.jpg'),
('230101006', 'Fajar Nugroho', 'Malang', 'Sistem Informasi', 2022, 'https://randomuser.me/api/portraits/men/16.jpg'),
('230101007', 'Nanda Saputra', 'Padang', 'Teknik Komputer', 2023, 'https://randomuser.me/api/portraits/men/17.jpg'),
('230101008', 'Rina Melati', 'Pontianak', 'Manajemen Informatika', 2021, 'https://randomuser.me/api/portraits/women/18.jpg'),
('230101009', 'Andi Kurniawan', 'Makassar', 'Teknik Informatika', 2022, 'https://randomuser.me/api/portraits/men/19.jpg'),
('230101010', 'Nur Aisyah', 'Bali', 'Sistem Informasi', 2023, 'https://randomuser.me/api/portraits/women/20.jpg');

-- --------------------------------------------------------
-- Data untuk tabel `nilai_mahasiswa`
-- --------------------------------------------------------

INSERT INTO nilai_mahasiswa (mahasiswa_id, mata_kuliah, semester, nilai_angka, nilai_huruf) VALUES
(1, 'Pemrograman Dasar', 1, 88.0, 'A'),
(1, 'Basis Data', 2, 80.0, 'B+'),
(2, 'Jaringan Komputer', 2, 90.0, 'A'),
(2, 'Analisis Sistem', 3, 85.0, 'A-'),
(3, 'Matematika Diskrit', 1, 76.0, 'B'),
(3, 'Algoritma & Struktur Data', 2, 84.0, 'B+'),
(4, 'Sistem Operasi', 3, 70.0, 'C+'),
(5, 'Pemrograman Web', 2, 93.0, 'A'),
(5, 'Pemodelan Data', 3, 89.0, 'A-'),
(6, 'Manajemen Proyek TI', 4, 82.0, 'B+'),
(7, 'Keamanan Informasi', 5, 90.0, 'A'),
(8, 'Desain UI/UX', 1, 78.0, 'B'),
(9, 'Machine Learning', 5, 88.0, 'A'),
(10, 'Data Mining', 4, 92.0, 'A');

-- --------------------------------------------------------
-- Selesai
-- --------------------------------------------------------
