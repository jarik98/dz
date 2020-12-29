CREATE DEFINER=`root`@`localhost` PROCEDURE `new_user`(
in _Name varchar(45),
in _Password varchar(45),
in _Email varchar(45)
)
BEGIN

insert into users (name,password,email,created_at)
values (_Name,_Password,_Email,now());
END