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
const {getMovies, newMovies, deleteMovies} = require('./api.js');
const {movieCard} = require('./movie-card.js');


$('#loader').show();

let loadMovies = () => {
    getMovies().then((movies) => {
        $('#movies').empty();
        $('#loader').show();
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, genre, id}) => {
            let cards = movieCard(title, rating, genre, id);
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
};
loadMovies();
$('.enter').click(function (e) {
    // $('#loader').show();
    // $('#movies').hide();
    e.preventDefault();
    // movies.forEach(({title, rating, genre, id}) => {
        let titleObject = $('.title').keyup(function () {
    });
    let ratingObject = $('.rating').keyup(function () {
    });
    let genreObject = $('.genre').keyup(function(){
    });

    let title = titleObject.val();
    let rating = ratingObject.val();
    let genre = genreObject.val();
    // let card = movieCard(title.val(), rating.val(), genre.val());
    // function appendMovie() {
    //     $('#movies').append(card);
    //     $('#movies').show();
    //     $('#loader').hide();
    // }
    // setTimeout(appendMovie, 2000)
        console.log(title, titleObject);
    console.log(newMovies(title, rating, genre));
    console.log(titleObject);
    loadMovies();
});

// functionality for the delete button
$(document).on('click','.delete', function(e) {
    console.log(e.target);

        // deleteMovies(index);


    // $('.cardz').remove();
    //     $(this).parent().parent().remove();

        // console.log('test')
});


