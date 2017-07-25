$('.square').click(function(){
  if ($(this).text() != 'X' && $(this).text() != 'O') {
    let move = $('.square').index($(this));
    let board = $('.square').text();
    // debugger;
    $.ajax({
      url: "http://ec2-50-112-145-55.us-west-2.compute.amazonaws.com/api/v1/bot/",
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({board: board, move: move}),
      success: function ( data ) {
        $('.square').each( function ( idx ){
          $(this).text(data['board'].charAt(idx));
        });
        if(data['WL'] === true) {
          alert('You Win!');
        } else if ( data['WL'] === false ){
          alert('You Lose!');
        }
        console.log(data['move']);
        setTimeout(function(){
          $('.square').eq(data['move']).text('O')
        }, 1000);
      },
      error: function(){
        console.log("Cannot get data");
      }
    });
  }
});

function renderBoard(data) {
  $squares = $
}
