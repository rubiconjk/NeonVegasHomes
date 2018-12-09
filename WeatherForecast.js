<!-- Begin Script

var yqlCallback = function(data){
	var info = data.query.results.channel.item;
	var skyNow = info.condition.code;
	var ForecastTodayIcon = info.forecast[0].code;
	var ForecastToday1Icon = info.forecast[1].code;
	var ForecastToday2Icon = info.forecast[2].code;
	var ForecastToday3Icon = info.forecast[3].code;
	var ForecastToday4Icon = info.forecast[4].code;

	// Current atmospheric conditions
	switch (skyNow){
		case '17':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/alert.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '26':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/cloudy.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '25':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/cold.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '30':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/day_cloud.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '28':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/day_clouds.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '8':
		case '10':
		case '18':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/freezing_rain.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '2':
		case '1':
		case '35':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/heavy_rain.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '36':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/hot.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '9':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/rain.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '13':
		case '14':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/snow.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '31':
		case '34':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/fair_day.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '29':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/night_cloud.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '27':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/night_clouds.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '11':
		case '12':
		case '45':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/rain.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '40':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/scattered_rain.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '3':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/severe_thunder.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '15':
		case '16':
		case '41':
		case '43':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/heavy_snow.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '42':
		case '46':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/snow.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '32':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/sun.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '33':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/fair_night.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '44':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/day_cloud.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '37':
		case '47':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/isolated_thunder.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '38':
		case '39':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/scattered_thunder.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '43':
		case '44':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/thunderstorms.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '0':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/tornado.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '24':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/windy.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		case '5':
		case '6':
		case '7':
			document.getElementById("WxNowIcon").innerHTML = '<img src="wx_icons/wintery_mix.jpg" alt="icon" style="width:138px;height:138px">'
			break;
		default:
			document.getElementById("WxNowIcon").innerHTML = 'Error retrieving conditions!'
	}
	
	
	// Today's forecasted atmospheric conditions
	
	switch (ForecastTodayIcon){
		case '17':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/alert.jpg" alt="icon">'
			break;
		case '26':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cloudy.jpg" alt="icon">'
			break;
		case '25':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cold.jpg" alt="icon">'
			break;
		case '30':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '28':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_clouds.jpg" alt="icon">'
			break;
		case '8':
		case '10':
		case '18':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/freezing_rain.jpg" alt="icon">'
			break;
		case '2':
		case '1':
		case '35':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_rain.jpg" alt="icon">'
			break;
		case '36':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/hot.jpg" alt="icon">'
			break;
		case '9':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '13':
		case '14':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '31':
		case '34':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_day.jpg" alt="icon">'
			break;
		case '29':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_cloud.jpg" alt="icon">'
			break;
		case '27':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_clouds.jpg" alt="icon">'
			break;
		case '11':
		case '12':
		case '45':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '40':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_rain.jpg" alt="icon">'
			break;
		case '3':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/severe_thunder.jpg" alt="icon">'
			break;
		case '15':
		case '16':
		case '41':
		case '43':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_snow.jpg" alt="icon">'
			break;
		case '42':
		case '46':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '32':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/sun.jpg" alt="icon">'
			break;
		case '33':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_night.jpg" alt="icon"">'
			break;
		case '44':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '37':
		case '47':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/isolated_thunder.jpg" alt="icon">'
			break;
		case '38':
		case '39':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_thunder.jpg" alt="icon">'
			break;
		case '43':
		case '44':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/thunderstorms.jpg" alt="icon">'
			break;
		case '0':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/tornado.jpg" alt="icon">'
			break;
		case '24':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/windy.jpg" alt="icon">'
			break;
		case '5':
		case '6':
		case '7':
			document.getElementById("ForecastTodayIcon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/wintery_mix.jpg" alt="icon"">'
			break;
		default:
			document.getElementById("ForecastTodayIcon").innerHTML = 'Error retrieving conditions!'
	}
	
	// Today + 1 forecasted atmospheric conditions
	
	switch (ForecastToday1Icon){
		case '17':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/alert.jpg" alt="icon"'
			break;
		case '26':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cloudy.jpg" alt="icon">'
			break;
		case '25':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cold.jpg" alt="icon">'
			break;
		case '30':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '28':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_clouds.jpg" alt="icon">'
			break;
		case '8':
		case '10':
		case '18':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/freezing_rain.jpg" alt="icon">'
			break;
		case '2':
		case '1':
		case '35':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_rain.jpg" alt="icon">'
			break;
		case '36':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/hot.jpg" alt="icon">'
			break;
		case '9':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '13':
		case '14':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '31':
		case '34':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_day.jpg" alt="icon">'
			break;
		case '29':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_cloud.jpg" alt="icon">'
			break;
		case '27':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_clouds.jpg" alt="icon">'
			break;
		case '11':
		case '12':
		case '45':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '40':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_rain.jpg" alt="icon">'
			break;
		case '3':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/severe_thunder.jpg" alt="icon">'
			break;
		case '15':
		case '16':
		case '41':
		case '43':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_snow.jpg" alt="icon">'
			break;
		case '42':
		case '46':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '32':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/sun.jpg" alt="icon">'
			break;
		case '33':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_night.jpg" alt="icon"">'
			break;
		case '44':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '37':
		case '47':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/isolated_thunder.jpg" alt="icon">'
			break;
		case '38':
		case '39':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_thunder.jpg" alt="icon">'
			break;
		case '43':
		case '44':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/thunderstorms.jpg" alt="icon">'
			break;
		case '0':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/tornado.jpg" alt="icon">'
			break;
		case '24':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/windy.jpg" alt="icon">'
			break;
		case '5':
		case '6':
		case '7':
			document.getElementById("ForecastToday1Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/wintery_mix.jpg" alt="icon">'
			break;
		default:
			document.getElementById("ForecastToday1Icon").innerHTML = 'Error retrieving conditions!'
	}

	// Today + 2 forecasted atmospheric conditions
	
	switch (ForecastToday2Icon){
		case '17':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/alert.jpg" alt="icon">'
			break;
		case '26':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cloudy.jpg" alt="icon">'
			break;
		case '25':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cold.jpg" alt="icon">'
			break;
		case '30':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '28':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_clouds.jpg" alt="icon">'
			break;
		case '8':
		case '10':
		case '18':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/freezing_rain.jpg" alt="icon">'
			break;
		case '2':
		case '1':
		case '35':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_rain.jpg" alt="icon">'
			break;
		case '36':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/hot.jpg" alt="icon">'
			break;
		case '9':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '13':
		case '14':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '31':
		case '34':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_day.jpg" alt="icon">'
			break;
		case '29':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_cloud.jpg" alt="icon">'
			break;
		case '27':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_clouds.jpg" alt="icon">'
			break;
		case '11':
		case '12':
		case '45':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '40':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_rain.jpg" alt="icon">'
			break;
		case '3':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/severe_thunder.jpg" alt="icon">'
			break;
		case '15':
		case '16':
		case '41':
		case '43':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_snow.jpg" alt="icon">'
			break;
		case '42':
		case '46':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '32':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/sun.jpg" alt="icon">'
			break;
		case '33':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_night.jpg" alt="icon">'
			break;
		case '44':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '37':
		case '47':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/isolated_thunder.jpg" alt="icon">'
			break;
		case '38':
		case '39':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_thunder.jpg" alt="icon">'
			break;
		case '43':
		case '44':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/thunderstorms.jpg" alt="icon">'
			break;
		case '0':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/tornado.jpg" alt="icon">'
			break;
		case '24':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/windy.jpg" alt="icon">'
			break;
		case '5':
		case '6':
		case '7':
			document.getElementById("ForecastToday2Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/wintery_mix.jpg" alt="icon">'
			break;
		default:
			document.getElementById("ForecastToday2Icon").innerHTML = 'Error retrieving conditions!'
	}
	
	// Today + 3 forecasted atmospheric conditions
	
	switch (ForecastToday3Icon){
		case '17':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/alert.jpg" alt="icon">'
			break;
		case '26':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cloudy.jpg" alt="icon">'
			break;
		case '25':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cold.jpg" alt="icon">'
			break;
		case '30':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '28':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_clouds.jpg" alt="icon">'
			break;
		case '8':
		case '10':
		case '18':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/freezing_rain.jpg" alt="icon">'
			break;
		case '2':
		case '1':
		case '35':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_rain.jpg" alt="icon">'
			break;
		case '36':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/hot.jpg" alt="icon"">'
			break;
		case '9':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '13':
		case '14':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '31':
		case '34':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_day.jpg" alt="icon"">'
			break;
		case '29':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_cloud.jpg" alt="icon">'
			break;
		case '27':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_clouds.jpg" alt="icon">'
			break;
		case '11':
		case '12':
		case '45':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '40':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_rain.jpg" alt="icon">'
			break;
		case '3':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/severe_thunder.jpg" alt="icon">'
			break;
		case '15':
		case '16':
		case '41':
		case '43':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_snow.jpg" alt="icon">'
			break;
		case '42':
		case '46':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '32':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/sun.jpg" alt="icon">'
			break;
		case '33':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_night.jpg" alt="icon">'
			break;
		case '44':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '37':
		case '47':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/isolated_thunder.jpg" alt="icon">'
			break;
		case '38':
		case '39':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_thunder.jpg" alt="icon">'
			break;
		case '43':
		case '44':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/thunderstorms.jpg" alt="icon">'
			break;
		case '0':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/tornado.jpg" alt="icon">'
			break;
		case '24':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/windy.jpg" alt="icon">'
			break;
		case '5':
		case '6':
		case '7':
			document.getElementById("ForecastToday3Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/wintery_mix.jpg" alt="icon">'
			break;
		default:
			document.getElementById("ForecastToday3Icon").innerHTML = 'Error retrieving conditions!'
	}
	
	// Today + 4 forecasted atmospheric conditions
	
	switch (ForecastToday4Icon){
		case '17':
		case '19':
		case '20':
		case '21':
		case '22':
		case '23':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/alert.jpg" alt="icon">'
			break;
		case '26':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cloudy.jpg" alt="icon">'
			break;
		case '25':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/cold.jpg" alt="icon">'
			break;
		case '30':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '28':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_clouds.jpg" alt="icon">'
			break;
		case '8':
		case '10':
		case '18':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/freezing_rain.jpg" alt="icon">'
			break;
		case '2':
		case '1':
		case '35':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_rain.jpg" alt="icon">'
			break;
		case '36':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/hot.jpg" alt="icon">'
			break;
		case '9':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '13':
		case '14':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '31':
		case '34':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_day.jpg" alt="icon">'
			break;
		case '29':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_cloud.jpg" alt="icon">'
			break;
		case '27':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/night_clouds.jpg" alt="icon"style="width:100px;height:100px">'
			break;
		case '11':
		case '12':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/rain.jpg" alt="icon">'
			break;
		case '40':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_rain.jpg" alt="icon">'
			break;
		case '3':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/severe_thunder.jpg" alt="icon">'
			break;
		case '15':
		case '16':
		case '41':
		case '43':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/heavy_snow.jpg" alt="icon" >'
			break;
		case '42':
		case '46':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/snow.jpg" alt="icon">'
			break;
		case '32':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/sun.jpg" alt="icon">'
			break;
		case '33':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/fair_night.jpg" alt="icon">'
			break;
		case '44':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/day_cloud.jpg" alt="icon">'
			break;
		case '37':
		case '47':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/isolated_thunder.jpg" alt="icon">'
			break;
		case '38':
		case '39':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/scattered_thunder.jpg" alt="icon">'
			break;
		case '43':
		case '44':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/thunderstorms.jpg" alt="icon">'
			break;
		case '0':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/tornado.jpg" alt="icon">'
			break;
		case '24':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/windy.jpg" alt="icon">'
			break;
		case '5':
		case '6':
		case '7':
			document.getElementById("ForecastToday4Icon").innerHTML = '<img class="img-responsive center-block" src="wx_icons/wintery_mix.jpg" alt="icon">'
			break;
		default:
			document.getElementById("ForecastToday4Icon").innerHTML = 'Error retrieving conditions!'
	}			
	
	// Get current date and conditions text
	// document.getElementById("yahooUpdate").innerHTML = "Forecast as of " + info.condition.date;
	document.getElementById("WxNowText").innerHTML = info.condition.text;
	
	// Get dates and days of the week for forecast days			
	document.getElementById("today").innerHTML = info.forecast[0].day + ', ' + info.forecast[0].date
	document.getElementById("today1").innerHTML = info.forecast[1].day + ', ' + info.forecast[1].date
	document.getElementById("today2").innerHTML = info.forecast[2].day + ', ' + info.forecast[2].date
	document.getElementById("today3").innerHTML = info.forecast[3].day + ', ' + info.forecast[3].date
	document.getElementById("today4").innerHTML = info.forecast[4].day + ', ' + info.forecast[4].date
	
	// Get forecast text
	document.getElementById("ForecastTodayText").innerHTML = info.forecast[0].text;
	document.getElementById("ForecastToday1Text").innerHTML = info.forecast[1].text;
	document.getElementById("ForecastToday2Text").innerHTML = info.forecast[2].text;
	document.getElementById("ForecastToday3Text").innerHTML = info.forecast[3].text;
	document.getElementById("ForecastToday4Text").innerHTML = info.forecast[4].text;
	
	// Get forecast highs and lows
	document.getElementById("todayHL").innerHTML = "High: " + info.forecast[0].high + "<br>Low: " + info.forecast[0].low
	document.getElementById("today1HL").innerHTML = "High: " + info.forecast[1].high + "<br>Low: " + info.forecast[0].low
	document.getElementById("today2HL").innerHTML = "High: " + info.forecast[2].high + "<br>Low: " + info.forecast[0].low
	document.getElementById("today3HL").innerHTML = "High: " + info.forecast[3].high + "<br>Low: " + info.forecast[0].low
	document.getElementById("today4HL").innerHTML = "High: " + info.forecast[4].high + "<br>Low: " + info.forecast[0].low

};

// End Script -->