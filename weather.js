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

    // Sacramento, California
    let lat = 38.575764;
    let lon = -121.478851;
    let weather = await getWeather(lat, lon);
    let tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Sacramento, California " + weather);

    // Boise, Idaho
    lat = 43.618881;
    lon = -116.215019;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Boise, Idaho " + weather);

    // Helena, Montana
    lat = 46.595806;
    lon = -112.027031;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Helena, Montana " + weather);

    // Carson City, Nevada
    lat = 39.162418;
    lon = -119.787010;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Carson City, Nevada " + weather);
    
    // Albany, New York
    lat = 42.652580;
    lon = -73.756233;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Albany, New York " + weather);

    // Salem, Oregon
    lat = 44.944099;
    lon = -123.040283;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Salem, Oregon " + weather);
    
    // Austin, Texas
    lat = 30.266666;
    lon = -97.733330;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Austin, Texas " + weather);

    // Salt Lake City, Utah
    lat = 40.758701;
    lon = -111.876183;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Salt Lake City, Utah " + weather);
    
    // Olympia, Washington
    lat = 47.037872;
    lon = -122.900696;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Olympia, Washington " + weather);

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
    
    // Cheyenne, Wyoming
    lat = 41.161079;
    lon = -104.805450;
    weather = await getWeather(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Cheyenne, Wyoming " + weather);
}

setInterval( function() { getMap(); }, 60 * 1000 * 15);
