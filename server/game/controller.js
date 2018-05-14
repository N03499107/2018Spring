import { request } from 'https';

var express = require('express');
var Game=requires('./model');
var app = express.Router();
//var game = new Game();
var game = new Game();
module.exports = app
    .get('/quotes',  (req, res) => res.send(game.GetQuotes))
    .get('/state', (req ,res) => res.send(game))
    .post('/picture', (req, res) => res.send( game.FlipPicture()));
