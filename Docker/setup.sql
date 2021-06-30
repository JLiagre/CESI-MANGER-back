CREATE DATABASE cesimanger;
GO
USE cesimanger;
GO
CREATE TABLE Users (ID int IDENTITY(1,1) PRIMARY KEY, user_name nvarchar(max), password binary(20), name nvarchar(max), surname nvarchar(max), telephone int, email nvarchar(max), address nvarchar(max), zip nvarchar(max), city nvarchar(max), country nvarchar(max), status nvarchar(max), userRole nvarchar(max), created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);
GO
ALTER TABLE Users
ADD CONSTRAINT user_name UNIQUE (user_name)
GO
INSERT INTO Users(user_name, password , name, surname) values ("Test", HASHBYTES('SHA1', 'test'), "test","test")
GO