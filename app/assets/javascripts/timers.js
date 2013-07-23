$(document).ready(function (){

var numbers = [];
var timer = null;

//Timer stuff
var start_timer = function () {
  timer = setInterval(generate_random_number, 5);
};

var stop_timer = function () {
  clearInterval(timer);
};

var generate_random_number = function () {
  var number = _.random(0, 1000);
  numbers.push(number);
  create_number_box(number)
}

  $('#start').click(start_timer);
  $('#stop').click(stop_timer);


// Number stuff
var add_number = function() {
  // Extract number and add to our array
  var number = parseInt($('#number').val());
  numbers.push(number);

  // Create a new box for our new number
  create_number_box(number);
  $('#number').val('');
  $('#number').focus();

  };

  $('#add_number').click(add_number);

  var square = function () {
    empty_boxes();
    numbers = _.map(numbers, function (n) {
      return n * n;
    });
    show_boxes();
  };

  var empty_boxes = function () {
    $('#boxes').empty();
  };

  var show_boxes = function () {
    _.each(numbers, create_number_box);
  };

  var create_number_box = function (n) {
    var $box = $('<div/>').addClass('box');
    $box.text(n);
    $('#boxes').prepend($box);
  };

  $('#square').click(square);

  var generic_function = function () {
    empty_boxes();
    numbers = _.map(numbers, funky_calc);
    show_boxes();
  };

  var funky_calc = function (i) {
    var equation = $('#number').val();
    return eval(equation);
  }

  $('#fn').click(generic_function);

});





