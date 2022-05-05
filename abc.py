# to connect mysqlworkbench and python

import mysql.connector
mydb=mysql.connector.connect(user='root',passwd='12345',database="project",autocommit=True,auth_plugin='mysql_native_password',)
cursor=mydb.cursor(buffered=True)
cursor.execute("select count(likes) from likes")
x=cursor.fetchone()
print(x)
