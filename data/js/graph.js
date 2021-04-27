// Version Jan 18th
// This gets the station ID from the url
var QueryString = function () {
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


var aqhi, test, x, y, x2, y2, height, focus, context, line, line2, labels, bisectDate, focus1, parseTime, formatTime, ylab, met, thesLine, param, selected_domain, scatter, aqhi_data;

var lowIndex, moderateIndex, hightIndex, veryHighIndex;

var list_of_aq_measures = []

var aqhi_banner_key = ['AQHI_RP', 'AQHI_GP']

// These are the short names and units for each measurement
d3.csv('labels.csv', function (err, data) {
    labels = data
});

d3.csv('https://www.env.gov.bc.ca/epd/bcairquality/aqo/csv/AQHIWeb.csv', function (err, data) {
    //if(err) throw err;
    aqhi_data = data
});




// use csv-parser to load data using station ID
d3.json('https://csv-parser.api.gov.bc.ca/?source=ftp://ftp.env.gov.bc.ca/pub/outgoing/AIR/Hourly_Raw_Air_Data/Station/' + QueryString + '.csv&format=json', function (err, data) {

    //console.log(QueryString.includes('AQHI'))

    //remove header
    data.pop(1)


    // Format the timestamp and presentations
    parseTime = d3.timeParse("%Y-%m-%d %H:%M");
    formatTime = d3.timeFormat("%Y-%m-%d %H:%M");
    formatMonth = d3.timeFormat("%b %d %H:%M");
    formatFullDate = d3.timeFormat("%B %d, %Y %H:%M");

    // if (!(initGas in data[1]))
    //     initGas = Object.keys(data[0])[1]

    data.forEach(function (d, i) {

        d.DATE_LOCAL = parseTime(d.DATE_LOCAL)
    })
    data.sort((a, b) => a.DATE_LOCAL - b.DATE_LOCAL);
    // console.log(data)

    if (QueryString.includes('AQHI')) {
        initGas = ''

        // initial aqhi_text object
        aqhi_btn_text = {
            'AQHI': 'NA',
            'FORECAST_TODAY': 'NA',
            'FORECAST_TONIGHT': 'NA',
            'FORECAST_TOMORROW': 'NA'
        }

        aqhi_banner_text = {
            'AQHI_RP': 'NA',
            'AQHI_GP': 'NA'
        }

        initAQHIText(QueryString.replace("AQHI-", ""));


        //get the date range 
        var xx_min = d3.min(data, function (d) { return new Date(d.DATE_LOCAL); });
        var xx_max = d3.max(data, function (d) { return new Date(d.DATE_LOCAL); });
        //get date range, use PST time to fix DST issues
        //var xx_min_PST = d3.min(data, function (d) { return new Date(d.DATE_PST); });
        //var xx_max_PST = d3.max(data, function (d) { return new Date(d.DATE_PST); });

        //find an AQHI item as template
        var template = null;
        for (var l = 0; l < data.length; l++) {
            if (data[l].AQHI != undefined && data[l].AQHI != null) {
                template = data[l];
                break;
            }
        }

        //calculate how many item should be in the data set based on the date range
        var diff_hours = Math.abs(xx_min - xx_max) / 36e5;

        //populate a new date array with each time slot
        var date_array = [];
        date_array.push(xx_min);
        for (var i = 1; i < diff_hours - 1; i++) {
            date_array.push(d3.timeHour.offset(xx_min, i));
        }

        //loop through the new date array and find the missing data item  
        var new_data = [];
        for (var i = 0; i < date_array.length; i++) {
            var aqhi_data = null;
            for (var x = 0; x < data.length; x++) {
                var org_date_local = data[x].DATE_LOCAL;
                var new_date_local = date_array[i];
                if (org_date_local.getDate() == new_date_local.getDate() &&
                    org_date_local.getMonth() == new_date_local.getMonth() &&
                    org_date_local.getHours() == new_date_local.getHours() &&
                    org_date_local.getFullYear() == new_date_local.getFullYear()) {

                    aqhi_data = data[x];
                    break;
                }
            }
            if (aqhi_data) {
                //if an item exist for the time slot, add it into the new data set
                new_data.push(aqhi_data);
            } else {
                //if not existing item found, use the template item with new time slot and set null to AQHI, add it into the new data set
                var new_item = template;
                new_item.AQHI = null;
                new_item.DATE_LOCAL = date_array[i];
                new_data.push(new_item);
            }
        }
        data = new_data;
    }

    bisectDate = d3.bisector(function (d) {
        return d.DATE_LOCAL;
    }).left;
    test = data

    meas = [];

    //Order of buttons
    var orderPoll = ["PM25", "PM25_24", "PM10", "PM10_24", "O3", "O3_8", "NO2", "NO2_24", "SO2", "SO_24", "SO2_24", "TRS","TRS_24", "CO","CO_8HR"]

    var orderMet = ["TEMP_MEAN", "HUMIDITY", "WSPD_SCLR", "WDIR_UVEC", "WSPD_VECT", "WDIR_VECT", "BAR_PRESS", "PRECIP", "SNOWDEPTH", ]

    var direction = ["N", "E", "S", "W"]

    // Don't show these as buttons
    var exclude = ['DATE_PST', 'LATITUDE', 'LONGITUDE', 'STATION', 'DATE_LOCAL', 'DATE', 'EMS_ID', 'AQHI_AREA', 'STATION_NAME', 'NOx', 'NOX_24', 'NO', 'NO_24', 'SO_24', 'VAPOUR_PRESSURE']



    // Meteorology measurements
    met = ['TEMP_MEAN', 'WDIR_UVEC', 'WDIR_VECT', 'WSPD_VECT', 'HUMIDITY', 'WSPD_SCLR', 'PRECIP', 'SNOWDEPTH', 'BAR_PRESS' ]

    // Threshold values for horizontal lines
    thres = {
        'PM25_24': 25,
        "PM10_24": 50,
        'O3_8hr': 63,
        'NO2': 100,
        'SO2': 70,
        'TRS': 5
    }

    // define index level data for background color
    index_lvl = {
        'very_high': { 'max': 11.5, 'min': 10.5, 'color': '#660000', 'opac': 0.1 },
        'high': { 'max': 10.5, 'min': 6.5, 'color': '#FF0000', 'opac': 0.05 },
        'moderate': { 'max': 6.5, 'min': 3.5, 'color': '#FFCC00', 'opac': 0.05 },
        'low': { 'max': 3.5, 'min': 0, 'color': '#00BFFF', 'opac': 0.05 }
    }




    $.each(data[0], function (key, value) {
        if (!(exclude.includes(key))) {
            ind = _(labels).filter(function (d) {
                return d['Data Source'] === key;
            });
            // unicode for some units
            if (ind.length > 0) {
                if (ind[0]['Data Source'] == 'TEMP_MEAN') {
                    ind[0]['Units'] = '\xB0C'
                } else if (ind[0]['Data Source'] == 'PM25') {
                    ind[0]['Units'] = '\u03BCg/m3'

                } else if (ind[0]['Data Source'] == 'WDIR_UVEC' || ind[0]['Data Source'] == 'WDIR_VECT') {
                    ind[0]['Units'] = 'Degrees (\xB0)'
                }
                meas.push({
                    source: ind[0]['Data Source'],
                    short: ind[0]['Short Name'],
                    unit: ind[0]['Units'],
                    decimal: ind[0]['Decimal']
                })
            }
            list_of_aq_measures.push(key)
        }
    });

    var result = []
    orderPoll.forEach(function (key) {
        list_of_aq_measures.forEach(function (item) {
            if (item == key) {
                result.push(item)
            }
        })
    })

    orderMet.forEach(function (key) {
        list_of_aq_measures.forEach(function (item) {
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

    //Title and date range titles
    if (QueryString.includes('AQHI')) {
        d3.select(".current-cond").html(data[0]["AQHI_AREA"]);
    } else {
        d3.select(".current-cond").html(data[0]["STATION"] + ' - Air monitoring station');
    }
    d3.select(".current-date").html('Latest data at: <strong>' + data[data.length - 1].DATE + '</strong>. Current data is displayed below and you can select each one to view a 30-day graph <span class="glyphicon glyphicon-stats" aria-hidden="true"></span> of the analyser.');

document.querySelector.apply(document,['title']).innerHTML = ''+ data[0]["STATION"] + ' - Air monitoring station - Province of British Columbia';
    
});


// custom station message

function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	// Give the parameter a variable name
	var dynamicContent = getParameterByName('id');
 
	 $(document).ready(function() {
 
		// Check if the URL parameter is stationID1 = replace with e.g. E208096
		if (dynamicContent == 'E208096') {
			$('#message1').show();
		} 
		// Check if the URL parameter is stationID2
		else if (dynamicContent == 'stationID2') {
			$('#message2').show();
		} 
		// Check if the URL parameter is stationID3
		else if (dynamicContent == 'stationID3') {
			$('#message3').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('#default-content').show();
		}
	});

//

//AQHI function below not in use
function initAQHIText(region) {
    if (aqhi_data) {
        aqhi_data.forEach(function (a) {
            var region_lc = a["AQHI_AREA"].toLowerCase();
            if (region_lc == region.toLowerCase().replace(/_/g, " ")) {
                aqhi_btn_text['AQHI'] = a['VALUE_CHAR'] + " - " + a['AQHICURRENT_Text1'];
                aqhi_btn_text['FORECAST_TODAY'] = a['FORECAST_TODAY_CHAR'] + " - " + a['AQHITODAY_Text1'];
                aqhi_btn_text['FORECAST_TONIGHT'] = a['FORECAST_TONIGHT_CHAR'] + " - " + a['AQHITONIGHT_Text1'];
                aqhi_btn_text['FORECAST_TOMORROW'] = a['FORECAST_TOMORROW_CHAR'] + " - " + a['AQHITOMORROW_Text1'];

                aqhi_banner_text['AQHI_RP'] = "<strong>At risk population</strong> - " + a['AQHICURRENT_Text2'];
                aqhi_banner_text['AQHI_GP'] = "<strong>General population</strong> - " + a['AQHICURRENT_Text3'];
            }
        });
    }
};


// make button active
function makeActive(selection) {

    d3.selectAll(".active").classed("active", false).attr('style', 'border: solid 0px black !important;')
    selection.classed("active", true).attr('style',
        function (d) {
            return 'border: solid 2px ' + '#ff7f0e' + ' !important;'
        })
}

t = 0

function makeButtons(keys, data) {
    var isAqhi = false;
    var buttons = d3.select('.button').selectAll('.button')
        .data(keys)
        .enter()
        .append("button")
        .attr("class", "btn btn-default")
        .attr('id', function (d, i) {
            // console.log(d)
            return d;
        })
        .text(function (d, i) {
            lab = d
            meas.forEach(function (j) {
                if (d == j['source']) {
                    lab = j['short'];
                }
            })
            return lab
        })
        .on("click", function (d) {
            // console.log(d)
            if (d !== 'FORECAST_TONIGHT' && d !== 'FORECAST_TODAY' && d !== 'FORECAST_TOMORROW') {
                t += 1
                makeActive(d3.select(this));

                updateGraph(d, data)
            }

        })
    // append values to buttons
    buttons.append("div")
        .attr("class", function (d, i) {

            if (d === 'AQHI' || d === 'FORECAST_TONIGHT' || d === 'FORECAST_TODAY' || d === 'FORECAST_TOMORROW') {
                isAqhi = true;
                decimal = '';

                meas.forEach(function (j) {
                    // console.log(j)
                    if (d == j['source']) {
                        decimal = j['decimal'];
                    }
                })

                if (data[data.length - 1][d] == undefined) {
                    var curr = 'NA';
                } else {
                    if (decimal !== undefined && decimal != '') {
                        //if predefined decimal exists, round value to the predefined decimal place
                        var curr = parseFloat(Math.round(data[data.length - 1][d] * 100) / 100).toFixed(decimal);
                    } else {
                        var curr = data[data.length - 1][d];
                    }
                }

                return 'val aqhi_btn aqhi' + curr;
            } else {
                return 'val';
            }
        })
        .data(keys)
        .html(function (d, i) {

            if (d === 'AQHI' || d === 'FORECAST_TONIGHT' || d === 'FORECAST_TODAY' || d === 'FORECAST_TOMORROW') {
                return aqhi_btn_text[d];
            } else {
                lab = '';
                decimal = '';
                meas.forEach(function (j) {
                    // console.log(j)
                    if (d == j['source']) {
                        lab = j['unit'];
                        decimal = j['decimal'];
                    }
                })


                if (data[data.length - 1][d] == undefined) {
                    var curr = 'N/A';
                } else {
                    if (decimal !== undefined && decimal != '') {
                        //if predefined decimal exists, round value to the predefined decimal place
                        var curr = parseFloat(Math.round(data[data.length - 1][d] * 100) / 100).toFixed(decimal);
                    } else {
                        var curr = data[data.length - 1][d];
                    }
                }

                return curr + ' ' + '<span style="font-size:10pt">' + lab + '<span>';
            }
        })

    if (isAqhi) {
        var aqhi_banner = d3.select('.aqhi_banner')
            .selectAll('div')
            .data(aqhi_banner_key)
            .enter()
            .append("div")
            .html(function (d) {
                return aqhi_banner_text[d];
            });
    }

    makeActive(buttons.filter(function (d) {
        return d == initGas
    }))

}



// This makes the initial graph
function makeGraphs(trace, data) {

    param = trace;

    data.forEach(function (d, i) {
        if (d[trace] == undefined) {
            d[trace] = null
        }
        if (d[trace] == "") {
            d[trace] = null
        }
    })

    var svg = d3.select("svg"),
       margin = {
            top: 10,
            right: 100,
            bottom: 140,
            left: 15
        },
        margin2 = {
            top: 430,
            right: 5,
            bottom: 30,
            left: 15
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
        yAxis = d3.axisLeft(y),
        yAxisRight = d3.axisRight(y);

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
        .defined(function (d) {
            return d[trace] != null;
        })
        .x(function (d) {
            return x(d.DATE_LOCAL);
        })
        .y(function (d) {
            return y(+d[trace]);
        });

    line2 = d3.line()
        .defined(function (d) {
            return d[trace] != null;
        })
        .x(function (d) {
            return x2(d.DATE_LOCAL);
        })
        .y(function (d) {
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
        .x(function (d) {
            return x(d.DATE_LOCAL);
        })
        .y(function (d) {
            return y(thres[trace])
        })

    thesLine1 = d3.line()
        .x(function (d) {
            // console.log(d)
            return x(d.DATE_LOCAL);
        })
        .y(function (d) {
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
    var not_null = data.filter(function (d) { return d[trace] != null; });
	//adding more filter to account for blanks -JAR
	not_null = not_null.filter(function (d) { return d[trace] !== ''; });
	
    y_domain_min = d3.min(not_null, function (d) { return +d[trace] });
    y_domain_max = d3.max(not_null, function (d) { return +d[trace] });

    y.domain([Math.floor(y_domain_min), Math.ceil(y_domain_max)]);

    x2.domain(x.domain());
    y2.domain(y.domain());

    xGrid = focus.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .tickSize(-height)
            .tickFormat("")
        );

    yGrid = focus.append("g")
        .attr("class", "grid")
        .call(d3.axisLeft(y)
            .tickSize(-width)
            .tickFormat("")
        );

    focus.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    yaxe = focus.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis.tickFormat(function (d) { if (d >= 11 && trace === 'AQHI') { return '10+'; } else { return d; } }));

    yaxeR = focus.append("g")
        .attr("class", "axis axis--y right")
        .call(yAxisRight.tickFormat(function (d) { if (d >= 11 && trace === 'AQHI') { return '10+'; } else { return d; } }))
        .attr("transform", "translate(" + width + ",0)");

    //main graph
    Line_chart.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .style("stroke", function () {
            if (met.includes(trace)) {
                c = '#6B8E23'
            } else {
                c = '#2b8cbe'
            }
            return c
        });

    threshold = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "focus")
        .attr("clip-path", "url(#clip)");

    if (trace in thres && (thres[trace] * .8 < d3.max(data, d => +d[trace]))) {
        threshold.append('path')
            .attr('class', 'line1')
            .attr("d", thesLine(data));
    } else {
        threshold.append('path')
            .datum(data)
            .attr('d', thesLine1);
    }

    //mini graph
    context.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("id", "line2")
        .attr("d", line2)
        .style("stroke", function () {
            if (met.includes(trace)) {
                c = '#6B8E23'
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
        .attr("r", 4);

    focus1.append("text")
        .attr("x", -20)
        // .attr("y", -20)
        .attr("dy", "-1em");

    //draw background color for AQHI
    if (trace == 'AQHI') {
        drawIndexLevelBackgroundColor(height, width, margin.left, margin.top, svg);
    }

    svg.append("rect")
        .attr("class", "zoom")
        .attr("id", "overlay")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .call(zoom)
        .on("mouseover", function () {
            focus1.style("display", null);
        })
        .on("mouseout", function () {
            focus1.style("display", "none");
        })
        .on("mousemove", mousemove);


    un = d3.values(meas).filter(function (vals) {
        return vals['source'] == initGas
    })

    ylab = svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(un[0]["unit"]);

    function getIndexLevelHeight(h2, h1, max_height) {
        if (h1 < 0 && h2 < 0) {
            return 0;
        } else if (h2 < 0) {
            return h1;
        } else {
            return h1 > max_height ? max_height - h2 : h1 - h2;
        }
    }

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
            .style("font-size", "20px")  
            .text((trace === 'AQHI' && d[trace] >= 11) ? '10+' : d[trace]);


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

        var dataFiltered = data.filter(function (d, i) {
            if ((d.DATE_LOCAL >= t.rescaleX(x2).domain()[0]) && (d.DATE_LOCAL <= t.rescaleX(x2).domain()[1])) {
                return d.DATE_LOCAL;
            }
        });

        dataFiltered = dataFiltered.filter(function (d) { return d[trace] != null; });

        var y_domain_min = Math.floor(d3.min(dataFiltered.map(function (d) { return +d[param] })));
        var y_domain_max = Math.ceil(d3.max(dataFiltered.map(function (d) { return +d[param] })));

        if (param == "WDIR_VECT") {
            y_domain_max = 378;
            y_domain_min = 0;

            yAxisRight.tickValues([0, 90, 180, 270, 360])
                .tickFormat(function (d) { if (d == 0) { return "N" } else if (d == 90) { return "E"; } else if (d == 180) { return "S"; } else if (d == 270) { return "W" } else if (d == 360) { return "N" } else { return "" } });

            yAxis.tickValues([0, 90, 180, 270, 360])
                .tickFormat(function (d) { if (d == 0) { return "0" } else if (d == 90) { return "90"; } else if (d == 180) { return "180"; } else if (d == 270) { return "270" } else if (d == 360) { return "360" } else { return "" } });
        } else {
            yAxisRight = d3.axisRight(y);
            yAxis = d3.axisLeft(y);
        }

        y.domain([y_domain_min, y_domain_max]);

        selected_domain = t.rescaleX(x2).domain();

        x.domain(t.rescaleX(x2).domain());
        d3.select(".selected-date").html('Selected date range from: <strong>' + formatTime(t.rescaleX(x2).domain()[0]) + ' to: ' + formatTime(t.rescaleX(x2).domain()[1]) + '</strong>');
        Line_chart.select(".line").attr("d", line);
        focus.select(".axis--x").call(xAxis);
        focus.select(".axis--y").call(yAxis.tickFormat(function (d) { if (d >= 11 && trace === 'AQHI') { return '10+'; } else { return d; } }));
        focus.select(".axis--y.right").call(yAxisRight.tickFormat(function (d) { if (d >= 11 && trace === 'AQHI') { return '10+'; } else { return d; } }));
        context.select(".brush").call(brush.move, x.range().map(t.invertX, t));

        if (trace == 'AQHI') {
            drawIndexLevelBackgroundColor(height, width, margin.left, margin.top, svg);
        }

        if (scatter != undefined) {
            scatter.selectAll(".dot").transition(t).attr("cx", function (d) { return x(d.DATE_LOCAL) });
        }

        //update threshold line
        threshold.selectAll("path")
            .attr('class', 'line1')
            .transition()
            .duration(1000)
            .attr("d", thesLine(data));

        xGrid.transition().call(
            d3.axisBottom(x)
                .tickSize(-height)
                .tickFormat("")
        );

        if (param != "WDIR_VECT" && param != "WDIR_UVEC") {
            yGrid.transition().call(d3.axisLeft(y)
                .tickSize(-width)
                .tickFormat(""));
        };
    }

}


// Update the graph when selecting another measure
function updateGraph(trace, data) {

    param = trace;

    data.forEach(function (d) {
        if (d[trace] == undefined) {
            d[trace] = null
        }
        if (d[trace] == "") {
            d[trace] = null
        }
    })

    var svg = d3.select("svg"),
       margin = {
            top: 10,
            right: 100,
            bottom: 140,
            left: 15
        },
        margin2 = {
            top: 430,
            right: 5,
            bottom: 30,
            left: 15
        },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        height2 = +svg.attr("height") - margin2.top - margin2.bottom;
	
	
    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0])
        i = bisectDate(data, x0, 1)
        d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.DATE_LOCAL > d1.DATE_LOCAL - x0 ? d1 : d1;

        focus1.attr("transform", "translate(" + x(d.DATE_LOCAL) + "," + y(d[trace]) + ")");
        focus1.append("circle")
        .attr("r", 4)
        .classed("dot", true);
        focus1.select("text").text(formatMonth(d.DATE_LOCAL))
            .append('tspan')
            .attr('dy', "1em")
            .attr('dx', "-2em")
            .style("font-size", "20px") 
            .text(d[trace]);
        

    };

    var y_domain_min, y_domain_max, y2_domain_min, y2_domain_max;
    var not_null = data.filter(function (d) { return d[trace] != null; });
		//adding more filter to account for blanks -JAR
	not_null = not_null.filter(function (d) { return d[trace] !== ''; });
	
    y2_domain_min = d3.min(not_null, function (d) { return +d[trace] });
    y2_domain_max = d3.max(not_null, function (d) { return +d[trace] });


    if (selected_domain != null && selected_domain !== undefined) {
        var dataFiltered = data.filter(function (d, i) {
            if ((d.DATE_LOCAL >= selected_domain[0]) && (d.DATE_LOCAL <= selected_domain[1])) {
                return d.DATE_LOCAL;
            }
        });

        y_domain_min = d3.min(dataFiltered, function (d) { return +d[trace] });
        y_domain_max = d3.max(dataFiltered, function (d) { return +d[trace] });
    } else {
        y_domain_min = y2_domain_min;
        y_domain_max = y2_domain_max;
    }

    if (trace === "WDIR_VECT" || trace === "WDIR_UVEC") {
        y_domain_max = 378;
        y_domain_min = 0;
        y2_domain_max = 378;
        y2_domain_min = 0;

        y.domain([y_domain_min, y_domain_max]);
        y2.domain([y2_domain_min, y2_domain_max]);
    } else {

        y.domain([Math.floor(y_domain_min), Math.ceil(y_domain_max)]);
        y2.domain([Math.floor(y2_domain_min), Math.ceil(y2_domain_max)]);
    }


    if (trace === "BAR_PRESS") {
        y_domain_max = 115;
        y_domain_min = 85;
        y2_domain_max = 115;
        y2_domain_min = 85;

        y.domain([y_domain_min, y_domain_max]);
        y2.domain([y2_domain_min, y2_domain_max]);
    } else {

        y.domain([Math.floor(y_domain_min), Math.ceil(y_domain_max)]);
        y2.domain([Math.floor(y2_domain_min), Math.ceil(y2_domain_max)]);
    }
    


	
    yAxis = d3.axisLeft(y);
    if (trace === "WDIR_VECT") {
        yAxisRight = d3.axisRight(y)
            .tickValues([0, 90, 180, 270, 360])
            .tickFormat(function (d) { if (d == 0) { return "N" } else if (d == 90) { return "E"; } else if (d == 180) { return "S"; } else if (d == 270) { return "W" } else if (d == 360) { return "N" } else { return "" } });

        yAxis.tickValues([0, 90, 180, 270, 360])
            .tickFormat(function (d) { if (d == 0) { return "0" } else if (d == 90) { return "90"; } else if (d == 180) { return "180"; } else if (d == 270) { return "270" } else if (d == 360) { return "360" } else { return "" } });
        yGrid.call(d3.axisLeft(y)
            .tickValues([0, 90, 180, 270, 360])
            .tickSize(-width)  // Was 870 and horizontal gridlines did not go all the way across graph.  Was -1120 prior to changing to -width
            .tickFormat("")
        );
    } else {
        yAxisRight = d3.axisRight(y);
        yGrid.transition().call(d3.axisLeft(y)
            .tickSize(-width)  // Was 870 and horizontal gridlines did not go all the way across graph. Was -1120 prior to changing to -width
            .tickFormat(""));
    }


    yaxe.transition()
        .call(yAxis);

    yaxeR.transition()
        .call(yAxisRight);

    un = d3.values(meas).filter(function (vals) {
        return vals['source'] == trace
    })

    ylab.transition()
        .text(un[0]["unit"])


    line = d3.line()
        .defined(function (d) {
            return d[trace] != null;
        })
        .x(function (d) {
            return x(d.DATE_LOCAL);
        })
        .y(function (d) {
            // console.log(d[trace])
            return y(d[trace]);
        });


    line2 = d3.line()
        .defined(function (d) {
            return d[trace] != null;
        })
        .x(function (d) {
            return x2(d.DATE_LOCAL);
        })
        .y(function (d) {
            return y2(+d[trace]);
        });


    Line_chart = d3.select("g").transition();
    context = d3.select("#context").transition();


    if (trace === "WDIR_VECT") {

        if (scatter == undefined) {
            scatter = d3.select("svg")
                .append("g")
                .attr('id', 'scatter')
                //.attr("transform", "translate(50,20)")  // 50,20 causes offset graph markings
				//.attr("transform", "translate(10,10)")    // 10,10 aligns with origin
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .attr("clip-path", "url(#clip)");
        }

        scatter.selectAll(".dot")
            .data(data)
            .enter().append("svg:circle")
            .classed("dot", true)
            .attr("cx", function (d, i) { return x(d.DATE_LOCAL); })
            .attr("cy", function (d) { return y(d[trace]); })
            .attr("r", 4)
            .style("fill", '#6B8E23')
            .style("opacity", "0");

        scatter.selectAll(".dot")
            .transition()
            .duration(1000)
            .style("opacity", ".7");
        Line_chart.select(".line")
            .transition()
            .duration(1000)
            .style("opacity", "0");

    } else {
        d3.selectAll("circle").transition().duration(250).remove();

        Line_chart.select(".line")
            .style("opacity", "1");

        context.select("#line2")
            .style("opacity", "1");
    }



    // console.log(trace)
    Line_chart.select(".line")
        .duration(750)
        .attr("d", line)
        .style("stroke", function (d) {
            // console.log(d)
            if (met.includes(trace)) {
                c = '#6B8E23'
            } else {
                c = '#2b8cbe'
            }
            return c
        });
    context.select("#line2")
        .duration(750)
        .attr("d", line2)
        .style("stroke", function (d) {
            if (met.includes(trace)) {
                c = '#6B8E23'
            } else {
                c = '#2b8cbe'
            }
            return c
        });

    thesLine = d3.line()
        .x(function (d) {
            return x(d.DATE_LOCAL);
        })
        .y(function (d) {
            return y(thres[trace])
        })


    thesLine1 = d3.line()
        .x(function (d) {
            return x(d.DATE_LOCAL);
        })
        .y(function (d) {
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
            .duration(1)
            .attr("d", thesLine1(data));
    }

    d3.select(".zoom")
        .on("mousemove", mousemove);

}

function drawIndexLevelBackgroundColor(height, width, margin_left, margin_top, svg) {

    for (var key in index_lvl) {
        var index_height = 0;
        if (y(index_lvl[key]['min']) < 0 && y(index_lvl[key]['max']) < 0) {
            index_height = 0;
        } else if (y(index_lvl[key]['max']) < 0) {
            index_height = y(index_lvl[key]['min']);
        } else {
            index_height = y(index_lvl[key]['min']) > height ? height - y(index_lvl[key]['max']) : y(index_lvl[key]['min']) - y(index_lvl[key]['max']);
        }

        if (index_height > height) {
            index_height = height;
        }

        var index_rect = d3.select("#" + key);
        if (index_height > 0) {
            if (!index_rect.empty()) {
                index_rect.transition()
                    .attr("y", y(index_lvl[key]['max']) < 0 ? 0 : y(index_lvl[key]['max']))
                    .attr("height", index_height)
            } else {
                index_rect = svg.append("rect")
                    .attr("id", key)
                    .attr("x", 0)
                    .attr("y", y(index_lvl[key]['max']) < 0 ? 0 : y(index_lvl[key]['max']))
                    .attr("width", width)
                    .attr("height", index_height)
                    .attr("fill", index_lvl[key]['color'])
                    .attr("transform", "translate(" + margin_left + "," + margin_top + ")")
                    .attr("opacity", index_lvl[key]['opac']);
            }
        } else {
            if (index_rect) {
                d3.selectAll("#" + key).remove();
            }
        }
    }
}