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
          data['Wline'].forEach(function(index){
            $('.square').eq(index).css("color", "red");
          });
          alert('You Win!');
        } else if ( data['WL'] === false ){
          setTimeout(function(){
            $('.square').eq(data['move']).text('O');
            data['Wline'].forEach(function(index){
              $('.square').eq(index).css("color", "red");
            });
          }, 800);
          setTimeout(function(){
            alert('You Lose!');
          }, 900);
        } else {
          setTimeout(function(){
            $('.square').eq(data['move']).text('O')
          }, 800);
        }
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
