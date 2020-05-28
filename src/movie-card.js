

     const movieCard =  () => {
        let mdata = ``;
        mdata += `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">`;
        mdata += `<div class='card-header'>${title}</div>`;
        mdata += `<div class='card-body'>`;
        mdata += `<h5 class='card-text'>${rating}</h5>`;
        mdata += `</div></div></div>`
    };

module.exports = movieCard();