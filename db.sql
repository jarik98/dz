drop database if exists users;
create database users char set utf8;
select database();
use users;

create table users(
	id int primary key auto_increment,
    name char(45),
    email char(45),
    password char(45),
    created_at date,
    updated_at date
);

insert into users (name,email,password) values 
('admin','test@','admin');

select * from users;