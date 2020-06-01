import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const $ = require('jquery');
/**
 * es6 modules and imports
 */
// import sayHello from './hello';
// sayHello('World');
/**
 * require style imports
 */
const {getMovies, newMovies, deleteMovies} = require('./api.js');
const {movieCard, starRating} = require('./movie-card.js');
const {loaderShow, enableAddMovieButton, loaderHide, dropDownNameChange, disableAddMovieButton, emptyMovieDiv} = require('./functionality.js');
const {modal} = require('./modal.js');
const {star} = require('./star.js');

// module for functionality for modal rating stars
star();

//starts loader on page start
loaderShow();

// function that fetches movies for db.json
let loadMovies = () => {

    //enable add movie button
    disableAddMovieButton();

    getMovies().then((movies) => {
        // empties the movie div
        emptyMovieDiv();

        //shows the loader
        loaderShow();

        console.log('Here are all the movies:');
        //fetches movies by title, rating, genre and id

        movies.forEach(({title, rating, genre, id}) => {
            //puts movie titiel, rating, genre, id in a html card
            let cards = movieCard(title, rating, genre, id);
            // console.log(cards);
            console.log(`id#${id} - ${title} - rating: ${rating}`);

            //enables add movie button
            enableAddMovieButton();

            //attaches movie cards to movies div
            $('#movies').append(cards);

            //hides the loader
            loaderHide();
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
};
//activates above function
loadMovies();


//searches movies based on dropdown filter and movie attributes
$('.enter').click(function (e) {
    e.preventDefault();
    // movies.forEach(({title, rating, genre, id}) => {
    //gets value and puts into a object based on keyup of respective input
    let titleObject = $('.title').keyup(function () {
    });
    // let ratingObject = $('.rating').keyup(function () {
    // });
    let genreObject = $('.genre').keyup(function () {
    });
    //gets star object
    let rating1 = $('#stars').children().click(function () {
    });
    // console.log(rating1);
    //
    // console.log(rating1[0].className);
    // console.log(rating1[1].className);
    // console.log(rating1[2].className);
    // console.log(rating1[3].className);
    // console.log(rating1[4].className);
    //counts the number of selected stars in object
    let starCount = () => {
        let count = 0;
        for (let i = 0; i < rating1.length; i += 1) {
            if(rating1[i].className == 'star selected'){
                count += 1;
            }
        }
        return count;
    };
    console.log(starCount());

    let title = titleObject.val();
    let rating = starCount().toString();
    let genre = genreObject.val();

    console.log(title, titleObject);
    //puts new movie into db.json
    newMovies(title, rating, genre);
    console.log(titleObject);

    //fetches movies for db.json
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
//changes value of dropdown to selected value
dropDownNameChange();

// functionality for search bar
$(document).ready(function () {

    //based on keyup in search input
    $('#search').keyup(function () {

        //makes html of movies empty
        $('#movies').html('');

        //fetches movies
        getMovies().then((movies) => {

            //empty div again? Need to check later
            emptyMovieDiv();

            console.log('Here are all the movies:');

            //filters movies based on attributes
            movies.forEach(({title, rating, genre, id}) => {

                //gets dropdown value
                var dropMovie = $('#menu').val();

                //gets search value
                var searchField = $('#search').val();

                //puts search value in an expression
                var expression = new RegExp(searchField, "i");

                //puts movie in card not necessary check later
                let cards = movieCard(title, rating, genre, id);

                //code for filter based on dropdown value and movie attributes
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
                } else if (dropMovie === 'Rating') {
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

