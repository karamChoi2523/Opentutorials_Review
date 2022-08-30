var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'rkfka2523',
    database:'opentutorials',
    port:3307
  });

  db.connect();

  //export
  //module.exports : 외부로 꺼낼 API가 하나인 경우
  module.exports = db;