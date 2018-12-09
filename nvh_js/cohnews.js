<!-- Begin Script

var cohNewsCallback = function(data){
	var news = data.query.results.item;
	
	document.getElementById("cohStoryTitle1").innerHTML = '<strong>' + news[0].title + '</strong>';
	document.getElementById("cohStoryLink1").innerHTML = '<a href="' + news[0].origLink + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("cohStoryDate1").innerHTML = news[0].pubDate;
	
	document.getElementById("cohStoryTitle2").innerHTML = '<strong>' + news[1].title + '</strong>';
	document.getElementById("cohStoryLink2").innerHTML = '<a href="' + news[1].origLink + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("cohStoryDate2").innerHTML = news[1].pubDate;

	document.getElementById("cohStoryTitle3").innerHTML = '<strong>' + news[2].title + '</strong>';
	document.getElementById("cohStoryLink3").innerHTML = '<a href="' + news[2].origLink + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("cohStoryDate3").innerHTML = news[2].pubDate;

	document.getElementById("cohStoryTitle4").innerHTML = '<strong>' + news[3].title + '</strong>';
	document.getElementById("cohStoryLink4").innerHTML = '<a href="' + news[3].origLink + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("cohStoryDate4").innerHTML = news[3].pubDate;
	
	document.getElementById("cohStoryTitle5").innerHTML = '<strong>' + news[4].title + '</strong>';
	document.getElementById("cohStoryLink5").innerHTML = '<a href="' + news[4].origLink + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("cohStoryDate5").innerHTML = news[4].pubDate;

}

// End Script -->