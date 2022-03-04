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
-- Table structure for table `processador`
--

DROP TABLE IF EXISTS `processador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `processador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) NOT NULL,
  `mcache` varchar(45) NOT NULL,
  `frequencia` varchar(45) NOT NULL,
  `soquete` varchar(45) NOT NULL,
  `arquitetura` varchar(45) NOT NULL,
  `nucleos` varchar(45) NOT NULL,
  `valorestimado` decimal(19,2) NOT NULL,
  `fabricanteid` int NOT NULL,
  `nivelid` int NOT NULL,
  `descricao` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `processador_fabricante_idx` (`fabricanteid`),
  KEY `processador_nivel_idx` (`nivelid`),
  CONSTRAINT `fk_processador_fabricante` FOREIGN KEY (`fabricanteid`) REFERENCES `fabricante` (`id`),
  CONSTRAINT `processador_nivel` FOREIGN KEY (`nivelid`) REFERENCES `nivel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processador`
--

LOCK TABLES `processador` WRITE;
/*!40000 ALTER TABLE `processador` DISABLE KEYS */;
INSERT INTO `processador` VALUES (1,'i3 9100','6 MB cache','3,60 GHz','LGA 1151','14 nm','4 nucleos',500.00,1,1,'Os processadores Core i3 da Intel são modelos de entrada, ficando atrás dos Core i5, Core i7 e Core i9 em relação às especificações.'),(2,'i5 9400','9 MB cache','4,10 GHz','LGA 1151','14 nm','6 nucleos',1000.00,1,2,'O Core i5 9400, da Intel, é um processador intermediário de nona geração. O modelo pode ser considerado uma opção voltada para quem busca ter bom desempenho em jogos ou até para criadores de conteúdo, por exemplo'),(3,'i7 9700','12 MB cache','4,80 GHz','LGA 1151','14 nm','8 nucleos',1500.00,1,3,'Este processador da Intel conta com ótima qualidade para maior desempenho ideal para os usuários que procuram resposta rápida e eficiência'),(4,'RYZEN 3 3200G','6 MB cache','4,00 GHz','AM4','12 nm','4 nucleos',800.00,2,1,'traz diversas melhorias em relação aos modelos anteriores. A APU de quatro núcleos e threads com frequências entre 3,6 GHz e 4 GHz tem especificações semelhantes às do Ryzen 3 2200G, mas oferece melhor desempenho gráfico. Isso porque sua Radeon Vega 8 atinge uma frequência maior de operação, chegando aos 1.250 MHz'),(5,'RYZEN 5 3400G','6 MB cache','4,20 GHz','AM4','12 nm','8 nucleos',1000.00,2,2,'Processadores AMD Ryzen de 3ª geração inclui compatibilidade com a primeira conectividade PCIe® 4.0 do mundo, para possibilitar que as placas-mãe, gráficos e tecnologias de armazenamento mais avançadas estejam disponível. Os processadores AMD Ryzen™ de 3ª geração são também compatíveis 4 com gerações anteriores de placas-mãe, oferecendo desempenho implacável.');
/*!40000 ALTER TABLE `processador` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-14 23:40:13
