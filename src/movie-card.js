
let starRating = (rating) =>{
  if(rating === "1"){
     return `<div class='rating-stars pl-3'>
                        <ul id='stars1' class="row list-unstyled">
                            <li class='star' title='Poor' data-value='1'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Fair' data-value='2'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                            <li class='star' title='Good' data-value='3'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                            <li class='star' title='Excellent' data-value='4'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                            <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                        </ul>
                    </div>`
  } else if (rating === "2"){
     return `<div class='rating-stars pl-3'>
                        <ul id='stars1' class="row list-unstyled">
                            <li class='star' title='Poor' data-value='1'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Fair' data-value='2'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Good' data-value='3'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                            <li class='star' title='Excellent' data-value='4'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                            <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                        </ul>
                    </div>`
  } else if (rating === "3"){
    return `<div class='rating-stars pl-3'>
                        <ul id='stars1' class="row list-unstyled">
                            <li class='star' title='Poor' data-value='1'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Fair' data-value='2'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Good' data-value='3'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Excellent' data-value='4'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                            <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                        </ul>
                    </div>`
  } else if(rating === "4") {
    return `<div class='rating-stars pl-3'>
                        <ul id='stars1' class="row list-unstyled">
                            <li class='star' title='Poor' data-value='1'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Fair' data-value='2'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Good' data-value='3'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Excellent' data-value='4'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw'></i>
                            </li>
                        </ul>
                    </div>`
  } else if(rating === "5"){
     return `<div class='rating-stars pl-3'>
                        <ul id='stars1' class="row list-unstyled">
                            <li class='star' title='Poor' data-value='1'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Fair' data-value='2'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Good' data-value='3'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='Excellent' data-value='4'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                            <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw checked'></i>
                            </li>
                        </ul>
                    </div>`
  }
};
     const movieCard =  (title, rating, genre, id) => {
        let stars = starRating(rating);
        let Mdata = ``;
        Mdata += `<div class="col-sm-3  cardz m-2 bg-dark >`;
        Mdata += `<div class="card "  style="width: 18rem ;">`;
        Mdata += `<div class='card-body bg-dark'>`;
        Mdata += `<div class='card-header'>${title}</div>`;
        Mdata += `<img src="/img/movie_poster.jpg" class="card-img-top" alt="...">`;
        Mdata += stars;
        Mdata += `filler function`;
        Mdata += `<h5 class="card-text">${genre}</h5>`;
        Mdata += `<h5 class="card-text" style="display: none;">${id}</h5>`;
        Mdata += `<button type="button" data-id="${id}" class="card text-danger delete">DELETE</button>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
         return Mdata
    };

module.exports = {movieCard, starRating};
