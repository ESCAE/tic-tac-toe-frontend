$('.square').click(function(){
  if ($(this).text() != 'X' && $(this).text() != 'O') {
    let move = $('.square').index($(this));
    let board = $('.square').text();
    // debugger;
    $.ajax({
      url: "/api/v1.0/move",
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
        console.log($('.square').get(data['move']));
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
