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

$('#loader').show();
getMovies().then((movies) => {
   $('#loader').show();
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        let cards = movieCard(title, rating);
        console.log(cards);
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        function appendMovies() {
            $('#movies').append(cards);
            $('#loader').hide();
        }
        setTimeout(appendMovies, 2000);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


$('.enter').click(function (e) {
    $('#loader').show();
    $('#movies').hide();
    e.preventDefault();
    var title = $('.title').keyup(function () {
    });
    var rating = $('.rating').keyup(function () {
    });
    let card = movieCard(title.val(), rating.val());
    function appendMovie() {
        $('#movies').append(card);
        $('#movies').show();
        $('#loader').hide();
    }
    setTimeout(appendMovie, 2000)
});

// functionality for the delete button
$(document).on('click','.delete', function() {
    // $('.cardz').remove();
        $(this).parent().parent().remove();

    // console.log('test')
});


