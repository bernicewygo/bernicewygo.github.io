$(function() {
	$.getJSON( "http://bernicewygo.github.io/portfolio.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) { 
		  console.log(val);
		items.push( "<div class='col-md-4'>" + val.title + "</div>" );
	  });
	 
	  var result = items.join( "" );
	  $( '#portfolio_entries' ).append(result);
	});
});