$('.square').click(function(){
  if ($(this).text() != 'X' && $(this).text() != 'O') {
    let move = $('.square').index($(this));
    let board = $('.square').text();
    $.ajax({
      url: "http://ec2-50-112-145-55.us-west-2.compute.amazonaws.com/api/v1/bot/dumb/",
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({board: board, move: move}),
      success: function ( data ) {
        renderMove(data);
      },
      error: function(){
        console.log("Cannot get data");
      }
    });
  }
});

function renderMove(data) {
  $('.square').each( function ( idx ){
    $(this).text(data['board'].charAt(idx));
  });
  if(data['WL'] === true) {
    data['Wline'].forEach(function(index){
      $('.square').eq(index).css('color', 'green');
    });
    console.log('You Win!');
    $('.content').text('You Win! Tap to play again.');
    $('.game-over').toggleClass("game-over-ADDED");
  } else if ( data['WL'] === false ){
    setTimeout(function(){
      $('.square').eq(data['move']).text('O');
      data['Wline'].forEach(function(index){
        $('.square').eq(index).css('color', 'red');
      });
    }, 800);
    setTimeout(function(){
      console.log('You Lose!');
      $('.content').text('You Lose! Tap to play again.');
      $('.game-over').toggleClass("game-over-ADDED");
    }, 900);
  } else {
    setTimeout(function(){
      $('.square').eq(data['move']).text('O')
    }, 800);
  }
}

$('.game-over').click(function(){
  $('.square').each( function ( idx ){
    $(this).text(' ').css('color', '#606060');
  });
  $('.content').text('');
  $('.game-over').toggleClass("game-over-ADDED");
});
