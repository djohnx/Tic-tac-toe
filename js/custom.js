$(document).ready(function(){
  gameRestart();
  function gameRestart(){
    boxValue = "x btn-primary b";
    $('.boxHolder').removeClass('won');
    $('.boxHolder').html('');
    var i = 1;
    for(i=1; i<=9; i++){
      $('.boxHolder').append("<div class='span1 btn' id='b" + i + "'> + </div>");
    }
  }
  var boxValue = "x btn-primary b";
  var wonPlayer;
  $('.boxHolder .btn').live('click',function(){
    //alert($('.b').length);
    if($('.boxHolder').hasClass('won')){
      alert(wonPlayer + ' has already won this Game');
      gameRestart();
    }else if(!($(this).hasClass('x')||$(this).hasClass('o'))){
      if(boxValue === "x btn-primary b"){
        $(this).addClass(boxValue).html('X');
        boxValue = "o btn-success b";
      }else{
        $(this).addClass(boxValue).html('O');
        boxValue = "x btn-primary b";
      }
      if(
        $('#b1').hasClass('x') && $('#b2').hasClass('x') && $('#b3').hasClass('x')||
          $('#b4').hasClass('x') && $('#b5').hasClass('x') && $('#b6').hasClass('x')||
          $('#b7').hasClass('x') && $('#b8').hasClass('x') && $('#b9').hasClass('x')||
          $('#b1').hasClass('x') && $('#b4').hasClass('x') && $('#b7').hasClass('x')||
          $('#b2').hasClass('x') && $('#b5').hasClass('x') && $('#b8').hasClass('x')||
          $('#b3').hasClass('x') && $('#b6').hasClass('x') && $('#b9').hasClass('x')||
          $('#b1').hasClass('x') && $('#b5').hasClass('x') && $('#b9').hasClass('x')||
          $('#b3').hasClass('x') && $('#b5').hasClass('x') && $('#b7').hasClass('x')
        ){
        $('.boxHolder').addClass('won');
        wonPlayer = 'X';
        var xOldValue = $('#prependedInput1').val();
        var xNewValue = parseInt(xOldValue, radix) + 1;
        $('#prependedInput1').val(xNewValue);
        boxValue = "x btn-primary b";
        alert('X has won the game');
      }else if(
        $('#b1').hasClass('o') && $('#b2').hasClass('o') && $('#b3').hasClass('o')||
          $('#b4').hasClass('o') && $('#b5').hasClass('o') && $('#b6').hasClass('o')||
          $('#b7').hasClass('o') && $('#b8').hasClass('o') && $('#b9').hasClass('o')||
          $('#b1').hasClass('o') && $('#b4').hasClass('o') && $('#b7').hasClass('o')||
          $('#b2').hasClass('o') && $('#b5').hasClass('o') && $('#b8').hasClass('o')||
          $('#b3').hasClass('o') && $('#b6').hasClass('o') && $('#b9').hasClass('o')||
          $('#b1').hasClass('o') && $('#b5').hasClass('o') && $('#b9').hasClass('o')||
          $('#b3').hasClass('o') && $('#b5').hasClass('o') && $('#b7').hasClass('o')
        ){
        $('.boxHolder').addClass('won');
        wonPlayer = 'O';
        var oOldValue = $('#prependedInput2').val();
        var oNewValue = parseInt(oOldValue, radix) + 1;
        $('#prependedInput2').val(oNewValue);
        alert('O has won the game');
      }
    }else{
      alert('Already have value, please click on another box.');
    }
    if($('.b').length == 9){
      alert('Game is Tie, it will restart');
      gameRestart();
    }
  });
  $('a.refreshGame').click(function(){
    gameRestart()
  });
})