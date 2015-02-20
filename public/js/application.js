turn = "red"
$(document).ready(function() {
	var redTile = "<div class='red_tile'></div>"
	var blackTile = "<div class='black_tile'></div>"
	var redPiece = "<button class='piece' name='red'></button>"
	var blackPiece = "<button class='piece' name='black'></button>"

	var containerWidth = $('.table-top').width()
	$('.table-top').css("height", containerWidth)
	$('.table-top').css("width", containerWidth)
	for (var i=0; i<4; i++){
		for (var x=0; x<4; x++) {
		  $('.table-top').append(redTile)
		  $('.table-top').append(blackTile)
		};
		for (var x=0; x<4; x++) {
		  $('.table-top').append(blackTile)
		  $('.table-top').append(redTile)
		};
	}
	for (var i=0; i<12; i++){
		$('.black_tile').eq(i).append(blackPiece);
	}
	for (var i=20; i<32; i++){
		$('.black_tile').eq(i).append(redPiece);
	}

	$(document).on( "click", ".piece", function(event) {

		if ($(event.target).attr('class') === 'piece'){
			console.log("piece clicked");
  		$(event.target).remove();
		}
	});

// Placing Red Pieces - can not be placed where one already exists
	$(document).on( "click", '.black_tile', function(event) {
		if ($(event.target).attr('class') === 'black_tile'){
			if ($(event.target).children().attr('class') === 'piece' || $(event.target).children().attr('class') === 'black_piece')
		{} else {
			console.log("success");
  		$(event.target).append(redPiece);
		}}
	});
});
