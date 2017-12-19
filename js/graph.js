
// This gets the station ID from the url
var QueryString = function() {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);

    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {

            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string.id;
}();


var aqhi, test, x, y, x2, y2, height, focus, context, line, line2, labels, bisectDate, focus1, parseTime, formatTime, ylab, met, thesLine

var list_of_aq_measures = []

// These are the short names and units for each measurement
d3.csv('labels.csv', function(err, data) {
    labels = data
})


// use csv-parser to load data using station ID
d3.json('https://csv-parser.api.gov.bc.ca/?source=ftp://ftp.env.gov.bc.ca/pub/outgoing/AIR/Hourly_Raw_Air_Data/Station/' + QueryString + '.csv&format=json', function(err, data) {

    console.log(QueryString.includes('AQHI'))

    //remove header
    data.pop(1)

    if (QueryString.includes('AQHI')) {
        initGas = ''
    }

    // Format the timestamp and presentations
    parseTime = d3.timeParse("%Y-%m-%d %H:%M");
    formatTime = d3.timeFormat("%Y-%m-%d %H:%M");
    formatMonth = d3.timeFormat("%b %d %H:%M");
    formatFullDate = d3.timeFormat("%B %d, %Y %H:%M");

    // if (!(initGas in data[1]))
    //     initGas = Object.keys(data[0])[1]

    data.forEach(function(d, i) {

        d.DATE_LOCAL = parseTime(d.DATE_LOCAL)
    })
    data.sort((a, b) => a.DATE_LOCAL - b.DATE_LOCAL);
    // console.log(data)

    bisectDate = d3.bisector(function(d) {
        return d.DATE_LOCAL;
    }).left;
    test = data

    meas = [];

    //Order of buttons
    var orderPoll = ["PM25", "PM25_24HR", "PM10", "PM10_24HR", "O3", "O3_8HR", "NO2", "NO2_24"]

    var orderMet = ["WSPD_SCLR", "WSPD_VECT", "TEMP_MEAN", "WDIR_VECT"]

    // Don't show these as buttons
    var exclude = ['DATE_PST', 'LATITUDE', 'LONGITUDE', 'STATION', 'DATE_LOCAL', 'DATE', 'EMS_ID', 'AQHI_AREA', 'STATION_NAME']

    // Meteorology measurements
    met = ['TEMP_MEAN', 'WDIR_UVEC', 'WDIR_VECT', 'WSPD_SCLR', 'WSPD_VECT','HUMIDITY']

    // Threshold values for horizontal lines
    thres = {
        'PM25_24HR': 25,
        "PM10_24HR": 50,
        'O3_8hr': 63,
        'NO2': 100,
        'SO2': 70,
        'TRS': 5
    }


    $.each(data[0], function(key, value) {
        if (!(exclude.includes(key))) {
            ind = _(labels).filter(function(d) {
                return d['Data Source'] === key;
            });
            // unicode for some units
            if (ind.length > 0) {
                if (ind[0]['Data Source'] == 'TEMP_MEAN') {
                    ind[0]['Units'] = '\xB0C'
                } else if (ind[0]['Data Source'] == 'PM25') {
                    ind[0]['Units'] = '\u03BC g/m3'

                } else if (ind[0]['Data Source'] == 'WDIR_UVEC' || ind[0]['Data Source'] == 'WDIR_VECT') {
                    ind[0]['Units'] = '\xB0'
                }
                meas.push({
                    source: ind[0]['Data Source'],
                    short: ind[0]['Short Name'],
                    unit: ind[0]['Units']
                })
            }
            list_of_aq_measures.push(key)
        }
    });

    var result = []
    orderPoll.forEach(function(key) {
        list_of_aq_measures.forEach(function(item) {
            if (item == key) {
                result.push(item)
            }
        })
    })

    orderMet.forEach(function(key) {
        list_of_aq_measures.forEach(function(item) {
            if (item == key) {
                result.push(item)
            }
        })
    })

    arr3 = result.concat(list_of_aq_measures)
    list_of_aq_measures = [...new Set(arr3)]
    initGas = list_of_aq_measures[0]

    colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    makeButtons(list_of_aq_measures, data);
    makeGraphs(initGas, data)

    //Tile and date range titles
    d3.select(".current-cond").html(data[0]["STATION"]);
    d3.select(".current-date").html(formatFullDate(data[data.length - 1].DATE_LOCAL));


});

// make button active
function makeActive(selection) {

    d3.selectAll(".active").classed("active", false).attr('style', 'border: solid 0px black !important;')
    selection.classed("active", true).attr('style',
        function(d) {
            return 'border: solid 2px ' + '#ff7f0e' + ' !important;'
        })
}

t = 0

