CREATE DATABASE  IF NOT EXISTS `getpet_directory`;
USE `getpet_directory`;


DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `post`;
DROP TABLE IF EXISTS `likes`;
DROP TABLE IF EXISTS `notification`;
DROP TABLE IF EXISTS `comment`;




--
-- Table structure for getpet
--


CREATE TABLE `user` (
  `user_id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `post` (
  `post_id` BIGINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` varchar(250) NOT NULL,
  `user_id` BIGINT NOT NULL,
  `like_count` BIGINT NOT NULL,
  `post_type` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50),
  `age` int,
  `kind` VARCHAR(50),
  `start_date` DATETIME,
  `end_date` DATETIME,
  `price` float,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `notification` (
  `notification_id` BIGINT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(100) NOT NULL,
  `user_id` BIGINT NOT NULL,
  PRIMARY KEY (`notification_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `likes` (
  `like_id` BIGINT NOT NULL AUTO_INCREMENT,
  `post_id` BIGINT NOT NULL,
  `user_id` BIGINT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `comment` (
  `comment_id` BIGINT NOT NULL AUTO_INCREMENT,
  `post_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `text` VARCHAR(150) NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




--
-- Inserting data for tables
--

INSERT INTO `user`
VALUES
(1,'user1','test123','email1','user'),
(2,'user2','test123','email2','user'),
(3,'user3','test123','email3','user'),
(4,'user4','test123','email4','user'),
(5,'user5','test123','email5','user'),
(6,'user6','test123','email6','admin');





INSERT INTO `post`
VALUES
(1,'title1','content1',1,0,'question',null,null,null,null,null,null),
(2,'title2','content2',2,0,'question',null,null,null,null,null,null),
(3,'title3','content3',1,0,'question',null,null,null,null,null,null),
(4,'title4','content4',3,0,'adoption','izmir',7,'kind1',null,null,null),
(5,'title5','content5',2,0,'adoption','istanbul',7,'kind2',null,null,null),
(6,'title6','content6',1,0,'adoption','izmir',7,'kind2',null,null,null);










