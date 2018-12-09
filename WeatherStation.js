<!-- Begin Script

var wsCallback = function(data){
	var observ = data.query.results.day_observations.current_observation;
	var latest = observ.length - 1;
	var tempArray = [observ[0].temp_f];
	var timeArray = [observ[0].observation_time];
	var windSpeedArray = [observ[0].wind_mph];
	var windGustArray = [observ[0].wind_gust_mph];
	
	document.getElementById("wsUpdate").innerHTML = "Conditions " + observ[latest].observation_time;
	document.getElementById("wsTemp").innerHTML = "Temp: <strong>" + observ[latest].temp_f + "&nbspF</strong>";
	document.getElementById("wsHumidity").innerHTML = "Humidity: <strong>" + observ[latest].relative_humidity + "%</strong>";
	document.getElementById("wsWind").innerHTML = "Wind: <strong>" + observ[latest].wind_mph + "&nbspMPH</strong>";
	document.getElementById("wsWindDir").innerHTML = "Wind Dir: <strong>" + observ[latest].wind_dir + "</strong>";
	document.getElementById("wsPressure").innerHTML = observ[latest].pressure_string;
	document.getElementById("wsDewpoint").innerHTML = observ[latest].dewpoint_string;
	document.getElementById("wsRainHour").innerHTML = observ[latest].precip_1hr_string;
	document.getElementById("wsRainToday").innerHTML = observ[latest].precip_today_string;
	
	// Create Time Array to determine precise time of high/low value
	for (i = 1;i < observ.length;i++){
		timeArray[timeArray.length] = observ[i].observation_time;
	};
	
	// Create Temperature Array
	for (i = 1;i < observ.length;i++){
		tempArray[tempArray.length] = observ[i].temp_f;
	};
	
	// Create Wind Speed Array
	for (i = 1;i < observ.length;i++){
		windSpeedArray[windSpeedArray.length] = observ[i].wind_mph;
	};
	
	// Create Wind Gust Array
	for (i = 1;i < observ.length;i++){
		windGustArray[windGustArray.length] = observ[i].wind_gust_mph;
	};

	// Get Minimum Temperature
	var minTemp = Math.min.apply(Math, tempArray);
	var minTemp = minTemp.toFixed(1);
	var minTempT = minTemp.toString();
	var minTempIndex = tempArray.indexOf(minTempT);
	
	// Get Maximum Temperature
	var maxTemp = Math.max.apply(Math, tempArray);
	var maxTemp = maxTemp.toFixed(1);
	var maxTempT = maxTemp.toString();
	var maxTempIndex = tempArray.indexOf(maxTempT);
	
	// Get Maximum Sustained Wind
	var maxWindSpeed = Math.max.apply(Math, windSpeedArray);
	var maxWindSpeed = maxWindSpeed.toFixed(1);
	var maxWindSpeedT = maxWindSpeed.toString();
	var maxWindSpeedIndex = windSpeedArray.indexOf(maxWindSpeedT);
	
	// Get Maximum Wind Gust
	var maxWindGust = Math.max.apply(Math, windGustArray);
	var maxWindGust = maxWindGust.toFixed(1);
	var maxWindGustT = maxWindGust.toString();
	var maxWindGustIndex = windGustArray.indexOf(maxWindGustT);
	
	document.getElementById("wsLowTemp").innerHTML = minTemp + '&nbspF';
	document.getElementById("wsLowTempTime").innerHTML = 'Recorded:&nbsp' + timeArray[minTempIndex].split(',')[1];
	document.getElementById("wsHighTemp").innerHTML = maxTemp + '&nbspF';
	document.getElementById("wsHighTempTime").innerHTML = 'Recorded:&nbsp' + timeArray[maxTempIndex].split(',')[1];
	document.getElementById("wsHighWindSustained").innerHTML = maxWindSpeed + '&nbspMPH';
	document.getElementById("wsHighWindSustainedTime").innerHTML = 'Recorded:&nbsp' + timeArray[maxWindSpeedIndex].split(',')[1];
	document.getElementById("wsHighWindGust").innerHTML = maxWindGust + '&nbspMPH';
	document.getElementById("wsHighWindGustTime").innerHTML = 'Recorded:&nbsp' + timeArray[maxWindGustIndex].split(',')[1];
}

// End Script -->