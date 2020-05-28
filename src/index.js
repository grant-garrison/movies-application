import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const $ = require('jquery');
/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');


/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const {movieCard} = require('./movie-card.js');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        let cards = movieCard(title, rating);
        console.log(cards);
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        $('#movies').append(cards);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


$('.enter').click(function (e) {
    e.preventDefault();
    var title = $('.title').keyup(function () {
    });
    var rating = $('.rating').keyup(function () {
    });
    let card = movieCard(title.val(), rating.val());
    $('#movies').append(card);

  console.log(card);
  console.log(title.val());
  console.log(rating.val());
  console.log('hello');
  console.log($('.enter').html());
});



//----Loading Message----
// $(document).ajaxStart(function(){
//   // Show image container
//   $("#loader").show();
// });
// $(document).ajaxComplete(function(){
//   // Hide image container
//   $("#loader").hide();
// });
