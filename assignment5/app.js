#!/usr/bin/env node
"use strict";
var options = {
  host: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST'
};

var answer =["rock","paper","scissors","lizard","spock"] ;

var result;
var win = 0;
var lose = 0;
var tie = 0;
var randNum;
var reply;
var http=require("http");

//Example of code from Mozilla
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function countResult (req,res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  if(req.method === "POST"){
    randNum=getRandomInt(0,5);
    reply=answer[randNum];
    if(req.url==="/play/rock") {
    
      switch(reply) {
      case "rock":
      result="tie";
      tie++;
      break;
      case "paper":
      result="lose";
      lose++;
      break;
      case "scissors":
      result="win";
      win++;
      break;
      case "lizard":
      result="win";
      win++;
      break;
      case "spock":
      result="lose";
      lose++;
      break;
      }
  }else if (req.url==="/play/paper") {
  
    switch(reply) {
    case "rock":
    result="win";
    win++;
    break;
    case "paper":
    result="tie";
    tie++;
    break;
    case "scissors":
    result="lose";
    lose++;
    break;
    case "lizard":
    result="lose";
    lose++;
    break;
    case "spock":
    result="win";
    win++;
    break;
    }
  } else if(req.url==="/play/scissors") {
  
      switch(reply) {
      case "rock":
      result="lose";
      lose++;
      break;
      case "paper":
      result="win";
      win++;
      break;
      case "scissors":
      result="tie";
      tie++;
      break;
      case "lizard":
      result="win";
      win++;
      break;
      case "spock":
      result="lose";
      lose++;
      break;
      }
    } else if (req.url==="/play/lizard") {
  
      switch(reply) {
      case "rock":
      result="lose";
      lose++;
      break;
      case "paper":
      result="win";
      win++;
      break;
      case "scissors":
      result="lose";
      lose++;
      break;
      case "lizard":
      result="tie";
      tie++;
      break;
      case "spock":
      result="win";
      win++;
      break;
      }
    } else if(req.url==="/play/spock") {
  
      switch(reply) {
      case "rock":
      result="win";
      win++;
      break;
      case "paper":
      result="lose";
      lose++;
      break;
      case "scissors":
      result="win";
      win++;
      break;
      case "lizard":
      result="lose";
      lose++;
      break;
      case "spock":
      result="tie";
      tie++;
      break;
      }
    }
res.write(JSON.stringify({result:result, win:win, lose:lose, tie:tie})) ;
res.end();
}
}
var server = http.createServer(countResult);
server.listen(3000);
console.log("server is listening at port 3000");