function makeButtons(keys, data) {
    var buttons = d3.select('.button').selectAll('.button')
        .data(keys)
        .enter()
        .append("button")
        .attr("class", "btn btn-default")
        .attr('id', function(d, i) {
            // console.log(d)
            return d;
        })
        .text(function(d, i) {
            lab = d
            meas.forEach(function(j) {
                if (d == j['source']) {
                    lab = j['short'];
                }
            })
            return lab
        })
        .on("click", function(d) {
            // console.log(d)
            if (d !== 'FORECAST_TONIGHT' && d !== 'FORECAST_TODAY' && d !== 'FORECAST_TOMORROW') {
                t += 1
                makeActive(d3.select(this));

                updateGraph(d, data)
            }

        })
    // append values to buttons
    buttons.append("div")
        .attr("class", 'val')
        .data(keys)
        .html(function(d, i) {
            lab = ''
            meas.forEach(function(j) {
                // console.log(j)
                if (d == j['source']) {
                    lab = j['unit'];
                }
            })
            return data[0][d] + ' ' + '<span style="font-size:10pt">' + lab + '<span>';
        })

    makeActive(buttons.filter(function(d) {
        return d == initGas
    }))

}



// This makes the initial graph
function makeGraphs(trace, data) {

    data.forEach(function(d, i) {
        if (d[trace] == undefined) {
            d[trace] = null

        }
    })

    var svg = d3.select("svg"),
        margin = {
            top: 20,
            right: 80,
            bottom: 110,
            left: 40
        },
        margin2 = {
            top: 430,
            right: 20,
            bottom: 30,
            left: 40
        },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        height2 = +svg.attr("height") - margin2.top - margin2.bottom;

    x = d3.scaleTime().range([0, width])
    x2 = d3.scaleTime().range([0, width])
    y = d3.scaleLinear().range([height, 0])
    y2 = d3.scaleLinear().range([height2, 0])

    var xAxis = d3.axisBottom(x),
        xAxis2 = d3.axisBottom(x2),
        yAxis = d3.axisLeft(y);



    var brush = d3.brushX()
        .extent([
            [0, 0],
            [width, height2]
        ])
        .on("brush end", brushed);

    var zoom = d3.zoom()
        .scaleExtent([1, Infinity])
        .translateExtent([
            [0, 0],
            [width, height]
        ])
        .extent([
            [0, 0],
            [width, height]
        ])
        .on("zoom", zoomed);

    line = d3.line()
        .defined(function(d) {
            return d[trace] != null;
        })
        .x(function(d) {
            return x(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y(+d[trace]);
        });

    line2 = d3.line()
        .x(function(d) {
            return x2(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y2(+d[trace]);
        });

    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    thesLine = d3.line()
        .x(function(d) {
            return x(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y(thres[trace])
        })

    thesLine1 = d3.line()
        .x(function(d) {
            // console.log(d)
            return x(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y(0)
        })

    var Line_chart = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("clip-path", "url(#clip)");


    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var context = svg.append("g")
        .attr('id', 'context')
        .attr("class", "context")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


    x.domain(d3.extent(data, d => d.DATE_LOCAL));
    y.domain([d3.min(data, d => +d[trace]), d3.max(data, d => +d[trace])]);
    x2.domain(x.domain());
    y2.domain(y.domain());


    xGrid=focus.append("g")
        .attr("class","grid")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .ticks(5)
            .tickSize(-height)
            .tickFormat("")
            )

    yGrid=focus.append("g")
        .attr("class","grid")
        .call(d3.axisLeft(y)
            .ticks(5)
            .tickSize(-width)
            .tickFormat("")
            )

    focus.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    yaxe = focus.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis);


    Line_chart.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .style("stroke", function() {
            if (met.includes(trace)) {
                c = '#de2d26'
            } else {
                c = '#2b8cbe'
            }
            return c
        });

    threshold = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "focus")
        .attr("clip-path", "url(#clip)");

    if (trace in thres && (thres[trace]*.8 < d3.max(data, d => +d[trace])))  {
        threshold.append('path')
            .datum(data)
            .attr('d', thesLine);
        y.domain([d3.min(data, d => +d[trace]), thres[trace]]);

    } else {
        threshold.append('path')
            .datum(data)
            .attr('d', thesLine1);
    }

    context.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("id", "line2")
        .attr("d", line2)
        .style("stroke", function() {
            if (met.includes(trace)) {
                c = '#de2d26'
            } else {
                c = '#2b8cbe'
            }
            return c
        });;


    context.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xAxis2);

    context.append("g")
        .attr("class", "brush")
        .call(brush)
        .call(brush.move, x.range());

    focus1 = focus.append("g")
        .attr("class", "focus1")
        .style("display", "none");

    focus1.append("circle")
        .attr("r", 3);

    focus1.append("text")
        .attr("x", -20)
        // .attr("y", -20)
        .attr("dy", "-1em");



    svg.append("rect")
        .attr("class", "zoom")
        .attr("id", "overlay")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .call(zoom)
        .on("mouseover", function() {
            focus1.style("display", null);
        })
        .on("mouseout", function() {
            focus1.style("display", "none");
        })
        .on("mousemove", mousemove);


    un = d3.values(meas).filter(function(vals) {
        return vals['source'] == initGas
    })

    ylab = svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(un[0]["unit"]);

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0])
        i = bisectDate(data, x0, 1)
        d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.DATE_LOCAL > d1.DATE_LOCAL - x0 ? d1 : d1;

        focus1.attr("transform", "translate(" + x(d.DATE_LOCAL) + "," + y(d[trace]) + ")");
        focus1.select("text").text(formatMonth(d.DATE_LOCAL))
            .append('tspan')
            .attr('dy', "1em")
            .attr('dx', "-2em")
            .text(d[trace]);


    };

    // These control the brusing and zooming
    function brushed() {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
        var s = d3.event.selection || x2.range();

        x.domain(s.map(x2.invert, x2));
        Line_chart.select(".line").attr("d", line);
        focus.select(".axis--x").call(xAxis);
        svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
            .scale(width / (s[1] - s[0]))
            .translate(-s[0], 0));
    }

    function zoomed() {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
        var t = d3.event.transform;
        x.domain(t.rescaleX(x2).domain());
        d3.select(".selected-date").html(formatTime(t.rescaleX(x2).domain()[0]) + ' - ' + formatTime(t.rescaleX(x2).domain()[1]));
        Line_chart.select(".line").attr("d", line);
        focus.select(".axis--x").call(xAxis);
        context.select(".brush").call(brush.move, x.range().map(t.invertX, t));

        xGrid.call(
            d3.axisBottom(x)
            .scale(d3.event.transform.rescaleX(x))
            .ticks(5)
            .tickSize(-height)
            .tickFormat("")
        )
    }


}


