import $ from 'jquery';
import'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import {Game, Player} from './game.js';

$(document).ready(function() {
  $('#create-player').submit(function(event) {
    event.preventDefault();
    const playerName = $('#playerName').val();
    const playerType = $('#playerType').val();
  });
})