<!-- Begin Script

var clvNewsCallback = function(data){
	var news = data.query.results.entry;
	
	document.getElementById("clvStoryTitle1").innerHTML = '<strong>' + news[0].title.content + '</strong>';
	document.getElementById("clvStoryLink1").innerHTML = '<a href="' + news[0].link.href + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("clvStoryDate1").innerHTML = news[0].updated;

	document.getElementById("clvStoryTitle2").innerHTML = '<strong>' + news[1].title.content + '</strong>';
	document.getElementById("clvStoryLink2").innerHTML = '<a href="' + news[1].link.href + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("clvStoryDate2").innerHTML = news[1].updated;

	document.getElementById("clvStoryTitle3").innerHTML = '<strong>' + news[2].title.content + '</strong>';
	document.getElementById("clvStoryLink3").innerHTML = '<a href="' + news[2].link.href + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("clvStoryDate3").innerHTML = news[2].updated;

	document.getElementById("clvStoryTitle4").innerHTML = '<strong>' + news[3].title.content + '</strong>';
	document.getElementById("clvStoryLink4").innerHTML = '<a href="' + news[3].link.href + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("clvStoryDate4").innerHTML = news[3].updated;

	document.getElementById("clvStoryTitle5").innerHTML = '<strong>' + news[4].title.content + '</strong>';
	document.getElementById("clvStoryLink5").innerHTML = '<a href="' + news[4].link.href + '" target="_blank" class="text-info"><em>Link to article</em></a>';
	document.getElementById("clvStoryDate5").innerHTML = news[4].updated;

	
}

// End Script -->