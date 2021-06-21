CREATE DATABASE cesimanger;
GO
USE cesimanger;
GO
CREATE TABLE Users (ID int, user_name nvarchar(max), password nvarchar(max), name nvarchar(max), surname nvarchar(max), telephone int, email nvarchar(max), address nvarchar(max), zip nvarchar(max), city nvarchar(max), country nvarchar(max), created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);
GO
