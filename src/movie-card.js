// adds checked class to star rating
function addChecked (rating) {
    let one = '';
    let two = '';
    let three = '';
    let four = '';
    let five = '';
    if(rating === '1'){
        one += 'checked';
    } else if(rating === '2') {
        one += 'checked';
        two += 'checked';
    } else if (rating === '3'){
        one += 'checked';
        two += 'checked';
        three += 'checked';
    } else if (rating === '4'){
        one += 'checked';
        two += 'checked';
        three += 'checked';
        four += 'checked';
    } else if (rating === '5'){
        one += 'checked';
        two += 'checked';
        three += 'checked';
        four += 'checked';
        five += 'checked';
    }
    let ratingdata = `<div class='rating-stars pl-3'>
                        <ul id='stars1' class="row list-unstyled">
                            <li class='star' title='Poor' data-value='1'>
                                <i class='fa fa-star fa-fw ${one}'></i>
                            </li>
                            <li class='star' title='Fair' data-value='2'>
                                <i class='fa fa-star fa-fw ${two}'></i>
                            </li>
                            <li class='star' title='Good' data-value='3'>
                                <i class='fa fa-star fa-fw ${three}'></i>
                            </li>
                            <li class='star' title='Excellent' data-value='4'>
                                <i class='fa fa-star fa-fw ${four}'></i>
                            </li>
                            <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw ${five}'></i>
                            </li>
                        </ul>
                    </div>`;
    return ratingdata;
}



let starRating = (rating) =>{
  if(rating === "1"){
      return addChecked(rating);

  } else if (rating === "2"){
      return addChecked(rating);
  } else if (rating === "3"){
      return addChecked(rating);
  } else if(rating === "4") {
      return addChecked(rating);
  } else if(rating === "5"){
      return addChecked(rating);
  }
};
     const movieCard =  (title, rating, genre, id) => {
        let stars = starRating(rating);
        let Mdata = ``;
        Mdata += `<div class="col-sm-3  cardz m-2 bg-dark >`;
        Mdata += `<div class="card "  style="width: 18rem ;">`;
        Mdata += `<div class='card-body bg-dark'>`;
        Mdata += `<h5 class='card-header'>${title}</h5>`;
        Mdata += `<img src="/img/movie_poster.jpg" class="card-img-top" alt="...">`;
        Mdata += stars;
        Mdata += `<h5 class="card-text">${genre}</h5>`;
        Mdata += `<h5 class="card-text" style="display: none;">${id}</h5>`;
        Mdata += `<button type="button" data-id="${id}" class="card text-danger delete float-right mb-3">DELETE</button>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
        Mdata += `</div>`;
         return Mdata
    };

module.exports = {movieCard, starRating};
