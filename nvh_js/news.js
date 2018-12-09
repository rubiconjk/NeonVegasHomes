<!-- Begin Script

var ccNewsCallback = function(data){
	var news = data.query.results.item;
	
	document.getElementById("storyTitle1").innerHTML = '<strong>' + news[0].title + '</strong>';
	document.getElementById("storyLink1").innerHTML = '<a href="' + news[0].link + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("storyDate1").innerHTML = news[0].pubDate;
	
	document.getElementById("storyTitle2").innerHTML = '<strong>' + news[1].title + '</strong>';
	document.getElementById("storyLink2").innerHTML = '<a href="' + news[1].link + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("storyDate2").innerHTML = news[1].pubDate;
	
	document.getElementById("storyTitle3").innerHTML = '<strong>' + news[2].title + '</strong>';
	document.getElementById("storyLink3").innerHTML = '<a href="' + news[2].link + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("storyDate3").innerHTML = news[2].pubDate;
	
	document.getElementById("storyTitle4").innerHTML = '<strong>' + news[3].title + '</strong>';
	document.getElementById("storyLink4").innerHTML = '<a href="' + news[3].link + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("storyDate4").innerHTML = news[3].pubDate;

	document.getElementById("storyTitle5").innerHTML = '<strong>' + news[4].title + '</strong>';
	document.getElementById("storyLink5").innerHTML = '<a href="' + news[4].link + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("storyDate5").innerHTML = news[4].pubDate;

}

// End Script -->