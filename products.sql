-- Adminer 4.8.1 MySQL 8.0.37 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `image_url` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`id`, `name`, `price`, `stock`, `status`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1,	'Laptop Acer',	15000000,	11,	1,	'http://localhost:3000/public/laptop acer 1.jpg',	'2024-09-17 19:35:31',	'2024-09-17 19:35:31'),
(2,	'Laptop Asus',	10000000,	15,	1,	'http://localhost:3000/public/laptop asus 1.jpeg',	'2024-09-17 19:37:21',	'2024-09-17 19:37:21'),
(3,	'Laptop Huawei',	9500000,	21,	1,	'http://localhost:3000/public/laptop huawei 1.jpeg',	'2024-09-17 19:38:42',	'2024-09-17 19:38:42'),
(4,	'Laptop Samsung',	12000000,	9,	1,	'http://localhost:3000/public/laptop samsung 1.jpeg',	'2024-09-17 19:39:52',	'2024-09-17 19:39:52'),
(5,	'Laptop Lenovo',	13000000,	7,	1,	'http://localhost:3000/public/laptop lenovo 1.jpeg',	'2024-09-17 19:42:01',	'2024-09-17 19:42:01'),
(6,	'Laptop HP',	16000000,	14,	1,	'http://localhost:3000/public/laptop hp 1.jpeg',	'2024-09-17 19:43:09',	'2024-09-17 19:43:09'),
(9,	'Laptop HP',	18000000,	17,	1,	'http://localhost:3000/public/laptop hp 1.jpeg',	'2024-09-17 20:32:47',	'2024-09-17 20:44:11');

-- 2024-09-18 15:31:00
