//Use moment to display the current date 

function date() {
    var presentDay = moment().format('dddd, MMMM Do');
    var displayDate = $('#currentDay');
     displayDate.text(presentDay);

    $(document)
};
//Need to save data entered in the text boxes and save to local storage

$('#saveBttn').on('click', function () {
    var value = $(this).siblings('.input').val();
    var time = $(this).parent().attr('.timeDisplay');
    localStorage.setItem(time, value);
    localStorage.getItem(time, value);
    
})

//color red represents the past hours;
//color yellow represents the currentHour
//color green represents the future hours;
//get current hour
var currentHour = now.hour();

var pastHour = currentHour -1;

var futureHour = currentHour +1;

//loop over rows
$('.row').each(function() {
//add id=“hour-” + i; to hour HTML surrounding Tags
var currentHour2 = document.querySelector('.timeDisplay' + $[i]);


if (currentHour === currentHour2){
//current
//Change background to yellow;
$('currentHour').css('background-color', 'yellow');

}
else if (currentHour >currentHour2) {
//past
//change the background color to red
$('pastHour').css('background-color', 'red');

} else {
//future
//change background color to green
$('futureHour').css('background-color', 'green');
}

/*$('input').on('click', function() {
    var value =$(this).val();
    $('#textBox').text(value);
    console.log(value)

$('#h9 .timeDisplay').val(localStorage.getItem('h9'));
$('#h10 .timeDisplay').val(localStorage.getItem('h10'));
$('#h11 .timeDisplay').val(localStorage.getItem('h11'));
$('#h12 .timeDisplay').val(localStorage.getItem('h12'));
$('#h1 .timeDisplay').val(localStorage.getItem('h1'));
$('#h2 .timeDisplay').val(localStorage.getItem('h2'));
$('#h3 .timeDisplay').val(localStorage.getItem('h3'));
$('#h4 .timeDisplay').val(localStorage.getItem('h4'));
$('#h5 .timeDisplay').val(localStorage.getItem('h5'));



$('#saveBttn').on('click', function() {
    var userInput = document.getElementById('textBox');
    for(var i =0; i<hours.length; i++);
    localStorage.setItem('hours', textBox);
    console.log(userInput)

var saveInput = document.getElementById('saveBttn');
saveBttn.addEventListener('click', saveInput, false);

});

$('input').keyup(function() {
    var value =$(this).val();
    $('#textBox').text(value);*/
})




date();





