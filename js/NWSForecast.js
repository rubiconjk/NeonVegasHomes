jQuery(document).ready(function($){
    $.ajax({
        url:'https://api.weather.gov/stations/KLAS/observations/current.json',
        dataType:'jsonp',
        success:function(parsed_json){
            var icon = parsed_json['properties']['icon'];
            $('#current_icon').html(icon);
        }
    })
});