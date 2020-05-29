

     const movieCard =  (title, rating, genre, id) => {
        let Mdata = ``;
        Mdata += `<div class="col-sm-3 bg-dark cardz >`;
        Mdata += `<div class="card mx-2"  style="width: 18rem ; height: 18rem;">`;
        Mdata += `<div class='card-body bg-dark'>`;
        Mdata += `<div class='card-header'>${title}</div>`;
        Mdata += `<h5 class='card-text'>${rating}</h5>`;
        Mdata += `<h5 class="card-text">${genre}</h5>`;
        Mdata += `<h5 class="card-text" style="display: none;">${id}</h5>`;
        Mdata += `<button type="button" data-id="${title},${rating},${genre},${id}" class="card text-danger delete">DELETE</button>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
         return Mdata
    };

module.exports = {movieCard};
