import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');


/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    // let mdata = '';
    // mdata +=
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
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
