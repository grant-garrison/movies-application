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
const {movieCard} = require('./movie-card.js');
const {loaderShow, enableAddMovieButton, loaderHide, dropDownNameChange, disableAddMovieButton, emptyMovieDiv} = require('./button-loader-dropdown-functionality.js');
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

    //gets value and puts into a object based on keyup of respective input
    let titleObject = $('.title').keyup(function () {});
    let genreObject = $('.genre').keyup(function () {});
    //gets star object
    let rating1 = $('#stars').children().click(function () {});

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

    //fetches movies from db.json
    loadMovies();
});

// functionality for the delete button
$(document).on('click', '.delete', function (e) {

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


    $('#search').keyup(function () {

        //makes html of movies empty
        $('#movies').html('');

        //fetches movies
        getMovies().then((movies) => {

            //empty div again? Need to check later
            emptyMovieDiv();

            console.log('Here are all the movies:');

            movies.forEach(({title, rating, genre, id}) => {

                //gets dropdown value
                let dropMovie = $('#menu').val();
                let searchField = $('#search').val();
                let expression = new RegExp(searchField, "i");

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

