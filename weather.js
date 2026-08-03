async function getCanada(lat, lon)
{
    let buffer = 0.1;
    let bbox  = `${lon - buffer},${lat - buffer},${lon + buffer},${lat + buffer}`;
    let params = new URLSearchParams({"f": "json", "bbox": bbox});
    let request = await fetch(`https://api.weather.gc.ca/collections/citypageweather-realtime/items?${params}`);
    console.log(request);
    let response = await request.json();
    let weather = response["properties"];
    
    let current_temperature = weather["properties"]["currentConditions"]["temperature"]["value"] + " C";
    let current_forecast = weather["currentConditions"]["condition"]["en"];
    let current_wind = weather["properties"]["currentConditions"]["wind"]["speed"]["value"]["en"] + " " + weather["properties"]["currentConditions"]["wind"]["direction"]["value"]["en"] + " km/h";
    weather = "<br>Current temperature:  " + current_temperature + "<br>" +  "Current forecast:  " + current_forecast + "<br>" +  "Current wind:  " + current_wind;
    return weather;
}

async function getUnitedStates(lat, lon)
{
    let request1 = await fetch("https://api.weather.gov/points/" + lat + "," + lon)
    let response = await request1.json();
    let gatherWeather = response["properties"]["forecastHourly"];

    let request2 = await fetch(gatherWeather);
    let weather = await request2.json();
    let current_temperature = weather["properties"]["periods"][0]["temperature"] + " F";
    let current_forecast = weather["properties"]["periods"][0]["shortForecast"];
    let current_wind = weather["properties"]["periods"][0]["windSpeed"] + " " + weather["properties"]["periods"][0]["windDirection"] + ", mph";
    weather = "<br>Current temperature:  " + current_temperature + "<br>" +  "Current forecast:  " + current_forecast + "<br>" +  "Current wind:  " + current_wind;
    return weather;
}

async function getMap()
{
    let myMap = L.map("map").setView([0, 0], 2);

    let tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {maxZoom: 20, attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"}).addTo(myMap);

    // United States:
    
    // Phoenix, Arizona
    lat = 33.448376;
    lon = -112.074036;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Phoenix, Arizona, United States " + weather);
    
    // Sacramento, California
    lat = 38.575764;
    lon = -121.478851;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Sacramento, California, United States " + weather);

    // Denver, Colorado
    lat = 39.742043;
    lon = -104.991531;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Denver, Colorado, United States " + weather);

    // Boise, Idaho
    lat = 43.618881;
    lon = -116.215019;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Boise, Idaho, United States " + weather);

    // Helena, Montana
    lat = 46.595806;
    lon = -112.027031;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Helena, Montana, United States " + weather);
    
    // Carson City, Nevada
    lat = 39.162418;
    lon = -119.787010;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Carson City, Nevada, United States " + weather);

    // Santa Fe, New Mexico
    lat = 35.691544;
    lon = -105.944183;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Santa Fe, New Mexico, United States " + weather);

    // Bismarck, North Dakota
    lat = 46.825905;
    lon = -100.778275;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Bismarck, North Dakota, United States " + weather);
    
    // Salem, Oregon
    lat = 44.944099;
    lon = -123.040283;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Salem, Oregon, United States " + weather);

    // Salt Lake City, Utah
    lat = 40.758701;
    lon = -111.876183;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Salt Lake City, Utah, United States " + weather);

    // Olympia, Washington
    lat = 47.037872;
    lon = -122.900696;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Olympia, Washington, United States " + weather);

    // Cheyenne, Wyoming
    lat = 41.161079;
    lon = -104.805450;
    weather = await getUnitedStates(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Cheyenne, Wyoming, United States " + weather);

    // Canada:

    // Victoria, British Columbia, Canada
    lat = 48.407326;
    lon = -123.329773;
    weather = await getCanada(lat, lon);
    tile = L.marker([lat, lon]).addTo(myMap).bindPopup("Victoria, British Columbia, Canada " + weather);
}

setInterval( function() { getMap(); }, 60 * 1000 * 15);
