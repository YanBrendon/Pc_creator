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
-- Table structure for table `maquina`
--

DROP TABLE IF EXISTS `maquina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maquina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `placamaeid` int NOT NULL,
  `memoriaramid` int NOT NULL,
  `processadorid` int NOT NULL,
  `armazenamentoid` int NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `usuarioid` int NOT NULL,
  `nivelmaquina` varchar(45) NOT NULL,
  `precomaquina` decimal(19,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `maquina_placamae_idx` (`placamaeid`),
  KEY `maquina_processador_idx` (`processadorid`),
  KEY `maquina_memoriara_idx` (`memoriaramid`),
  KEY `maquina_armazenamento_idx` (`armazenamentoid`),
  KEY `maquina_usuario_idx` (`usuarioid`),
  CONSTRAINT `maquina_armazenamento` FOREIGN KEY (`armazenamentoid`) REFERENCES `armazenamento` (`id`),
  CONSTRAINT `maquina_memoriara` FOREIGN KEY (`memoriaramid`) REFERENCES `memoriaran` (`id`),
  CONSTRAINT `maquina_placamae` FOREIGN KEY (`placamaeid`) REFERENCES `placamae` (`id`),
  CONSTRAINT `maquina_processador` FOREIGN KEY (`processadorid`) REFERENCES `processador` (`id`),
  CONSTRAINT `maquina_usuario` FOREIGN KEY (`usuarioid`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquina`
--

LOCK TABLES `maquina` WRITE;
/*!40000 ALTER TABLE `maquina` DISABLE KEYS */;
INSERT INTO `maquina` VALUES (58,1,3,2,8,'ANGELICA GATA ',21,'',0.00),(75,1,1,1,2,'hehe',22,'0',0.00);
/*!40000 ALTER TABLE `maquina` ENABLE KEYS */;
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
