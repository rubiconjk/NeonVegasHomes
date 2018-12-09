<!-- Begin Script

var bvhr_rentals = function(data){
	var rentals = data.query.results.body.main.div[1].div;
	var rentalNumber = rentals.length
	
	if (rentalNumber == undefined){
		var rentalNumber = 0;
	}
	
	if (rentalNumber != undefined){
		var rentalNumber = rentalNumber - 1; // I did this because the last list item is not needed through YQL
	}
	
	document.getElementById("rentals").innerHTML = '<h3 class="text-center">Currently <span class="label label-danger">' + rentalNumber + '</span> Office Listings</h3>';
	
}

// End Script -->