// Update the graph when selecting another measure
function updateGraph(trace, data) {
    data.forEach(function(d) {
        if (d[trace] == undefined) {
            d[trace] = null
        }
    })

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0])
        i = bisectDate(data, x0, 1)
        d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.DATE_LOCAL > d1.DATE_LOCAL - x0 ? d1 : d1;

        focus1.attr("transform", "translate(" + x(d.DATE_LOCAL) + "," + y(d[trace]) + ")");
        focus1.select("text").text(formatMonth(d.DATE_LOCAL))
            .append('tspan')
            .attr('dy', "1em")
            .attr('dx', "-2em")
            .text(d[trace]);

    };

    if (!(trace in thres && (thres[trace]*.8 < d3.max(data, d => +d[trace])))) {
        y.domain([d3.min(data, function(d) {
            return +d[trace]
        }), d3.max(data, function(d) {
            return +d[trace]
        })])
    } else {
        y.domain([d3.min(data, d => +d[trace]), thres[trace] + 5]);
    }
    y2.domain(y.domain());

    yAxis = d3.axisLeft(y);

    yaxe.transition()
        .call(yAxis);

    un = d3.values(meas).filter(function(vals) {
        return vals['source'] == trace
    })

    ylab.transition()
        .text(un[0]["unit"])


    line = d3.line()
        .defined(function(d) {
            return d[trace] != null;
        })
        .x(function(d) {
            return x(d.DATE_LOCAL);
        })
        .y(function(d) {
            // console.log(d[trace])
            return y(d[trace]);
        });


    line2 = d3.line()
        .x(function(d) {
            return x2(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y2(+d[trace]);
        });


    Line_chart = d3.select("g").transition();
    context = d3.select("#context").transition();


    // console.log(trace)
    Line_chart.select(".line")
        .duration(750)
        .attr("d", line)
        .style("stroke", function(d) {
            // console.log(d)
            if (met.includes(trace)) {
                c = '#de2d26'
            } else {
                c = '#2b8cbe'
            }
            return c
        });

    context.select("#line2")
        .duration(750)
        .attr("d", line2)
        .style("stroke", function(d) {
            if (met.includes(trace)) {
                c = '#de2d26'
            } else {
                c = '#2b8cbe'
            }
            return c
        });

    thesLine = d3.line()
        .x(function(d) {
            return x(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y(thres[trace])
        })

    thesLine1 = d3.line()
        .x(function(d) {
            // console.log(d)
            return x(d.DATE_LOCAL);
        })
        .y(function(d) {
            return y(0)
        })

    if (trace in thres) {
        threshold.selectAll("path")
            .attr('class', 'line1')
            .transition()
            .duration(1000)
            .attr("d", thesLine(data));


    } else {
        threshold.selectAll("path")
            .attr('class', 'out')
            .transition()
            .duration(1000)
            .attr("d", thesLine1(data));
    }

    d3.select(".zoom")
        .on("mousemove", mousemove);

}