//Load Express Framework
var express = require('express');

//Load Mustache Template Engine
var mustachex = require('mustachex');

//Load Oracle
var oracledb = require('oracledb');

//Call express
var app = express();

var bodyParser = require('body-parser');

var orawrap = require('orawrap');
var dbConfig = {
    user: 'sdh140430',
    password: 'database',
    connectString: 'csoracle.utdallas.edu/student.csoracle.utdallas.edu',
    poolMax: 20,
    poolMin: 2,
    poolIncrement: 2,
    poolTimeout: 10
};

//Set Global App Settings
app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Query1 on MAJESTIC
app.get('/majestic/domain/no_idx', function(req, res) {
  res.render('domain_0.html');
});

app.post('/search_no_idx', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where Domain='" +domain+"'";
 orawrap.execute(
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

});



//Query1 on MAJESTIC_INDEX1

app.get('/majestic/domain/idx1', function(req, res) {
  res.render('domain_1.html');
});

app.post('/search_idx1', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where Domain='"+domain+"'";
 orawrap.execute(
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
});



//Query1 on MAJESTIC_INDEX2

app.get('/majestic/domain/idx2', function(req, res) {
  res.render('domain_2.html');
});

app.post('/search_idx2', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where Domain='" + domain + "'";
 orawrap.execute(
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
});

//Query1 on MAJESTIC_INDEX3

app.get('/majestic/domain/idx3', function(req, res) {
  res.render('domain_3.html');
});

app.post('/search_idx3', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX3 where Domain='" + domain + "'";
 orawrap.execute(
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
});
////////////////////////////////////////////// Query 2 //////////////////////////////////////////////////////////////

//Query2 on MAJESTIC

app.get('/majestic/tld/no_idx', function(req, res) {
  res.render('tld_0');
});

app.post('/search_no_idx_1', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where TLD='"+tld+"'";
 orawrap.execute(
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
});

// Query2 on MAJESTIC_INDEX1

app.get('/majestic/tld/idx1', function(req, res) {
  res.render('tld_1');
});

app.post('/search_idx_1', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where TLD='"+tld+"'";
 orawrap.execute(
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
});


//Query2 on MAJESTIC_INDEX2

app.get('/majestic/tld/idx2', function(req, res) {
  res.render('tld_2');
});

app.post('/search_idx_2', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where TLD='"+tld+"'";
 orawrap.execute(
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
});

//Query2 on MAJESTIC_INDEX3

app.get('/majestic/tld/idx3', function(req, res) {
  res.render('tld_3');
});

app.post('/search_idx_3', function(req, res) {

 var tld = req.body.tld
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where TLD='"+tld+"'";
 orawrap.execute(
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
});







//Create Server
var port = Number(process.env.PORT || 1821);
 orawrap.createPool(dbConfig, function(err, pool) {
   // The pool that was created is provided in the callback function,  
   // but it's rarely needed as it's stored within orawrap for use later 
   if (err) throw err;
   //Start the web server now that the pool is ready to handle incoming requests 
   app.listen(port, function() {
       console.log('Web server listening ');
   });
});