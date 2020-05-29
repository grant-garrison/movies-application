module.exports = {
  // fetches movies from db.json
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  // adds movies to db.json from html
  newMovies: (title, rating, genre, id) => {
    const postMovie = {title, rating, genre, id};
    const url = '/api/movies';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postMovie),
    };
    fetch(url, options)
        .then(response => response.json())
        .catch(/* handle errors */);
  },
  // removes movies from db.json based on id
  deleteMovies: (id) => {
    const url = `/api/movies/${id}`;
    const options = {
      method: 'delete',
    };
    fetch(url, options)
        .then(response => response.json())
  }

  };
