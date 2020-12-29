CREATE DEFINER=`root`@`localhost` PROCEDURE `addOrEdit`(
IN _ID INT,
IN _Name VARCHAR(45),
IN _Done BOOLEAN
)
BEGIN
	if _ID = 0 THEN
		INSERT INTO todo(name,DONE)
        VALUES (_Name,_Done);
       
    SET _ID = LAST_INSERT_ID();
    else
		update todo
        set
        name = _Name,
        DONE = _Done
        WHERE ID = _ID;
       END if;
       
       select _ID AS 'ID';
    
	


END