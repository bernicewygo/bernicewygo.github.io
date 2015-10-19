var index = -1; 
var show = 0; 

$(function() {
	
	$.getJSON( "http://bernicewygo.github.io/portfolio.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) {
		index++;  
		var hasDescription = "</b>";
		if (val.description != "") {
			hasDescription = "</b> - ";
		}
		if (key < 3) {
			items.push( "<div class='col-sm-4 portfolio' id='item" + key + "'><p class='title'>" + val.type +"</p><img class='image' src='img/portfolio/" + val.img + "'><b>" + val.title + hasDescription + val.description + "</div>" );
		} else {
			items.push( "<div class='col-sm-4 portfolio hide' id='item" + key + "'><p class='title'>" + val.type +"</p><img class='image' src='img/portfolio/" + val.img + "'><b>" + val.title + hasDescription + val.description + "</div>" );

		}
	  });
	 
	  var result = items.join( "" );
	  $( '#portfolio_entries' ).append(result);
	});
});

$('#minus3').addClass('hide'); 


$('#plus3').click(function(){
	var counter = 0; 
	for (var i = 0; i < 3; i++) {
		var name = '#item' + (show + i);
		remove(name);  
	}
	show += 3; 
	while ( (index - show) >= 0) {
		var name = '#item' + show; 
		if (counter > 3) {
			break; 
		}
		add(name); 
		counter++;
		show++; 
	}
	show--; 
	if ($('#minus3').hasClass('hide'))
		add('#minus3');
	if (index == show)
		remove(this); 
}); 

$('#minus3').click(function(){
	var counter = 0; 
	for (var i = 0; i < 3; i++) {
		var name = '#item' + (show - i);
		remove(name);  
	}
	show -= 2; 
	while ( show >= 0) {
		var name = '#item' + show; 
		if (counter > 3) {
			break; 
		}
		add(name); 
		counter++;
		show--; 
	}
	show++; 
	if ($('#plus3').hasClass('hide'))
		add('#plus3');
	if (0 == show)
		remove(this); 
}); 

function remove(n) {
	$(n).addClass('hide');		
}
function add(n) {
	$(n).removeClass('hide');
}