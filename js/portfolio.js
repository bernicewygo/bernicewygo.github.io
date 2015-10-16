$(function() {
	$.getJSON( "http://bernicewygo.github.io/portfolio.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) { 
		console.log(val);
		var hasDescription = "</b>";
		if (val.description != "") {
			hasDescription = "</b> - ";
		}
		items.push( "<div class='col-md-4 portfolio'><p class='title'>" + val.type +"</p><img class='image' src='img/portfolio/" + val.img + "'><b>" + val.title + hasDescription + val.description + "</div>" );
	  });
	 
	  var result = items.join( "" );
	  $( '#portfolio_entries' ).append(result);
	});
});