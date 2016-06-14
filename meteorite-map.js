var strikeData = [];
var width;
var height;
var countries;
var meteorites;

function getYear(strike){
      if (strike.properties.year === null) {
            return 'not available';
      } else {
            return new Date(strike.properties.year).getFullYear();
      }
}

function getStrikeData(strike) {
      if (strike.geometry === null) {
            return;
      }
      var meteorite = {};
      var coord = strike.geometry.coordinates;
      meteorite.x = coord[0];
      meteorite.y = coord[1];
      meteorite.mass = parseInt(strike.properties.mass);
      meteorite.fall = strike.properties.fall;
      meteorite.mass = strike.properties.mass;
      meteorite.recclass = strike.properties.recclass;
      meteorite.reclat = strike.properties.reclat;
      meteorite.year = getYear(strike);
      var m = meteorite.mass;

      switch (true) {
            // case (m < 10000):
            //       meteorite.r = 2;
            //       meteorite.color = '#ffffb2';
            //       break;
            case (m < 100000):
                  meteorite.r = 1.5;
                  meteorite.color = '#d4b9da';
                  break;
            case (m >= 100000 && m < 1000000):
                  meteorite.r = 5;
                  meteorite.color = '#c994c7';
                  break;
            case (m >= 1000000 && m < 10000000):
                  meteorite.r = 15;
                  meteorite.color = '#df65b0';
                  break;
            case (m >= 10000000 && m < 20000000):
                  meteorite.r = 20;
                  meteorite.color = '#dd1c77';
                  break;
            case (m >= 20000000):
                  meteorite.r = 25;
                  meteorite.color = '#980043';
                  break;
      }
      if ((meteorite.x !== 0 && meteorite.y !== 0) && meteorite.mass > 0) {
            strikeData.push(meteorite);
      } else {
            return meteorite
      }
}


queue()
      .defer(d3.json, "http://emeeks.github.io/d3ia/world.geojson")
      .defer(d3.json, "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json")
      .await(function(error, file1, file2) {
            countries = file1;
            meteorites = file2;
            createMap(file1, file2);
      });



function createMap(countries, meteorites) {

      var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      width = $(window).width();
      height = $(window).height();
      meteorites.features.map(getStrikeData);
      var projection = d3.geo.mercator()
            .scale(250)
            .translate([width/2, height/2]);
      var geoPath = d3.geo.path().projection(projection);
      d3.select("svg").selectAll("path").data(countries.features)
            .enter()
            .append("path")
            .attr("d", geoPath)
            .attr("class", "countries")

      d3.select("svg").selectAll("circle").data(strikeData)
            .enter()
            .append("circle")
            .style("fill", function(d) {
                  return d.color
            })
            .attr("class", "strikes")
            .attr("r", function(d) {
                  return d.r
            })
            .attr("cx", function(d) {
                  return projection([d.x, d.y])[0]
            })
            .attr("cy", function(d) {
                  return projection([d.x, d.y])[1]
            })
            .on("mouseover", function(d) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html("<p>" + d.year + "</p>") 
                  .style("left", (d3.event.pageX + 5) + "px")
                  .style("top", (d3.event.pageY - 28) + "px");               
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                    .duration(100)
                    .style("opacity", 0);
              });





      var mapZoom = d3.behavior.zoom().translate(projection.translate()).scale(projection.scale()).on("zoom", zoomed);
      d3.select("svg").call(mapZoom);

      function zoomed() {
            projection.translate(mapZoom.translate()).scale(mapZoom.scale());
            d3.selectAll("path.countries").attr("d", geoPath);

            d3.selectAll("circle.strikes")
                  .attr("r", function(d) {
                        return d.r
                  })
                  .attr("cx", function(d) {
                        return projection([d.x, d.y])[0]
                  })
                  .attr("cy", function(d) {
                        return projection([d.x, d.y])[1]
                  })
      }


      function zoomButton(zoomDirection) {
            if (zoomDirection == "in") {
                  var newZoom = mapZoom.scale() * 1.5;
                  var newX = ((mapZoom.translate()[0] - (width / 2)) * 1.5) + width / 2;
                  var newY = ((mapZoom.translate()[1] - (height / 2)) * 1.5) + height / 2;
            } else if (zoomDirection == "out") {
                  var newZoom = mapZoom.scale() * .75;
                  var newX = ((mapZoom.translate()[0] - (width / 2)) * .75) + width / 2;
                  var newY = ((mapZoom.translate()[1] - (height / 2)) * .75) + height / 2;
            }

            mapZoom.scale(newZoom).translate([newX, newY])
            zoomed();
      }
}

d3.select("#controls").append("button").on("click", function() {
      zoomButton("in")
}).html("Zoom In");
d3.select("#controls").append("button").on("click", function() {
      zoomButton("out")
}).html("Zoom Out");