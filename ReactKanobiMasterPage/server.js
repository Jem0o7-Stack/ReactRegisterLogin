'use strict';

var path = require('path');
var express = require('express');
var app = express();
var mssql = require('mssql');
var bodyParser = require('body-parser');
var MyStaticEmailClass = require("./Logic/Mail");
var MyEncryptDecryptClass = require("./Logic/encryptdecrypt");

// config for your database  
var config = {
    server: '192.68.100.153\\sqlexpress',
    database: 'ReactJsMvc',
    user: 'sqluser',
    password: 'usersql'

};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.set('port', process.env.PORT || 8080);

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.post('/SignUp', function (req, res) {
    //debugger;
   
    var kanPass = MyEncryptDecryptClass.encrypt(req.body[3].kanPass);
    var kanRePass = MyEncryptDecryptClass.encrypt(req.body[4].kanRePass);

    try {
        var conn = new mssql.ConnectionPool(config);

        var data = {
            kanName: req.body[0].kanName,
            kanEmail: req.body[1].kanEmail,
            kanMobile: req.body[2].kanMobile,
            kanPass: kanPass,
            kanRePass: kanRePass,
            kanCheck: req.body[5].kanCheck

        };
        // connect to your database
        conn.connect().then(function () {
            var request = new mssql.Request(conn);

            request.input('kanName', mssql.NVarChar, data.kanName);
            request.input('kanEmail', mssql.NVarChar, data.kanEmail);
            request.input('kanMobile', mssql.NVarChar, data.kanMobile);
            request.input('kanPass', mssql.NVarChar, data.kanPass);
            request.input('kanRePass', mssql.NVarChar, data.kanRePass);
            request.input('kanCheck', mssql.Bit, data.kanCheck);


            request.execute('SpKanobiSignUp').then(function (recordsets) {
                // console.log(recordsets.recordset);
                res.redirect('/');

            });
        });
    }
    catch (e) {
        res.json(e);
    }
});

app.post('/SignInData', function (req, res) {
  
    var data = {
        kanEmail: req.body[0].kanEmail,
        kanPass: req.body[1].kanPass,      
    };

    var kanPass = MyEncryptDecryptClass.encrypt(data.kanPass);

    try {
        var conn = new mssql.ConnectionPool(config);

        conn.connect().then(function () {
            var request = new mssql.Request(conn);

            request.input('kanEmail', mssql.NVarChar, data.kanEmail);
            request.input('kanPass', mssql.NVarChar, kanPass);

            request.execute('SpSignIn').then(function (recordsets) {

                console.log(recordsets.recordset);
                res.json(recordsets.recordset);

            });
        });
    }
    catch (e) {
        res.json(e);
    }

});

app.post('/ForgetPassword', function (req, res) {
    //debugger;
    var data = {
        kanEmail: req.body[0].kanEmail
    };
   
    try {
        var conn = new mssql.ConnectionPool(config);

        conn.connect().then(function () {
            var request = new mssql.Request(conn);

            request.input('kanEmail', mssql.NVarChar, data.kanEmail);
            request.execute('SpForgetPassword').then(function (recordsets) {

                var data = recordsets.recordset;
                var mail = data[0].kanEmail;
                var pass = data[0].kanPass;


                var kanPass = MyEncryptDecryptClass.decrypt(pass);
                console.log(kanPass);
                MyStaticEmailClass.SentMail(mail, kanPass);
              // res.json(recordsets.recordset);

            });
        });
    }
    catch (e) {
        res.json(e);
    }
   
});



var server = app.listen(app.get('port'), function () {
    console.log('listening');
});