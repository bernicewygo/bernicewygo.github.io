var index = -1; 
var show = 0; 
var perpage = 6; 

$(function() {
	
	$.getJSON( "http://bernicewygo.github.io/portfolio.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) {
		index++;  
		var hasDescription = "</b>";
		var link = val.img; 
		if (val.description != "") {
			hasDescription = "</b> - ";
		}
		if (val.link != "") {
			link = val.link;
		}

		if (key < perpage) {
			items.push( "<div class='col-sm-4 portfolio' id='item" + key + "'><p class='title'>" + val.type +"</p><a href='img/portfolio/" + link + "' data-lightbox='item" + key + "'><img class='image' src='img/portfolio/" + val.img + "'></a><strong>" + val.title + '</strong>' + hasDescription + val.description + "</div>" );
		} else {
			items.push( "<div class='col-sm-4 portfolio hide' id='item" + key + "'><p class='title'>" + val.type +"</p><a href='img/portfolio/" + link + "' data-lightbox='item" + key + "'><img class='image' src='img/portfolio/" + val.img + "'></a><strong>" + val.title + '</strong>' + hasDescription + val.description + "</div>" );

		}
	  });
	 
	  var result = items.join( "" );
	  $( '#portfolio_entries' ).append(result);
	});
});

remove('#minus3'); 
if (index < perpage)
	remove('#plus3'); 


$('#plus3').click(function(){
	var counter = 0; 
	for (var i = 0; i < perpage; i++) {
		var name = '#item' + (show + i);
		remove(name);  
	}
	show += perpage; 
	while ( (index - show) >= 0) {
		var name = '#item' + show; 
		if (counter > perpage) {
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
	for (var i = 0; i < perpage; i++) {
		var name = '#item' + (show - i);
		remove(name);  
	}
	show -= perpage - 1; 
	console.log(show); 
	while ( show >= 0) {
		var name = '#item' + (show + counter); 
		if (counter > perpage) {
			break; 
		}
		add(name); 
		counter++;
	}
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