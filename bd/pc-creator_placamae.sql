-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pc-creator
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `placamae`
--

DROP TABLE IF EXISTS `placamae`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placamae` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) NOT NULL,
  `chipset` varchar(45) NOT NULL,
  `soquete` varchar(45) NOT NULL,
  `fabricanteid` int NOT NULL,
  `nivelid` int NOT NULL,
  `valorestimado` decimal(19,2) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `placamae_fabricante_idx` (`fabricanteid`),
  KEY `placamae_nivel_idx` (`nivelid`),
  CONSTRAINT `placamae_fabricante` FOREIGN KEY (`fabricanteid`) REFERENCES `fabricante` (`id`),
  CONSTRAINT `placamae_nivel` FOREIGN KEY (`nivelid`) REFERENCES `nivel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placamae`
--

LOCK TABLES `placamae` WRITE;
/*!40000 ALTER TABLE `placamae` DISABLE KEYS */;
INSERT INTO `placamae` VALUES (1,'H110m-hg4','H110m','LGA 1151',7,1,500.00,'A placa-mãe ASRock H110M-HG4 é considerada uma peça de entrada boa, já que não custa muito e é compatível com as configurações padrão que vemos em PCs Gamers atuais. Como mencionamos antes, ela é compatível com os processadores Intel da linha Intel Core i3, i5 e i7, os mais usados atualmente.'),(2,'B365M PRO-VDH','b360','LGA 1151',5,2,600.00,'As placas-mãe da série PRO combinam funcionalidade estável e montagem de alta qualidade para atender a qualquer fluxo de trabalho profissional. As placas-mãe da série PRO tornam a vida mais fácil para qualquer usuário que exija desempenho superior de seus computadores.'),(3,'AORUS ELITE','Z390','LGA 1151',8,3,1500.00,'A Gigabyte Z390 AORUS ELITE é uma placa-mãe intermediária superior soquete LGA1151 baseada no novo chipset Intel Z390, suportando os processadores Core i de oitava e nona geração (ambos com codinome “Coffee Lake”). Ela traz iluminação RGB, dois slots PCI Express 3.0 x16, seis portas SATA-600, seis portas USB 3.0 e três portas USB 3.1 geração.'),(4,'Asus Prime  Gaming','B450','AM4',6,1,700.00,'Nesse review irei analisar a ASUS Prime B450M-Gaming/BR, que trata-se de uma placa-mãe AM4 de baixo-custo no formato mATX com 4 slots de memória, chipset B450, o que significa que temos a disposição suporte a USB 3.1, NVMe, SATA RAID e também overclock no CPU, apesar da placa não possuir dissipador no VRM'),(5,'Ax370-gaming 5 Aorus','AX370','AM4',8,3,1500.00,'A Gigabyte AORUS AX370-Gaming 5 é uma excelente placa-mãe em todos os sentidos. Com alguns dos componentes mais robustos da atualidade, design moderno e sistema de iluminação RGB, a fabricante oferece um produto pronto para quem vai exigir muito da máquina'),(6,'Aorus B450  Elite','B450','AM4',8,2,1000.00,'A Gigabyte B450 AORUS M é uma placa-mãe intermediária soquete AM4 para processadores Ryzen da AMD, baseada no chipset B450 e fabricada no Brasil pela Digitron da Amazônia');
/*!40000 ALTER TABLE `placamae` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-14 23:40:11
