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
		case '0':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-tornado wi-10x"></i>'
			break;
		case '1':
		case '2':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-hurricane wi-10x"></i>'
			break;
		case '3':
		case '4':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-thunderstorm wi-10x"></i>'
			break;
		case '5':
		case '6':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-rain-mix wi-10x"></i>'
			break;
		case '7':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow wi-10x"></i>'
			break;
		case '8':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-rain-mix wi-10x"></i>'
			break;
		case '9':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-sprinkle wi-10x"></i>'
			break;
		case '10':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-rain-mix wi-10x"></i>'
			break;
		case '11':
		case '12':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-rain wi-10x"></i>'
			break;
		case '13':
		case '14':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow wi-10x"></i>'
			break;
		case '15':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow-wind wi-10x"></i>'
			break;
		case '16':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow wi-10x"></i>'
			break;
		case '17':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-hail wi-10x"></i>'
			break;
		case '18':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-sleet wi-10x"></i>'
			break;
		case '19':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-dust wi-10x"></i>'
			break;
		case '20':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-fog wi-10x"></i>'
			break;
		case '21':
		case '22':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-smoke wi-10x"></i>'
			break;
		case '23':
		case '24':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-strong-wind wi-10x"></i>'
			break;
		case '25':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-thermometer-exterior wi-10x"></i>'
			break;
		case '26':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-cloudy wi-10x"></i>'
			break;
		case '27':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-night-cloudy wi-10x"></i>'
			break;
		case '28':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-cloudy wi-10x"></i>'
			break;
		case '29':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-night-partly-cloudy wi-10x"></i>'
			break;
		case '30':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-sunny-overcast wi-10x"></i>'
			break;
		case '31':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-night-clear wi-10x"></i>'
			break;
		case '32':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-sunny wi-10x"></i>'
			break;
		case '33':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-night-partly-cloudy wi-10x"></i>'
			break;
		case '34':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-sunny-overcast wi-10x"></i>'
			break;
		case '35':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-hail wi-10x"></i>'
			break;
		case '36':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-hot wi-10x"></i>'
			break;
		case '37':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-lightning wi-10x"></i>'
			break;
		case '38':
		case '39':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-thunderstorm wi-10x"></i>'
			break;
		case '40':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-showers wi-10x"></i>'
			break;
		case '41':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow wi-10x"></i>'
			break;
		case '42':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-snow wi-10x"></i>'
			break;
		case '43':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow wi-10x"></i>'
			break;
		case '44':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-cloudy wi-10x"></i>'
			break;
		case '45':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-storm-showers wi-10x"></i>'
			break;
		case '46':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-snow wi-10x"></i>'
			break;
		case '47':
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-day-lightning wi-10x"></i>'
			break;
		default:
			document.getElementById("WxNowIcon").innerHTML = '<i class="wi wi-refresh wi-10x"></i>'
	}
	
	
	// Today's forecasted atmospheric conditions
	
	switch (ForecastTodayIcon){
		case '0':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-tornado"></i>'
			break;
		case '1':
		case '2':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-hurricane"></i>'
			break;
		case '3':
		case '4':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-thunderstorm"></i>'
			break;
		case '5':
		case '6':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '7':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '8':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '9':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-sprinkle"></i>'
			break;
		case '10':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '11':
		case '12':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-rain"></i>'
			break;
		case '13':
		case '14':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '15':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow-wind"></i>'
			break;
		case '16':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '17':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '18':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-sleet"></i>'
			break;
		case '19':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-dust"></i>'
			break;
		case '20':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-fog"></i>'
			break;
		case '21':
		case '22':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-smoke"></i>'
			break;
		case '23':
		case '24':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-strong-wind"></i>'
			break;
		case '25':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-thermometer-exterior"></i>'
			break;
		case '26':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-cloudy"></i>'
			break;
		case '27':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-night-cloudy"></i>'
			break;
		case '28':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '29':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '30':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '31':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-night-clear"></i>'
			break;
		case '32':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-sunny"></i>'
			break;
		case '33':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '34':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '35':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '36':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-hot"></i>'
			break;
		case '37':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		case '38':
		case '39':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-thunderstorm"></i>'
			break;
		case '40':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-showers"></i>'
			break;
		case '41':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '42':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-snow"></i>'
			break;
		case '43':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '44':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '45':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-storm-showers"></i>'
			break;
		case '46':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '47':
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		default:
			document.getElementById("WxTodayIcon").innerHTML = '<i class="wi wi-refresh"></i>'
	}
	
	// Today + 1 forecasted atmospheric conditions
	
	switch (ForecastToday1Icon){
		case '0':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-tornado"></i>'
			break;
		case '1':
		case '2':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-hurricane"></i>'
			break;
		case '3':
		case '4':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-thunderstorm"></i>'
			break;
		case '5':
		case '6':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '7':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '8':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '9':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-sprinkle"></i>'
			break;
		case '10':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '11':
		case '12':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-rain"></i>'
			break;
		case '13':
		case '14':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '15':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow-wind"></i>'
			break;
		case '16':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '17':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '18':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-sleet"></i>'
			break;
		case '19':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-dust"></i>'
			break;
		case '20':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-fog"></i>'
			break;
		case '21':
		case '22':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-smoke"></i>'
			break;
		case '23':
		case '24':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-strong-wind"></i>'
			break;
		case '25':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-thermometer-exterior"></i>'
			break;
		case '26':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-cloudy"></i>'
			break;
		case '27':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-night-cloudy"></i>'
			break;
		case '28':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '29':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '30':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '31':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-night-clear"></i>'
			break;
		case '32':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-sunny"></i>'
			break;
		case '33':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '34':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '35':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '36':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-hot"></i>'
			break;
		case '37':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		case '38':
		case '39':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-thunderstorm"></i>'
			break;
		case '40':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-showers"></i>'
			break;
		case '41':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '42':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-snow"></i>'
			break;
		case '43':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '44':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '45':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-storm-showers"></i>'
			break;
		case '46':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '47':
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		default:
			document.getElementById("WxToday1Icon").innerHTML = '<i class="wi wi-refresh"></i>'
	}

	// Today + 2 forecasted atmospheric conditions
	
	switch (ForecastToday2Icon){
		case '0':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-tornado"></i>'
			break;
		case '1':
		case '2':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-hurricane"></i>'
			break;
		case '3':
		case '4':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-thunderstorm"></i>'
			break;
		case '5':
		case '6':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '7':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '8':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '9':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-sprinkle"></i>'
			break;
		case '10':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '11':
		case '12':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-rain"></i>'
			break;
		case '13':
		case '14':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '15':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow-wind"></i>'
			break;
		case '16':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '17':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '18':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-sleet"></i>'
			break;
		case '19':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-dust"></i>'
			break;
		case '20':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-fog"></i>'
			break;
		case '21':
		case '22':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-smoke"></i>'
			break;
		case '23':
		case '24':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-strong-wind"></i>'
			break;
		case '25':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-thermometer-exterior"></i>'
			break;
		case '26':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-cloudy"></i>'
			break;
		case '27':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-night-cloudy"></i>'
			break;
		case '28':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '29':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '30':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '31':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-night-clear"></i>'
			break;
		case '32':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-sunny"></i>'
			break;
		case '33':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '34':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '35':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '36':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-hot"></i>'
			break;
		case '37':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		case '38':
		case '39':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-thunderstorm"></i>'
			break;
		case '40':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-showers"></i>'
			break;
		case '41':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '42':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-snow"></i>'
			break;
		case '43':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '44':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '45':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-storm-showers"></i>'
			break;
		case '46':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '47':
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		default:
			document.getElementById("WxToday2Icon").innerHTML = '<i class="wi wi-refresh"></i>'
	}
	
	// Today + 3 forecasted atmospheric conditions
	
	switch (ForecastToday3Icon){
		case '0':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-tornado"></i>'
			break;
		case '1':
		case '2':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-hurricane"></i>'
			break;
		case '3':
		case '4':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-thunderstorm"></i>'
			break;
		case '5':
		case '6':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '7':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '8':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '9':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-sprinkle"></i>'
			break;
		case '10':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '11':
		case '12':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-rain"></i>'
			break;
		case '13':
		case '14':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '15':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow-wind"></i>'
			break;
		case '16':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '17':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '18':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-sleet"></i>'
			break;
		case '19':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-dust"></i>'
			break;
		case '20':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-fog"></i>'
			break;
		case '21':
		case '22':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-smoke"></i>'
			break;
		case '23':
		case '24':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-strong-wind"></i>'
			break;
		case '25':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-thermometer-exterior"></i>'
			break;
		case '26':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-cloudy"></i>'
			break;
		case '27':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-night-cloudy"></i>'
			break;
		case '28':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '29':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '30':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '31':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-night-clear"></i>'
			break;
		case '32':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-sunny"></i>'
			break;
		case '33':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '34':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '35':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '36':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-hot"></i>'
			break;
		case '37':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		case '38':
		case '39':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-thunderstorm"></i>'
			break;
		case '40':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-showers"></i>'
			break;
		case '41':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '42':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-snow"></i>'
			break;
		case '43':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '44':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '45':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-storm-showers"></i>'
			break;
		case '46':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '47':
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		default:
			document.getElementById("WxToday3Icon").innerHTML = '<i class="wi wi-refresh"></i>'
	}
	
	// Today + 4 forecasted atmospheric conditions
	
	switch (ForecastToday4Icon){
		case '0':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-tornado"></i>'
			break;
		case '1':
		case '2':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-hurricane"></i>'
			break;
		case '3':
		case '4':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-thunderstorm"></i>'
			break;
		case '5':
		case '6':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '7':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '8':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '9':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-sprinkle"></i>'
			break;
		case '10':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-rain-mix"></i>'
			break;
		case '11':
		case '12':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-rain"></i>'
			break;
		case '13':
		case '14':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '15':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow-wind"></i>'
			break;
		case '16':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '17':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '18':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-sleet"></i>'
			break;
		case '19':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-dust"></i>'
			break;
		case '20':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-fog"></i>'
			break;
		case '21':
		case '22':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-smoke"></i>'
			break;
		case '23':
		case '24':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-strong-wind"></i>'
			break;
		case '25':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-thermometer-exterior"></i>'
			break;
		case '26':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-cloudy"></i>'
			break;
		case '27':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-night-cloudy"></i>'
			break;
		case '28':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '29':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '30':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '31':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-night-clear"></i>'
			break;
		case '32':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-sunny"></i>'
			break;
		case '33':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-night-partly-cloudy"></i>'
			break;
		case '34':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-sunny-overcast"></i>'
			break;
		case '35':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-hail"></i>'
			break;
		case '36':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-hot"></i>'
			break;
		case '37':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		case '38':
		case '39':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-thunderstorm"></i>'
			break;
		case '40':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-showers"></i>'
			break;
		case '41':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '42':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-snow"></i>'
			break;
		case '43':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '44':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-cloudy"></i>'
			break;
		case '45':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-storm-showers"></i>'
			break;
		case '46':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-snow"></i>'
			break;
		case '47':
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-day-lightning"></i>'
			break;
		default:
			document.getElementById("WxToday4Icon").innerHTML = '<i class="wi wi-refresh"></i>'
	}			
	
	// Get current date and conditions text
	// document.getElementById("yahooUpdate").innerHTML = "Forecast as of " + info.condition.date;
	document.getElementById("WxNowText").innerHTML = '<span class="label label-default">' + info.condition.text + '</span>';
	
	// Get dates and days of the week for forecast days			
	document.getElementById("today").innerHTML = '<h3><strong>' + info.forecast[0].day + '</strong></h3>'
	document.getElementById("today1").innerHTML = '<h3><strong>' + info.forecast[1].day + '</strong></h3>'
	document.getElementById("today2").innerHTML = '<h3><strong>' + info.forecast[2].day + '</strong></h3>'
	document.getElementById("today3").innerHTML = '<h3><strong>' + info.forecast[3].day + '</strong></h3>'
	document.getElementById("today4").innerHTML = '<h3><strong>' + info.forecast[4].day + '</strong></h3>'
	
	// Get forecast text
	document.getElementById("ForecastTodayText").innerHTML = '<h4>' + info.forecast[0].text + ' with a high near ' + info.forecast[0].high + ' and a low around ' + info.forecast[0].low + ' degrees.</h4>'
	document.getElementById("ForecastToday1Text").innerHTML = '<h4>' + info.forecast[1].text + ' with a high near ' + info.forecast[1].high + ' and a low around ' + info.forecast[1].low + ' degrees.</h4>'
	document.getElementById("ForecastToday2Text").innerHTML = '<h4>' + info.forecast[2].text + ' with a high near ' + info.forecast[2].high + ' and a low around ' + info.forecast[2].low + ' degrees.</h4>'
	document.getElementById("ForecastToday3Text").innerHTML = '<h4>' + info.forecast[3].text + ' with a high near ' + info.forecast[3].high + ' and a low around ' + info.forecast[3].low + ' degrees.</h4>'
	document.getElementById("ForecastToday4Text").innerHTML = '<h4>' + info.forecast[4].text + ' with a high near ' + info.forecast[4].high + ' and a low around ' + info.forecast[4].low + ' degrees.</h4>'
	
	// Get forecast highs and lows
	document.getElementById("todayH").innerHTML = '<h3><strong>' + info.forecast[0].high + '</strong></h3>'
	document.getElementById("today1H").innerHTML = '<h3><strong>' + info.forecast[1].high + '</strong></h3>'
	document.getElementById("today2H").innerHTML = '<h3><strong>' + info.forecast[2].high + '</strong></h3>'
	document.getElementById("today3H").innerHTML = '<h3><strong>' + info.forecast[3].high + '</strong></h3>'
	document.getElementById("today4H").innerHTML = '<h3><strong>' + info.forecast[4].high + '</strong></h3>'
	
	document.getElementById("todayL").innerHTML = '<h3><strong>' + info.forecast[0].low + '</strong></h3>'
	document.getElementById("today1L").innerHTML = '<h3><strong>' + info.forecast[1].low + '</strong></h3>'
	document.getElementById("today2L").innerHTML = '<h3><strong>' + info.forecast[2].low + '</strong></h3>'
	document.getElementById("today3L").innerHTML = '<h3><strong>' + info.forecast[3].low + '</strong></h3>'
	document.getElementById("today4L").innerHTML = '<h3><strong>' + info.forecast[4].low + '</strong></h3>'
	

};

// End Script -->