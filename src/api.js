module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
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
  deleteMovies: (id) => {
    const url = `/api/movies/${id}`;
    const options = {
      method: 'delete',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.delete(removeMovie),
    };
    fetch(url, options)
        .then(response => response.json())
  }

  };
// function gfg_Run() {
//   delete myObj.prop_1.prop_11;
//   el_down.innerHTML = JSON.stringify(myObj);