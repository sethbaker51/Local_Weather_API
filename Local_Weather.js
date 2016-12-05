$(document).ready(function() {

    function getLocation() {
        $.get('http://ip-api.com/json', function (loc) {
          $('#city').text(loc.city + ', ' + loc.regionName + ', ' + loc.country);
          var city = loc.city;
          var countryCode = loc.countryCode;
          var api = "http://api.openweathermap.org/data/2.5/weather?";
          var apiKey = "34db0dc340a2f61c9cdac033eca4f374";
          var unit = "metric";
          var api_url = api + "q=" + city + "," + countryCode + "&units=" + unit + "&appid=" + apiKey;

            $.ajax({
                url: api_url,
                dataType: "jsonp",
                data: {
                  mode: "json"
                      },
                  success: function(data) {
                    $("#message").html(JSON.stringify(data));

                    $("#celsius").html("Temperature is " + Math.round(data.main.temp) + "°C");
                    var fahrenheit = (Math.round(data.main.temp) * (9/5) + 32);
                    $("#fahrenheit").html("Temperature is " + fahrenheit + "°F");

                    $("#fahrenheit").hide();
                    $("#btn").click(function(){
                    $("#celsius, #fahrenheit").slideToggle("slow");

              });

                    switch (data.weather[0].main){
                      case "Clear":
                      $("#icon").addClass("wi-night-clear wi").css("background-color", "silver");
                      $("#weather2").html("Forecast: Clear");
                      break;
                      case "Rain":
                      $("#icon").addClass("fa-tint fa-tint").css("background-color", "lightblue");
                      $("#weather2").html("Forecast: Rain");
                      break;
                      case "Cloudy":
                      $("#icon").addClass("fa-cloud fa").css("background-color", "silver");
                      $("#weather2").html("Forecast: Cloudy");
                      case "Mist":
                      $("#icon").addClass("wi-night-fog wi").css("background-color", "silver");
                      $("#weather2").html("Forecast: Misty");
                      case "Haze":
                      $("#icon").addClass("wi-day-haze wi");
                      $("#weather2").html("Forecast: Hazy");
                      default:
                }
              }
            });
          })
         };
     getLocation();
   });
