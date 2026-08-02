async function getWeather(lat, lon)
{
    let request1 = await fetch("https://api.weather.gov/points/" + lat + "," + lon)
    let response = await request1.json();
    let gatherWeather = response["properties"]["forecastHourly"];

    let request2 = await fetch(gatherWeather);
    let weather = await request2.json();
    let current_temperature = weather["properties"]["periods"][0]["temperature"];
    let current_forecast = weather["properties"]["periods"][0]["shortForecast"];
    let current_wind = weather["properties"]["periods"][0]["windSpeed"] + " " + weather["properties"]["periods"][0]["windDirection"];
    weather = "<br>Current temperature:  " + current_temperature + "<br>" +  "Current forecast:  " + current_forecast + "<br>" +  "Current wind:  " + current_wind;
    return weather;
}

async function getMap()
{
    let myMap = L.map("map").setView([39.8333333333, -92.5104000000], 4);

    let tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: 20, attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"}).addTo(myMap);

    // Austin, Texas
    lat = 30.266666;
    lon = -97.733330;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Austin, Texas " + weather);
    
    // Dallas, Texas
    lat = 32.779167;
    lon = -96.808891;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Dallas, Texas " + weather);

    // Fort Worth, Texas
    lat = 32.768799;
    lon = -97.309341;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Fort Worth, Texas " + weather);

    // Houston, Texas
    lat = 29.749907;
    lon = -95.358421;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Houston, Texas " + weather);

    // San Antonio, Texas
    lat = 29.424349;
    lon = -98.491142;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("San Antonio, Texas " + weather);

    // Bellevue, Washington
    lat = 47.610378;
    lon = -122.200676;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Bellevue, Washington " + weather);
    
    // Seattle, Washington
    lat = 47.608013;
    lon = -122.335167;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Seattle, Washington " + weather);

    // Tacoma, Washington
    lat = 47.258728;
    lon = -122.465973;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Tacoma, Washington " + weather);

    // Spokane, Washington
    lat = 47.658779;
    lon = -117.426048;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Spokane, Washington " + weather);

    // Vancouver, Washington
    lat = 45.633331;
    lon = -122.599998;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Vancouver, Washington " + weather);
}

setInterval( function() { getMap(); }, 60 * 1000 * 15);
