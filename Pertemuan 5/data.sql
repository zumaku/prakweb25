-- --------------------------------------------------------
-- Database: db_mahasiswa
-- --------------------------------------------------------
CREATE DATABASE IF NOT EXISTS db_mahasiswa;
USE db_mahasiswa;

-- --------------------------------------------------------
-- Table structure for table `mahasiswa`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `mahasiswa`;
CREATE TABLE `mahasiswa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nim` VARCHAR(10) NOT NULL,
  `nama` VARCHAR(100) NOT NULL,
  `jurusan` VARCHAR(50) NOT NULL,
  `angkatan` YEAR NOT NULL,
  `foto` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_nim` (`nim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Sample data for table `mahasiswa`
-- --------------------------------------------------------
INSERT INTO `mahasiswa` (`nim`, `nama`, `jurusan`, `angkatan`, `foto`) VALUES
('2201001', 'Rizky Saputra', 'Informatika', 2022, 'https://randomuser.me/api/portraits/men/10.jpg'),
('2201002', 'Siti Aisyah', 'Sistem Informasi', 2022, 'https://randomuser.me/api/portraits/women/12.jpg'),
('2201003', 'Budi Santoso', 'Teknik Komputer', 2021, 'https://randomuser.me/api/portraits/men/15.jpg'),
('2201004', 'Ahmad Fadli', 'Informatika', 2023, 'https://randomuser.me/api/portraits/men/22.jpg'),
('2201005', 'Nadia Permata', 'Sistem Informasi', 2023, 'https://randomuser.me/api/portraits/women/25.jpg'),
('2201006', 'Indra Lesmana', 'Teknik Komputer', 2022, 'https://randomuser.me/api/portraits/men/30.jpg'),
('2201007', 'Dewi Lestari', 'Informatika', 2021, 'https://randomuser.me/api/portraits/women/35.jpg'),
('2201008', 'Arif Rahman', 'Sistem Informasi', 2022, 'https://randomuser.me/api/portraits/men/40.jpg'),
('2201009', 'Fitri Handayani', 'Teknik Komputer', 2021, 'https://randomuser.me/api/portraits/women/45.jpg'),
('2201010', 'Rafi Pratama', 'Informatika', 2023, 'https://randomuser.me/api/portraits/men/50.jpg'),
('2201011', 'Lia Kartika', 'Sistem Informasi', 2022, 'https://randomuser.me/api/portraits/women/52.jpg'),
('2201012', 'Fajar Nugraha', 'Teknik Komputer', 2021, 'https://randomuser.me/api/portraits/men/55.jpg'),
('2201013', 'Putri Amelia', 'Informatika', 2023, 'https://randomuser.me/api/portraits/women/60.jpg'),
('2201014', 'Teguh Wibowo', 'Sistem Informasi', 2022, 'https://randomuser.me/api/portraits/men/65.jpg'),
('2201015', 'Ayu Rahmawati', 'Teknik Komputer', 2023, 'https://randomuser.me/api/portraits/women/70.jpg'),
('2201016', 'Yusuf Kurniawan', 'Informatika', 2021, 'https://randomuser.me/api/portraits/men/75.jpg'),
('2201017', 'Melati Anggraini', 'Sistem Informasi', 2023, 'https://randomuser.me/api/portraits/women/80.jpg'),
('2201018', 'Hendra Wijaya', 'Teknik Komputer', 2022, 'https://randomuser.me/api/portraits/men/85.jpg'),
('2201019', 'Nurul Azizah', 'Informatika', 2023, 'https://randomuser.me/api/portraits/women/90.jpg'),
('2201020', 'Bagus Saputro', 'Sistem Informasi', 2022, 'https://randomuser.me/api/portraits/men/95.jpg');

-- --------------------------------------------------------
-- Table structure for table `nilai_mahasiswa`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `nilai_mahasiswa`;
CREATE TABLE `nilai_mahasiswa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `mahasiswa_id` INT(11) NOT NULL,
  `mata_kuliah` VARCHAR(100) NOT NULL,
  `semester` TINYINT(2) NOT NULL,
  `nilai_angka` DECIMAL(5,2) NOT NULL,
  `nilai_huruf` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mahasiswa` (`mahasiswa_id`),
  CONSTRAINT `fk_mahasiswa` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Sample data for table `nilai_mahasiswa`
-- --------------------------------------------------------
INSERT INTO `nilai_mahasiswa` (`mahasiswa_id`, `mata_kuliah`, `semester`, `nilai_angka`, `nilai_huruf`) VALUES
(1, 'Algoritma dan Pemrograman', 1, 88.00, 'A'),
(1, 'Struktur Data', 2, 81.00, 'B+'),
(2, 'Manajemen Basis Data', 2, 92.00, 'A'),
(2, 'Pemrograman Web', 3, 85.00, 'A-'),
(3, 'Jaringan Komputer', 2, 78.00, 'B'),
(3, 'Sistem Operasi', 3, 83.00, 'B+'),
(4, 'Pemrograman Web', 2, 95.00, 'A'),
(4, 'Kecerdasan Buatan', 3, 87.00, 'A-'),
(5, 'Analisis Sistem', 2, 80.00, 'B+'),
(5, 'Manajemen Proyek TI', 3, 86.00, 'A-'),
(6, 'Arsitektur Komputer', 2, 75.00, 'B'),
(6, 'Jaringan Komputer', 3, 89.00, 'A-'),
(7, 'Pemrograman Mobile', 3, 91.00, 'A'),
(8, 'E-Business', 2, 84.00, 'B+'),
(9, 'Sistem Digital', 2, 79.00, 'B'),
(10, 'Algoritma dan Pemrograman', 1, 90.00, 'A'),
(11, 'Basis Data Lanjut', 3, 82.00, 'B+'),
(12, 'Jaringan Komputer', 2, 76.00, 'B'),
(13, 'Analisis dan Perancangan Sistem', 3, 88.00, 'A'),
(14, 'Pemrograman Web', 2, 85.00, 'A-'),
(15, 'Sistem Tertanam', 3, 80.00, 'B+'),
(16, 'Struktur Data', 2, 84.00, 'B+'),
(17, 'Manajemen Informasi', 2, 86.00, 'A-'),
(18, 'Pemrograman Jaringan', 3, 82.00, 'B+'),
(19, 'Kecerdasan Buatan', 3, 90.00, 'A'),
(20, 'Sistem Informasi Geografis', 3, 85.00, 'A-');
