turn = "red"

$(document).ready(function() {
	var redTile = "<div class='red tile'></div>"
	var blackTile = "<div class='black tile'></div>"
	var redPiece = "<div class='piece' name='red'></div>"
	var blackPiece = "<div class='piece' name='black'></div>"

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
		$('.black').eq(i).append(blackPiece);
	}
	for (var i=20; i<32; i++){
		$('.black').eq(i).append(redPiece);
	}

	// $( function() {
	// 	$('.piece').draggable();
	// 	$('')

	// });

	$(document).on( "click", ".piece", function(event) {
		console.log(event.target.id)
		if ( event.target.id !== "selected" && event.altKey === true ) {
			$(event.target).remove();
		}
		if ($(event.target).attr('class') === 'piece'){
			console.log("piece clicked");
			$('#selected').removeAttr("id")
  		$(event.target).attr("id","selected");
		}
	});

// Moving Pieces - can not be placed where one already exists
	$(document).on( "click", ".black", function(event) {
		if ($(event.target).attr('class') === 'black tile'){
			if ($(event.target).children().attr('class') === 'piece'){
			} else {
			var movingPiece = $('#selected');
  		$('#selected').remove();
  		$(event.target).append(movingPiece);
		}}
	});




});
