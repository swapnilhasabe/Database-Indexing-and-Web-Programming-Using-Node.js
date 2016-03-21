*********Submission Contains 3 folders Part1, Part 2, Part 3
https://blog.majestic.com/development/majestic-million-csv-daily/    --link for majestic.csv
******Part 2 contains testapp folder which can be placed in directory
***** PART 1 ******
1. Create Tables by executing majestic_schema.sql. clean_data.sql file for deleting tables and indexes.
2. Loading Data into tables using .ctl files (You have to put your netID in the following command)
execute Load_data.sh (sh Load_data.sh)which contains following commands:
time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr control=Majestic.ctl
time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr control=Majestic_INDEX1.ctl
time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr control=Majestic_INDDEX2.ctl
time /opt/oracle/app/csoracle/product/12.1.0/dbhome_1/bin/sqlldr control=Majestic_INDEX3.ctl

It can be concluded from the data loading times required for tables having index was more than the table having no index.

3.execute time command to measure time for SQL queries and also for table loading. All queries are provided in .sql files as mentioned in assignment statement.
All measurements are in TimeExecutionLoadTable.txt You can find comments on execution time of tables here.

In case of retrieval of SQL queries, the time required to fetch results from the table having index was less than that for table having no index.

****** PART 2 *******
4.set path executing following commands. Execute $PATH to check whether path is set or not.
export PATH=/people/cs/m/mxb135330/software/nodejs-0.12.7/bin:$PATH
export LD_LIBRARY_PATH=/people/cs/m/mxb135330/software/instantclient:$LD_LIBRARY_PATH
export OCI_LIB_DIR=/people/cs/m/mxb135330/software/instantclient
export OCI_INC_DIR=/people/cs/m/mxb135330/software/instantclient/sdk/include

5.I have created new folder named testapp in which I placed majestic.js. Also It includes view folder, View includes all the html files. 
Now, we need to install the npm modules into our testapp directory,run the following:
npm install express
npm install mustachex
npm install oracledb
npm install body-parser
npm install orawrap


6. After setting the path change the directory to testapp by executing following commands
cd testapp

7.Now execute the following command. 
node majestic.js
Now you will see the following message
Listening on 1821


6.Now you are ready to perform 
Following are the links where you can check the result of first query. Please check the port number.
It might be possible that someone else is using the same port. If that is Problem then you have to change 
port number in majestic.js and also in link. Here, port number is 1821.  
http://csgrads1.utdallas.edu:1821/majestic/domain/no_idx
http://csgrads1.utdallas.edu:1821/majestic/domain/idx1
http://csgrads1.utdallas.edu:1821/majestic/domain/idx2
http://csgrads1.utdallas.edu:1821/majestic/domain/idx3
7.
Following are the links where you can check the result of second query. Please check the port number.
It might be possible that someone else is using the same port. If that is Problem then you have to change 
port number in majestic.js and also in link. Here, port number is 1821.  
http://csgrads1.utdallas.edu:1821/majestic/tld/no_idx
http://csgrads1.utdallas.edu:1821/majestic/tld/idx1
http://csgrads1.utdallas.edu:1821/majestic/tld/idx2
http://csgrads1.utdallas.edu:1821/majestic/tld/idx3


****** Part 3 ******
  Majestic2.js - this contains an implementation of the queries using orawrap.
node Majestic2.js -check performance with orawrap
  1.CURL: following are the files which contain curl time for each query.
- query1_curl.txt -curl time for query1
- query2_curl.txt -curl tome for query2
-query1_orawrap_curl.txt - curl time for query1 using orawrap 
-query2_orawrap_curl.txt - curl time for query2 using orawrap

2.Jmeter Test:
JmeterTest_Result folder contains all the csv files for query1 and query2 having result for number of threads 1,10,50 without and with orawrap.(As mentioned in the assignment).
query1_testplan.jmx contains the test plan for query1
query2_testplan.jmx contains the test plan for query2
The conclusion from the JMeter Test is that :

The JMeter tests complete successfully when the number of threads is less. 
As we go on increasing the number of threads the performance goes on decreasing. 
As threads = 1000, the server gave an error that it can't handle any more threads. 
