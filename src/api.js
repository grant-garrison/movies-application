module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  newMovies: (title, rating, genre) => {
    const postMovie = {title, rating, genre};
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
  }
};