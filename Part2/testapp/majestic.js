//Load Express Framework
var express = require('express');

//Load Mustache Template Engine
var mustachex = require('mustachex');

//Load Oracle
var oracledb = require('oracledb');

//Call express
var app = express();

var bodyParser = require('body-parser');

//Set Global App Settings
app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//get and post for querying MAJESTIC
app.get('/majestic/domain/no_idx', function(req, res) {
  res.render('domain_0.html');
});

app.post('/search_no_idx', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where Domain='" +domain+"'";
 oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_domain', 
        {
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
               }
               );
             }
      else {
               res.render('error_0',
               {
                  message: "No Domain with such name in MAJESTIC"

               }
               );
             }  
    }
        }
      );
    }
  );
});



//function for MAJESTIC_INDEX1
app.get('/majestic/domain/idx1', function(req, res) {
  res.render('domain_1.html');
});

app.post('/search_idx1', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where Domain='"+domain+"'";
 oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_domain1', 
        {
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
               }
               );
             }
      else {
               res.render('error_1',
               {
                  message: "No Domain with such name in MAJESTIC_INDEX1"

               }
               );
             }  
    }
        }
      );
    }
  );
});



//functions for querying MAJESTIC_INDEX2

app.get('/majestic/domain/idx2', function(req, res) {
  res.render('domain_2.html');
});

app.post('/search_idx2', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where Domain='" + domain + "'";
 oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_domain2', 
        {
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
               }
               );
             }
      else {
               res.render('error_2',
               {
                  message: "No Domain with such name in MAJESTIC_INDEX2"

               }
               );
             }  
    }
        }
      );
    }
  );
});

//get and post for querying MAJESTIC_INDEX3

app.get('/majestic/domain/idx3', function(req, res) {
  res.render('domain_3.html');
});

app.post('/search_idx3', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX3 where Domain='" + domain + "'";
 oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_domain3', 
        {
                 globalrank: result.rows[0][1],
                 Domain: result.rows[0][0]
               }
               );
             }
      else {
               res.render('error_3',
               {
                  message: "No Domain with such name in MAJESTIC_INDEX3"

               }
               );
             }  
    }
        }
      );
    }
  );
});
///////////////////////////////////2nd query////////////////////////////
//get and post for querying MAJESTIC//////////////////////////

app.get('/majestic/tld/no_idx', function(req, res) {
  res.render('tld_0');
});

app.post('/search_no_idx_1', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where TLD='"+tld+"'";


 
oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,{},{maxRows:1000000},
         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_tld', 
        {
                 
              
                 Domain: result.rows
               }
               );
             }
      else {
               res.render('error_0_tld.html',
               {
                  message: "No Domain with such TLD in MAJESTIC"

               }
               );
             }  
    }
        }
      );
    }
  );
});

///////majestic index1//////////////////
app.get('/majestic/tld/idx1', function(req, res) {
  res.render('tld_1');
});

app.post('/search_idx_1', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where TLD='"+tld+"'";


 
oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,{},{maxRows:1000000},

         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_tld1', 
        {
                 
                 
                 Domain: result.rows
               }
               );
             }
      else {
               res.render('error_1_tld',
               {
                  message: "No Domain with such TLD in MAJESTIC_INDEX1"

               }
               );
             }  
    }
        }
      );
    }
  );
});


///////majestic index2//////////////////
app.get('/majestic/tld/idx2', function(req, res) {
  res.render('tld_2');
});

app.post('/search_idx_2', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where TLD='"+tld+"'";


 
oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,{},{maxRows:1000000},

         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_tld2', 
        {
                 
                                  Domain: result.rows
               }
               );
             }
      else {
               res.render('error_2_tld.html',
               {
                  message: "No Domain with such TLD in MAJESTIC_INDEX2"

               }
               );
             }  
    }
        }
      );
    }
  );
});

///////majestic index3//////////////////
app.get('/majestic/tld/idx3', function(req, res) {
  res.render('tld_3');
});

app.post('/search_idx_3', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where TLD='"+tld+"'";


 
oracledb.getConnection(
    {  user          : "sdh140430",
       password      : "database",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,{},{maxRows:1000000},

         function(err, result)
         {
           if (err) { 
       console.error(err);
       res.render('error',
         {
    message: err.message
  }
              );
       
    }
           else {
      if (result.rows.length >0) {
        res.render('result_tld3', 
        {
                 
                 Domain: result.rows
               }
               );
             }
      else {
               res.render('error_3_tld.html',
               {
                  message: "No Domain with such TLD in MAJESTIC_INDEX3"

               }
               );
             }  
    }
        }
      );
    }
  );
});







//Create Server
var port = Number(process.env.PORT || 1821);
 app.listen(port, function() {
     console.log("Listening on " + port);
});