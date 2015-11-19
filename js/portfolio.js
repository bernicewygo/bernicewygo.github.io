var index = 0; 
var show = 0; 
var perpage = 6; 

$(function() {
	
	$.getJSON( "http://bernicewygo.github.io/portfolio.json", function( data ) {
	  var items = [];
	  var count = 0; 
	  $.each( data, function( key, val ) {  
		var hasDescription = "</b>";
		var link = val.img; 
		if (count == 0) {
			if (index == 0)
				items.push("<div id='page" + index + "'>");
			else
				items.push("<div class='hide' id='page" + index + "'>");
		}
		if (val.description != "") {
			hasDescription = "</b> - ";
		}
		if (val.link != "") {
			link = val.link;
		}

		items.push( "<div class='col-sm-4 portfolio' id='item" + key + "'><p class='title'>" + val.type +"</p><a href='img/portfolio/" + link + "' data-lightbox='item" + key + "'><img class='image' src='img/portfolio/" + val.img + "'></a><strong>" + val.title + '</strong>' + hasDescription + val.description + "</div>" );
		
		if (key%3 == 2) {
			items.push("<div class='clearfix visible-lg-block visible-sm-block visible-med-block'></div>");
		}
		if (count == 5) {
			count = 0; 
			index++;
			items.push("</div>"); 
		} else {
			count++; 
		} 
	  });

	  var result = items.join( "" );
	  $( '#portfolio_entries' ).append(result);
	});

});

remove('#minus3'); 



$('#plus3').click(function(){
	var page = '#page' + show;	
	remove(page); 
	show++; 
	page = '#page' + show;	
	add(page); 
	if ($('#minus3').hasClass('hide'))
		add('#minus3');
	if (index == show)
		remove(this); 
}); 

$('#minus3').click(function(){
	var page = '#page' + show;	
	remove(page); 
	show--; 
	page = '#page' + show;	
	add(page); 
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