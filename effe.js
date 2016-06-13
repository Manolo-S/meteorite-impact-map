var obj = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.08333,
          50.775
        ]
      },
      "properties": {
        "mass": "21",
        "name": "Aachen",
        "reclong": "6.083330",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1880-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "1",
        "recclass": "L5",
        "reclat": "50.775000",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.23333,
          56.18333
        ]
      },
      "properties": {
        "mass": "720",
        "name": "Aarhus",
        "reclong": "10.233330",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1951-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "2",
        "recclass": "H6",
        "reclat": "56.183330",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113,
          54.21667
        ]
      },
      "properties": {
        "mass": "107000",
        "name": "Abee",
        "reclong": "-113.000000",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1952-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "6",
        "recclass": "EH4",
        "reclat": "54.216670",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.9,
          16.88333
        ]
      },
      "properties": {
        "mass": "1914",
        "name": "Acapulco",
        "reclong": "-99.900000",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1976-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "10",
        "recclass": "Acapulcoite",
        "reclat": "16.883330",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -64.95,
          -33.16667
        ]
      },
      "properties": {
        "mass": "780",
        "name": "Achiras",
        "reclong": "-64.950000",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1902-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "370",
        "recclass": "L6",
        "reclat": "-33.166670",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          71.8,
          32.1
        ]
      },
      "properties": {
        "mass": "4239",
        "name": "Adhi Kot",
        "reclong": "71.800000",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1919-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "379",
        "recclass": "EH4",
        "reclat": "32.100000",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          95.16667,
          44.83333
        ]
      },
      "properties": {
        "mass": "910",
        "name": "Adzhi-Bogdo (stone)",
        "reclong": "95.166670",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1949-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "390",
        "recclass": "LL3-6",
        "reclat": "44.833330",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.61667,
          44.21667
        ]
      },
      "properties": {
        "mass": "30000",
        "name": "Agen",
        "reclong": "0.616670",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1814-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "392",
        "recclass": "H5",
        "reclat": "44.216670",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -65.23333,
          -31.6
        ]
      },
      "properties": {
        "mass": "1620",
        "name": "Aguada",
        "reclong": "-65.233330",
        "geolocation_address": null,
        "geolocation_zip": null,
        "year": "1930-01-01T00:00:00.000",
        "geolocation_state": null,
        "fall": "Fell",
        "id": "398",
        "recclass": "L6",
        "reclat": "-31.600000",
        "geolocation_city": null,
        "nametype": "Valid"
      }
    }
  ],
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  }
}























var l = console.log;


function getCoordinates (strike){
	var coordObj = {};
	var coord = strike.geometry.coordinates;
	coordObj.x = coord[0];
	coordObj.y = coord[1];
	return coordObj;
	// l(coord);
}


var coordArr = obj.features.map(getCoordinates);

l(coordArr);















































