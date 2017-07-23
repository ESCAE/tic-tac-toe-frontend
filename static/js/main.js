$('.square').click(function(){
  $(this).text('X');
  let board = $('.square').text();
  // debugger;
  $.ajax({
    url: "/api/v1.0/move",
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({board: board}),
    success: function (data) {
      $('.square').each( function ( idx ){
        $(this).text(data['board'].charAt(idx))
      });
    },
    error: function(){
      console.log("Cannot get data");
    }
  });
});

function renderBoard(data) {
  $squares = $
}
