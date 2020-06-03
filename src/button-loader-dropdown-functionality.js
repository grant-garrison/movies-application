const $ = require('jquery');

const loaderShow = () => $('#loader').show();

const loaderHide = () => $('#loader').hide();

const enableAddMovieButton = () => {$('.enter').prop('disabled', false);};

const disableAddMovieButton = () =>  $('.enter').on('click', function () {
    $(this).prop("disabled", true);
});

const dropDownNameChange = () => $('.menu-options').click(function () {
    $("#menu").text($(this).text());
    $("#menu").val($(this).text());
});

const emptyMovieDiv = () => $('#movies').empty();

module.exports = {loaderShow, enableAddMovieButton, loaderHide, dropDownNameChange, disableAddMovieButton, emptyMovieDiv };