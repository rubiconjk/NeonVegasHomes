<!-- Begin Script

var alertCallback = function(data){
	var entry = data.query.results.feed.entry;
	var alertListLength = entry.length;
	var i;
	var alertText = "";
		
	if (alertListLength == undefined) {
		var alertText = '<h4 class="text-center"><span class="label label-primary">There are no weather alerts at this time</span></h4>'
	}
	
	if (alertListLength != undefined) {
	
		for (i = 0; i < alertListLength; i++) {
			alertText += 
				'<h3 class="text-left"><span class="label label-danger">' + entry[i].event + '</span></h3>' + 
				'<p class="text-left"><strong>' + entry[i].title + '</strong><br>' + '</p>' + 
				'<p class="text-left">' + entry[i].summary + '</p>' + 
				'<p class="text-left"><a href="' + entry[i].id + '" target = "_blank">Link to full advisory</a></p><hr>';
		};
	};
		
	document.getElementById("alerts").innerHTML = alertText;
	
}
	
// End Script -->