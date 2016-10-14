var $ = require('jquery');
var Handlebars = require('handlebars');
var startPage = require('../templates/start-screen.hbs');
var charScreen = require('../templates/char-screen.hbs');


// wait for dom to be ready
(function(){

  var gameScreen = $('.page');

  gameScreen.html(startPage());


  $( ".start" ).on( "click", function(event){
    event.preventDefault();
    gameScreen.html(charScreen());
  });

}());
