<!-- Begin Script

var OfficeListings = function(data){
	var result = data.query.results.body.span.div[3].div.form.table.tbody.tr;
	var numListings = result[0].td.div.content;
	var propListLength = result.length;
	
	var listingsText = "";
	var counter = 0;
	
	if (propListLength == undefined) {
		listingsText = 'There are no listings at this time';
	};
	
	if (propListLength != undefined) {
		
		for (i = 2;i < (propListLength - 1); i++) {
			// Only show properties with a status of "Active-Exclusive Right"
			var propStatus = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[4].td.b;
			if (propStatus == 'Active-Exclusive Right' || propStatus == 'Exclusive Agency') {
				
				// Count how many listings we have to show
				counter = counter + 1
				var propShow = '<strong>&nbsp&nbsp<span class="text-danger">Call or text: <a href="tel:+17024191888" class="text-primary">(702) 419-1888</a> for a showing</span></strong>'
				var propImage = '<img src="' + result[i].td.table.tbody.tr[0].td[0].img[0].src + '" class="img-responsive">';
				var propType = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[0].td.b;
				if (propType == 'Residential Rental') {
					propType = '<span class="label label-success">For Rent</span>';
				} else {
					propType = '<span class="label label-danger">For Sale</span>'};
				var propAddress = 'Address: ' + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[1].td.b;
				var propAmount = '<h4><strong>$' + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[2].td.b + '</strong></h4>';
				var propBeds = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[3].td.content + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[3].td.b;
				var propStatus = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[4].td.content + '<strong>' + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[4].td.b + '</strong>';
				var propYear = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[5].td.content + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[5].td.b;
				var propMLS = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[6].td.content + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[6].td.b;
				var propZip = result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[7].td.content + result[i].td.table.tbody.tr[0].td[1].table.tbody.tr[7].td.b;
				var propAgent = '<small><em>' + result[i].td.table.tbody.tr[1].td.div.table.tbody.tr.td[1] + '</em></small>';
				var propLogo = '<img src="' + result[i].td.table.tbody.tr[1].td.div.table.tbody.tr.td[0].img.src + '">';
				
				listingsText +=
				
				// Start div of listings ------------------------------------
				'<div class="row"><div class="col-sm-3">' + propImage + '</div><div class="col-sm-9">' + propType + propShow + '<br>' + propAmount + 
				propAddress + '<br>' + propBeds + '<br>' + propYear + '<br>' + propMLS + '<br>' + propZip + '<br>' + 
				propLogo + propAgent + '</div></div><hr>';
			}
		};
	};
	
	document.getElementById("listings_num").innerHTML = '<h4>Currently ' + counter + ' available properties</h4><br>';
	document.getElementById("office_listings").innerHTML = listingsText;
}

// End Script -->