import Connection as connection

cursor = connection.cursor() 
SQLCommand = ("INSERT INTO Customers "
"(firstName, lastName, city) "
"VALUES (?,?,?)")
Values = ['Susan','Ibach','Toronto'] 
cursor.execute(SQLCommand,Values) 

connection.commit() 
connection.close()
