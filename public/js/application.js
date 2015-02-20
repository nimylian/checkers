turn = "one"

$(document).ready(function() {

	var redTile = "<div class='red_tile'></div>"
	var blackTile = "<div class='black_tile'></div>"
	var redPiece = "<button class='red_piece'></button>"
	var blackPiece = "<button class='black_piece'></button>"

	var containerWidth = $('.container').width()
	$('.container').css("height", containerWidth)
	$('.container').css("width", containerWidth)
	for (var i=0; i<4; i++){
		for (var x=0; x<4; x++) {
		  $('.container').append(redTile)
		  $('.container').append(blackTile)
		};
		for (var x=0; x<4; x++) {
		  $('.container').append(blackTile)
		  $('.container').append(redTile)
		};
	}
	for (var i=0; i<12; i++){
		$('.black_tile').eq(i).append(blackPiece);
	}
	for (var i=20; i<32; i++){
		$('.black_tile').eq(i).append(redPiece);
	}
	
	$(document).on( "click", ".red_piece", function(event) {

		if ($(event.target).attr('class') === 'red_piece'){ 
			console.log("red piece clicked");
  		$(event.target).remove();
		}
	});



// Placing Red Pieces - can not be placed where one already exists
	$(document).on( "click", '.black_tile', function(event) {
		if ($(event.target).attr('class') === 'black_tile'){
			if ($(event.target).children().attr('class') === 'red_piece' || $(event.target).children().attr('class') === 'black_piece')
		{} else {
			console.log("success");
  		$(event.target).append(redPiece);
		}}
	});

});
