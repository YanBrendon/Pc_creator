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
-- Table structure for table `memoriaran`
--

DROP TABLE IF EXISTS `memoriaran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memoriaran` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) NOT NULL,
  `formato` varchar(45) NOT NULL,
  `capacidade` varchar(45) NOT NULL,
  `fabricanteid` int NOT NULL,
  `nivelid` int NOT NULL,
  `valorestimado` decimal(19,2) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `memoriaran_fabricante_idx` (`fabricanteid`),
  KEY `memoriaran_nivel_idx` (`nivelid`),
  CONSTRAINT `memoriaran_fabricante` FOREIGN KEY (`fabricanteid`) REFERENCES `fabricante` (`id`),
  CONSTRAINT `memoriaran_nivel` FOREIGN KEY (`nivelid`) REFERENCES `nivel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memoriaran`
--

LOCK TABLES `memoriaran` WRITE;
/*!40000 ALTER TABLE `memoriaran` DISABLE KEYS */;
INSERT INTO `memoriaran` VALUES (1,'HyperX fury','DDR4','4GB',9,1,170.00,' As memorias ddr4 de 4GB sao memorias ideais para trabalhos simples onde nao necessite muito da máquina'),(2,'HyperX fury','DDR4','8GB',9,2,250.00,' Para quem está disposto a investir um pouco mais, o modelo HyperX Fury, também da Kingston, oferece alguns benefícios extras. A começar pelo dissipador, que melhora o gerenciamento do calor gerado. Além disso ela também trabalha em uma latência menor (CL 14). Outra característica interessante é o ajuste automático para a melhor frequência possível - ela vem de fábrica operando em 2.133 MHz, mas pode chegar a 2.666 MHz.'),(3,'Crucial Ballistix','DDR4','8GB',9,3,450.00,' A Ballistix da Crucial também é uma das opções para modelos DDR4. Com CL 16 (latência) e 2.400 MHz, o modelo conta com um dissipador de calor integrado. A memória pode ser encontrada por cerca de R$ 400.');
/*!40000 ALTER TABLE `memoriaran` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-14 23:40:12
