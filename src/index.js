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
const {disableForm} = require('./disable');
const {modal} = require('./modal.js');
const {star} = require('./star.js');

//modal
// modal();
// disableForm();
star();

$('#loader').show();

let loadMovies = () => {
    let enable = () => {
        $('.enter').prop('disabled', false);
    };
    $('.enter').on('click', function () {
        $(this).prop("disabled", true);
    });
    getMovies().then((movies) => {
        $('#movies').empty();
        $('#loader').show();
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, genre, id}) => {
            let cards = movieCard(title, rating, genre, id);
            console.log(cards);
            console.log(`id#${id} - ${title} - rating: ${rating}`);

            // function appendMovies() {
            enable();
            $('#movies').append(cards);
            $('#loader').hide();
            // }

            // setTimeout(appendMovies, 2000);

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
    let genreObject = $('.genre').keyup(function () {
    });

    let title = titleObject.val();
    let rating = ratingObject.val();
    let genre = genreObject.val();

    console.log(title, titleObject);
    console.log(newMovies(title, rating, genre));
    console.log(titleObject);
    loadMovies();
});

// functionality for the delete button
$(document).on('click', '.delete', function (e) {
    // console.log((e.target));
    // target property pinpoints the event happening
    let dataId = $(e.target).attr("data-id");
    //removes movie based on id
    deleteMovies(dataId);
    // not sure how this is working but it is. Ask about this.
    $('.delete').prop("disabled", true);
    //reloads movies
    loadMovies();
});

$('.menu-options').click(function () {
    $("#menu").text($(this).text());
    $("#menu").val($(this).text());
});

$(document).ready(function () {
    $('#search').keyup(function () {
        $('#movies').html('');
        getMovies().then((movies) => {
            $('#movies').empty('');
            console.log('Here are all the movies:');
            movies.forEach(({title, rating, genre, id}) => {
                var dropMovie = $('#menu').val();
                var searchField = $('#search').val();
                var expression = new RegExp(searchField, "i");
                let cards = movieCard(title, rating, genre, id);
                if (dropMovie === '' || dropMovie === 'All movies') {
                    if (title.search(expression) != -1 || genre.search(expression) != -1 || rating.search(expression) != -1) {
                        $('#movies').append(movieCard(title, rating, genre, id));
                    }
                } else if (dropMovie === 'Title') {
                    if (title.search(expression) != -1) {
                        $('#movies').append(movieCard(title, rating, genre, id));
                    }
                } else if (dropMovie === 'Genre') {
                    if (genre.search(expression) != -1) {
                        $('#movies').append(movieCard(title, rating, genre, id));
                    }
                }  else if (dropMovie === 'Rating') {
                    if (rating.search(expression) != -1) {
                        $('#movies').append(movieCard(title, rating, genre, id));
                    }
                }
                    console.log(cards);
                console.log(`id#${id} - ${title} - rating: ${rating}`);
            });
        }).catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
        });
    })
});
