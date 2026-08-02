async function getUnitedStates(lat, lon)
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
    let myMap = L.map("map").setView([0, 0], 2);

    let tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: 20, attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"}).addTo(myMap);

    // Phoenix, Arizona
    lat = 33.448376;
    lon = -112.074036;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Phoenix, Arizona " + weather);
    
    // Sacramento, California
    lat = 38.575764;
    lon = -121.478851;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Sacramento, California " + weather);

    // Denver, Colorado
    lat = 39.742043;
    lon = -104.991531;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Denver, Colorado " + weather);

    // Boise, Idaho
    lat = 43.618881;
    lon = -116.215019;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Boise, Idaho " + weather);

    // Helena, Montana
    lat = 46.595806;
    lon = -112.027031;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Helena, Montana " + weather);
    
    // Carson City, Nevada
    lat = 39.162418;
    lon = -119.787010;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Carson City, Nevada " + weather);
    
    // Salem, Oregon
    lat = 44.944099;
    lon = -123.040283;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Salem, Oregon " + weather);

    // Salt Lake City, Utah
    lat = 40.758701;
    lon = -111.876183;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Salt Lake City, Utah " + weather);

    // Olympia, Washington
    lat = 47.037872;
    lon = -122.900696;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Olympia, Washington " + weather);

    // Cheyenne, Wyoming
    lat = 41.161079;
    lon = -104.805450;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Cheyenne, Wyoming " + weather);
}

setInterval( function() { getMap(); }, 60 * 1000 * 15);
