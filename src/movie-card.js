

     const movieCard =  (title, rating) => {
        let Mdata = ``;
        Mdata += `<div class="col-sm-3 bg-dark>`;
        Mdata += `<div class="card"  style="max-width: 18rem;">`;
        Mdata += `<div class='card-body bg-dark'>`;
        Mdata += `<div class='card-header'>${title}</div>`;
        Mdata += `<h5 class='card-text'>${rating}</h5>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
         return Mdata
    };



module.exports = {movieCard};
