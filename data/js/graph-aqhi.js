// Version Apr 6 2022 - JQ

// This gets the AQHI area name from the url
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

var aqhi, focus, context, height,focus1, parseTime, formatTime, bisectDate;
var xScale, x, y, x2, y2, y_domain_max, labels, aqhiwebmap_data, aqhi_area_data;

var aqhi_banner_key = ['AQHI_PLUS', 'AQHI_RP', 'AQHI_GP']

// These are the short names and units for each measurement
d3.csv('labels.csv', function (err, data) {
    labels = data
});

d3.csv('https://www.env.gov.bc.ca/epd/bcairquality/aqo/csv/AQHIWebMap.csv', function (err, data) {
    //if(err) throw err;
    aqhiwebmap_data = data
});




// use csv-parser to load data using AQHI area name (csv named using AQHI area name, ex. AQHI-COMOX_VALLEY.csv)
d3.json('https://csv-parser.api.gov.bc.ca/?source=https://www.env.gov.bc.ca/epd/bcairquality/aqo/csv/Hourly_Raw_Air_Data/Station/' + QueryString + '.csv&format=json', function (err, data) {

    //console.log(QueryString.includes('AQHI'))

    //remove header
    data.pop(1)


    // Format the timestamp and presentations
    parseTime = d3.timeParse("%Y-%m-%d %H:%M");
    formatTime = d3.timeFormat("%Y-%m-%d %H:%M");
    formatMonth = d3.timeFormat("%b %d %H:%M");
    formatFullDate = d3.timeFormat("%B %d, %Y %H:%M");

    data.forEach(function (d, i) {

        d.DATE_LOCAL = parseTime(d.DATE_LOCAL)
    })
    data.sort((a, b) => a.DATE_LOCAL - b.DATE_LOCAL);
	
    if (QueryString.includes('AQHI')) {		
        
		// initial aqhi_text and aqhi_label objects
		aqhi_btn_label = {}
		
        aqhi_btn_text = {}

        aqhi_banner_text = {
			'AQHI_PLUS': 'NA',
            'AQHI_RP': 'NA',
            'AQHI_GP': 'NA'
		}
		
		//get data from AQHIWebMap.csv
        initAQHIText(QueryString.replace("AQHI-", ""));

		/*####################################
		//AQHI station csv files data already padded, probably do not need code below 
		
        // //get the date range 
        // var xx_min = d3.min(data, function (d) { return new Date(d.DATE_LOCAL); });
        // var xx_max = d3.max(data, function (d) { return new Date(d.DATE_LOCAL); });
		// //get date range, use PST time to fix DST issues
        // //var xx_min_PST = d3.min(data, function (d) { return new Date(d.DATE_PST); });
        // //var xx_max_PST = d3.max(data, function (d) { return new Date(d.DATE_PST); });

        // //find an AQHI item as template
        // var template = null;
        // for (var l = 0; l < data.length; l++) {
            // if (data[l].AQHI_INT != undefined && data[l].AQHI_INT != null) {
                // template = data[l];
                // break;
            // }
        // }

        // //calculate how many item should be in the data set based on the date range
        // var diff_hours = Math.abs(xx_min - xx_max) / 36e5;
		// //revised: assumes input data length is number of hours
        // //var diff_hours = data.length + 1; 
		
        // //populate a new date array with each time slot
        // var date_array = [];
        // date_array.push(xx_min);
        // for (var i = 0; i <= diff_hours; i++) {	 
		
            // date_array.push(d3.timeHour.offset(xx_min, i));
        // }

        // //loop through the new date array and find the missing data item  
        // var new_data = [];
        // for (var i = 0; i < date_array.length; i++) {
            // var aqhi_data = null;
            // for (var x = 0; x < data.length; x++) {
                // var org_date_local = data[x].DATE_LOCAL;
                // var new_date_local = date_array[i];
                // if (org_date_local.getDate() == new_date_local.getDate() &&
                    // org_date_local.getMonth() == new_date_local.getMonth() &&
                    // org_date_local.getHours() == new_date_local.getHours() &&
                    // org_date_local.getFullYear() == new_date_local.getFullYear()) {

                    // aqhi_data = data[x];
                    // break;
                // }
            // }
            // if (aqhi_data && aqhi_data.AQHI_INT !== '') {
                // //if an item exist for the time slot, add it into the new data set
                // new_data.push(aqhi_data);
            // } else {
                // //if not existing item found, use the template item with new time slot and set null to AQHI, add it into the new data set
                // var new_item = template;
                // new_item.AQHI_INT = null;
                // new_item.DATE_LOCAL = date_array[i];
                // new_data.push(new_item);
            // }
        // }
        // data = new_data;
		####################################*/


		bisectDate = d3.bisector(function (d) {
			return d.DATE_LOCAL;
		}).left;

		var list_of_aq_measures = []
		meas = [];

		// define index level data for background color
		// index_lvl = {
		// 	'very_high': { 'max': 12.5, 'min': 10.0, 'color': '#660000', 'opac': 0.1 },
		// 	'high': { 'max': 10.0, 'min': 7.0, 'color': '#FF0000', 'opac': 0.05 },
		// 	'moderate': { 'max': 7.0, 'min': 4.0, 'color': '#FFCC00', 'opac': 0.05 },
		// 	'low': { 'max': 4.0, 'min': 0, 'color': '#00BFFF', 'opac': 0.05 }
		// }
        // all backgrounds set to white
        index_lvl = {
        	'very_high': { 'max': 12.5, 'min': 10.0, 'color': '#FFFFFF', 'opac': 0.1 },
        	'high': { 'max': 10.0, 'min': 7.0, 'color': '#FFFFFF', 'opac': 0.05 },
        	'moderate': { 'max': 7.0, 'min': 4.0, 'color': '#FFFFFF', 'opac': 0.05 },
        	'low': { 'max': 4.0, 'min': 0, 'color': '#FFFFFF', 'opac': 0.05 }
        }


		//aqhi_btn_label keys are pulled from AQHIWebMap.csv
		$.each(aqhi_btn_label, function (key, value) {
			if(key !== 'undefined'){
				ind = _(labels).filter(function (d) {
					return d['Data Source'] === key;
				});
				if (ind.length > 0) {
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

		//aqhi_area_data represents a single line aqhi area with its data in AQHIWebMap.csv
		//list_of_aq_measures - AQHI, Today, Tonight, Tomorrow, Tomorrow Night, Next Day
		makeButtonsAQHI(list_of_aq_measures, aqhi_area_data);
		//this function uses the 30 day AQHI station csv file, values in int (AQHI_INT)
		makeGraphs('AQHI_INT', data)
	
		//Title and date range titles
        d3.select(".current-cond").html(data[0]["AQHI_AREA"] + ' - Air Quality Health Index');
		d3.select(".current-date").html('Latest data at: <strong>' + data[data.length - 1].DATE + '</strong>. Current and forecasted Air Quality Health Index (AQHI) data is displayed below along with a graph <span class="glyphicon glyphicon-stats" aria-hidden="true"></span> of the last 30-days.');
		document.querySelector.apply(document,['title']).innerHTML = ''+ data[0]["AQHI_AREA"] + ' - Air Quality Health Index - Province of British Columbia';
	
	}
});



function initAQHIText(region) {
    if (aqhiwebmap_data) {
        aqhiwebmap_data.forEach(function (a) {
            var region_lc = a["AQHI_AREA"].toLowerCase();
            if (region_lc == region.toLowerCase().replace(/_/g, " ")) {
				
				//keys are "AQHI", "Today", "Tonight", "Tomorrow", "Tomorrow Night" or "Next Day", used to create labels on top of buttons
				
				//aqhi_btn_label - keys are label names on top of buttons (before transformed by labels.csv), values are column names of data columns in AQHIWebMap.csv that have the actual values
				aqhi_btn_label['AQHI'] = 'VALUE';
				aqhi_btn_label[a['FIRST_FORECAST_LABEL']] = 'FIRST_FORECAST';
                aqhi_btn_label[a['SECOND_FORECAST_LABEL']] = 'SECOND_FORECAST';
                aqhi_btn_label[a['THIRD_FORECAST_LABEL']] = 'THIRD_FORECAST';
                aqhi_btn_label[a['FOURTH_FORECAST_LABEL']] = 'FOURTH_FORECAST';
				
				//aqhi_btn_text - values are used to create text on buttons
                aqhi_btn_text['AQHI'] = a['VALUE_CHAR'] + " - " + a['AQHICURRENT_Text1'];
				aqhi_btn_text[a['FIRST_FORECAST_LABEL']] = a['FIRST_FORECAST_CHAR'] + " - " + a['FIRST_FORECAST_Text1'];
                aqhi_btn_text[a['SECOND_FORECAST_LABEL']] = a['SECOND_FORECAST_CHAR'] + " - " + a['SECOND_FORECAST_Text1'];
                aqhi_btn_text[a['THIRD_FORECAST_LABEL']] = a['THIRD_FORECAST_CHAR'] + " - " + a['THIRD_FORECAST_Text1'];
                aqhi_btn_text[a['FOURTH_FORECAST_LABEL']] = a['FOURTH_FORECAST_CHAR'] + " - " + a['FOURTH_FORECAST_Text1'];
				
				//used to create health msg banner
                aqhi_banner_text['AQHI_PLUS'] = "" + a['AQHIPLUS_Text'];
                aqhi_banner_text['AQHI_RP'] = "<strong>At risk population</strong> - " + a['AQHICURRENT_Text2'];
                aqhi_banner_text['AQHI_GP'] = "<strong>General population</strong> - " + a['AQHICURRENT_Text3'];
				
				aqhi_area_data = a;
				
            }
        });
    }
};


// Dynamic Content - custom station message

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

	// Check if the URL parameter is stationID1 = replace with e.g. AQHI-Central_Okanagan
	if (dynamicContent == 'AQHI-SOUTH_OKANAGAN') {
		$('#message2').show();
	} 
	// Check if the URL parameter is stationID2
	else if (dynamicContent == 'AQHI-SPARWOOD') {
		$('#message1').show();
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
	

// make button active
function makeActive(selection) {

    d3.selectAll(".active").classed("active", false).attr('style', 'border: solid 0px black !important;')
    selection.classed("active", true).attr('style',
        function (d) {
            return 'border: solid 2px ' + '#ff7f0e' + ' !important;'
        })
}

//AQHI graph buttons on top of the graph
function makeButtonsAQHI(keys,data) {
    var temp = [];
    var i = 0;
    for (let k of keys) {
        temp[i] = k;
        i++;
    }
    var mainkey = [temp[0]]
    var secondarykeys = temp;

    // main forecast button, rendered in a different spot on the page
    d3.select('.mainbutton').selectAll('.mainbutton')
    .data(mainkey)
    .enter()
    .append("button")
    .attr("class", "btn btn-default-aqhi")
    .attr('id', function (d, i) {
        // console.log(d)
        //change id of buttons - space becomes "-", ex. Next Day -> Next-Day
        //for visualization.css prevent pointer-events for these buttons
        return d.replace(/\s+/g, "-");
    })
    .text(function (d, i) {
        lab = d
        //change label ex. AQHI -> Observed AQHI using labels.csv mapping
        meas.forEach(function (j) {
            if (d == j['source']) {
                lab = j['short'];
            }
        })
        return lab
    })
    .on("click", function (d) {
        //console.log(d)
        if (d === 'AQHI') {
            makeActive(d3.select(this));
        } 
    })

    // secondary forecast buttons
    d3.select('.secondarybutton').selectAll('.secondarybutton')
    .data(secondarykeys)
    .enter()
    .append("button")
    .attr("class", "btn btn-default-aqhi")
    .attr('id', function (d, i) {
        // console.log(d)
        //change id of buttons - space becomes "-", ex. Next Day -> Next-Day
        //for visualization.css prevent pointer-events for these buttons
        return d.replace(/\s+/g, "-");
    })
    .text(function (d, i) {
        lab = d
        //change label ex. AQHI -> Observed AQHI using labels.csv mapping
        meas.forEach(function (j) {
            if (d == j['source']) {
                lab = j['short'];
            }
        })
        return lab
    })

    // select all the buttons
    var buttons = d3.selectAll('.button').selectAll('.btn');
		
    // append values to buttons
    buttons.append("div")
        .attr("class", function (d, i) {
			if (d === 'AQHI' || d === 'Today' || d === 'Tonight' || d === 'Tomorrow' || d === 'Tomorrow Night' || d === 'Next Day') {
				decimal = '';

				meas.forEach(function (j) {
					// console.log(j)
					if (d == j['source']) {
						decimal = j['decimal'];
					}
				})

				if (data[aqhi_btn_label[d]] == undefined) {
					var curr = 'NA';
				} else {
					if (decimal !== undefined && decimal != '') {
						//if predefined decimal exists, round value to the predefined decimal place
						var curr = parseFloat(Math.round(data[aqhi_btn_label[d]] * 100) / 100).toFixed(decimal);
					} else {
						var curr = data[aqhi_btn_label[d]];
					}
				}
				return 'val aqhi_btn aqhi' + curr;
			}
        })
        .data(keys)
		//put text on buttons
        .html(function (d, i) {
            if (d === 'AQHI' || d === 'Today' || d === 'Tonight' || d === 'Tomorrow' || d === 'Tomorrow Night' || d === 'Next Day') {
                return aqhi_btn_text[d];
            }
        })
	
	//adding health messages
	var aqhi_banner = d3.select('.aqhi_banner')
		.selectAll('div')
		.data(aqhi_banner_key)
		.enter()
		.append("div")
		.html(function (d) {
			return aqhi_banner_text[d];
		});

	//Yellow box around "Observed AQHI" button
    makeActive(buttons.filter(function (d) {
        return d == 'AQHI'
    }))

    // the main button is renderered twice, remove the secondary version of it. 
    d3.select('.secondarybutton').select('#AQHI').remove();

}

// This makes the initial graph
function makeGraphs(trace, data) {
	
	//trace is 'AQHI_INT'
	data.forEach(function (d, i) {
        if (d[trace] == undefined) {
            d[trace] = null
        }
        if (d[trace] == "") {
            d[trace] = null
        }
    })
	var currentZoomLevel = 1;
    var svg = d3.select("svg"),
        margin = {
            top: 10,
            right: 90,
            bottom: 140,
            left: 50
        },
        margin2 = {
            top: 430,
            right: 5,
            bottom: 30,
            left: 50
        },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        height2 = +svg.attr("height") - margin2.top - margin2.bottom;
	
	xScale = d3.scaleBand().range([0, width]).padding(0.001);
    x = d3.scaleTime().range([0, width])
    x2 = d3.scaleTime().range([0, width])
    y = d3.scaleLinear().range([height, 0])
    y2 = d3.scaleLinear().range([height2, 0])

    // create a crosshatch pattern which is used for sections where no data exists
    const defs = svg.append("defs");
    defs
        .append("svg:pattern")
        .attr("id", "xhatch")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 6)
        .attr("height", 6)
        .append("svg:image")
        .attr("xlink:href","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwLjM3OSAwLjMyMiA0LjIwOCA0LjIwOCIgd2lkdGg9IjQuMjA4IiBoZWlnaHQ9IjQuMjA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIHg9IjAuNTEyIiB5PSIwLjMyMiIvPgogIDxwYXRoIGQ9Ik0gMC41MTIgMC4zMjIgTCA0LjQ1NCA0LjM5NyBMIDAuNTEyIDAuMzIyIFogTSA0LjU4NyAwLjMyMiBMIDAuMzc5IDQuNTMgTCA0LjU4NyAwLjMyMiBaIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlPSIjNTU1Ii8+Cjwvc3ZnPg==")
        .attr("width", 6)
        .attr("height", 6)
        .attr("x", 0)
        .attr("y", 0);
	
	//initiate brush
    var brush = d3.brushX()
        .extent([
            [0, 0],
            [width, height2]
        ])
        .on("brush end", brushed);
	
	//initiate zoom, zoom in with max scale 100
    var zoom = d3.zoom()
        .scaleExtent([1, 100])
        .translateExtent([
            [0, 0],
            [width, 11]
        ])
        .extent([
            [0, 0],
            [width, 11]
        ])
        .on("zoom", zoomed);
	
	//initiate grey box for clipping on small bar graph
    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);
	
	//initiate bars on main bar chart graph (top)
    var Bar_chart = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("clip-path", "url(#clip)");

	//initiate area for main bar chart graph (top)
    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//initiate area for small bar chart graph (bottom)
    var context = svg.append("g")
        .attr('id', 'context')
        .attr("class", "context")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


	//define domains, xScale only for bars
    xScale.domain(data.map(function(d){ return d.DATE_LOCAL }));
	x.domain(d3.extent(data, d => d.DATE_LOCAL));
	x2.domain(x.domain());

    var not_null = data.filter(function (d) { return d[trace] != null; });
	not_null = not_null.filter(function (d) { return d[trace] !== ''; });
 
	y_domain_min = 0;
    y_domain_max = 10;
	
    y.domain([y_domain_min, y_domain_max + 1]);
    y2.domain(y.domain());
	    
	
	//initiate axes
	var xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%a %d"));
	var xAxisZoomed = d3.axisBottom(x).tickFormat(d3.timeFormat("%I %p"));
    var xAxis2 = d3.axisBottom(x2).tickFormat(d3.timeFormat("%a %d"));
	var yAxis = d3.axisLeft(y)
			.tickValues(y.ticks().filter(tick => Number.isInteger(tick) && tick !== 0 && tick <= 11))
			.tickFormat(function (d) { if (d >= 11) { return '10+'; } else { return d; } });
    var yAxisRight = d3.axisRight(y)
			.tickValues(y.ticks().filter(tick => Number.isInteger(tick) && tick !== 0 && tick <= 11))
			.tickFormat(function (d) { if (d >= 11) { return '10+'; } else { return d; } });
    // add month axis
    xMonth = focus.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("x", width / 2)
        .attr("y", height + 40)
        .attr("class", "axis axis--month")
    var xMonthAxis2 = d3.axisBottom(x)
        .tickSize(20, 0, 0)
        .tickFormat(function(d, i){
            var tickCenter = Math.round((x.ticks().length+1) / 2)-1;
            return i == tickCenter ? d3.timeFormat("%B")(d) : "";
        });
	
	//initiate bar colours
	var barColours = d3.scaleOrdinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11])
		.range(['#00ccff', '#0099cc', '#006699', '#ffff00', '#ffcc00', '#ff9933', '#ff6666', '#ff0000', '#cc0000', '#990000', '#660000'])
	
  
	//add x axis grid
    xGrid = focus.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .tickSize(-height)
            .tickFormat("")
        );
	
	//add y axis grid
    yGrid = focus.append("g")
        .attr("class", "grid")
        .call(d3.axisLeft(y)
			.tickValues(y.ticks().filter(tick => Number.isInteger(tick)))
            .tickSize(-width)
            .tickFormat("")
        );
		
		
	//add axes to main bar chart graph (top)
    focus.append("g")
        .attr("class", "axis axis--x")
		.attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    focus.append("g")
        .attr("class", "axis axis--month")
        .attr("transform", "translate(0," + height + ")")
    
    focus.append("g")
        .attr("class", "axis axis--y")
		.call(yAxis);

    focus.append("g")         // Add the Y Axis
        .attr("class", "axis axis--y2")
        .call(yAxis);

    // Add the text label for the Y axis
    focus.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("AQHI");
    const xAxisLabel = focus.append("text")
        .attr("class", "x-axis-label")
        .attr("style", "font-size: 12px")
        .attr("y", height + 40)
        .attr("x", width / 2)
        .style("text-anchor", "middle");

    focus.append("g")
        .attr("class", "axis axis--y right")
		.call(yAxisRight)
        .attr("transform", "translate(" + width + ",0)");

	//add bars to main bar chart graph (top)
	Bar_chart.selectAll("bar")
			.data(data)
			.enter().append("svg:rect")
			.attr("class", "bar")
			.attr("x", function(d) { return x(d.DATE_LOCAL) - xScale.bandwidth(); }) //shift bars to change to hour ending AQHI
			.attr("y", function (d) { if (d[trace] != null) { return y(d[trace]); } else { return y(y_domain_max + 1); } }) //if missing AQHI, bars appear grey and extend to top of graph
			.attr("width", xScale.bandwidth())
			.attr("height", function (d) { if (d[trace] != null) { return height - y(d[trace]); } else { return height - y(y_domain_max + 1); } }) 
			.attr("fill", function (d) { if (d[trace] != null) { return barColours(d[trace]); } else { return "url(#xhatch)"; } }) 
			.attr("opacity", function (d) { if (d[trace] != null) { return 1; } else { return 0.3; } }) 

	//add bars to small bar chart graph (bottom)
	context.selectAll("bar")
		.data(data)
		.enter().append("svg:rect")
		.attr("class", "barContext")
		.attr("x", function(d) { return x(d.DATE_LOCAL) - xScale.bandwidth(); })
		.attr("y", function (d) { if (d[trace] != null) { return y2(d[trace]); } else { return y2(y_domain_max + 1); } }) 
		.attr("width", xScale.bandwidth())
		.attr("height", function (d) { if (d[trace] != null) { return height2 - y2(d[trace]); } else { return height2 - y2(y_domain_max + 1); } }) 
		.attr("fill", function (d) { if (d[trace] != null) { return barColours(d[trace]); } else { return "url(#xhatch)"; } }) 
		.attr("opacity", function (d) { if (d[trace] != null) { return 1; } else { return 0.3; } }) 
			
	//add x axis to small bar chart graph (bottom)		
    context.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xAxis2);
    context.append("g")
        .attr("class", "axis axis--month")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xMonthAxis2)

	//add brush feature to small bar chart graph (bottom)
    context.append("g")
        .attr("class", "brush")
        .call(brush)
        .call(brush.move, x.range());

	//add red circle when hovering on each data point and initiate DATE/TIME & AQHI texts beside it 
    focus1 = focus.append("g")
        .attr("class", "focus1")
        .style("display", "none");

    focus1.append("circle")
        .attr("r", 3);

    focus1.append("text")
        .attr("x", -20)
        // .attr("y", -20)
        .attr("dy", "-1em");

    //draw background color for AQHI
	drawIndexLevelBackgroundColor(height, width, margin.left, margin.top, svg);

	//add zoom feature to main bar chart graph (top)
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
	
	//add text/red circle on mousemove/hover
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
            .text((d[trace] >= 11) ? '10+' : d[trace]);
    };

    // These control the brusing and zooming
    function brushed() {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
        var s = d3.event.selection || x2.range();
		var scale = width / (s[1] - s[0]);
		
		//allow brushing only if scale <= 100, and only if AQHI is present for time period selected
		if (scale <= 100 && y_domain_max != null){
			x.domain(s.map(x2.invert, x2));
            const newDomain = d3.event.selection.map(x.invert);
            updateXAxisLabel(newDomain);
			
			//recreate bar chart with new x scale and change bar width and shift bar according to scale
			Bar_chart.selectAll(".bar")
				.attr("x", function(d) { return x(d.DATE_LOCAL) - xScale.bandwidth() * scale; })
				.attr("y", function (d) { if (d[trace] != null) { return y(d[trace]); } else { return y(y_domain_max + 1); } })
				.attr("height", function (d) { if (d[trace] != null) { return height - y(d[trace]); } else { return height - y(y_domain_max + 1); } })
				.attr("width",xScale.bandwidth() * scale)
				.attr("stroke","black")
				.attr("opacity", function (d) { if (d[trace] != null) { return 1; } else { return 0.3; } });
				
			//show bar colours and border around bars only if scale >= 3, does not apply for hours with missing AQHI
			if (scale >=3) {
				Bar_chart.selectAll(".bar")
					.attr("fill", function (d) { if (d[trace] != null) { return barColours(d[trace]); } else { return "url(#xhatch)"; } })
					.attr("stroke-width", function (d) { if (d[trace] != null) { return 1; } else { return 0; } })	
			} else {
				Bar_chart.selectAll(".bar")
					.attr("fill", function (d) { if (d[trace] != null) { return barColours(d[trace]); } else { return "url(#xhatch)"; } }) 
					.attr("stroke-width",0)
			}
			
            if (currentZoomLevel > 18) {
			    focus.select(".axis--x").call(xAxisZoomed);
            } else {
			    focus.select(".axis--x").call(xAxis);
            }
            // focus.select(".axis--month").call(xMonthAxis);
            var styles = `
            .axis--month .tick line {
                visibility: hidden !important;
              }            
            `
            var styleSheet = document.createElement("style")
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
			
			//call zoom
			svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
				.scale(scale)
				.translate(-s[0], 0));
			
				
		} else {
			//time period selected by brush too small or time period selected has missing AQHI for all hours, zoom out to full graph
			svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
				.scale(1));
		}
    }

    function zoomed() {
        const tf = d3.event.transform;
        currentZoomLevel = tf.k;
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
        var t = d3.event.transform;
		
		//filter data based on zoomed time period
        var dataFiltered = data.filter(function (d, i) {
            if ((d.DATE_LOCAL >= t.rescaleX(x2).domain()[0]) && (d.DATE_LOCAL <= t.rescaleX(x2).domain()[1])) {
                return d.DATE_LOCAL;
            }
        });

        dataFiltered = dataFiltered.filter(function (d) { return d[trace] != null; });
		
		//find new y domain and x domain
		var y_domain_min = 0
        var y_domain_max = 10;
		
        y.domain([y_domain_min, y_domain_max + 1]);

        x.domain(t.rescaleX(x2).domain());
        const newDomain = d3.event.transform.rescaleX(x).domain();
        updateXAxisLabel(newDomain);
		
		//zoom and recreate chart only if AQHI is present for time period selected
		if(y_domain_max != null) {
			d3.select(".selected-date").html('Selected date range from: <strong>' + formatTime(t.rescaleX(x2).domain()[0]) + ' to: ' + formatTime(t.rescaleX(x2).domain()[1]) + '</strong>');
			
			//redraw axes based on zoomed time period and data
			yAxisRight = d3.axisRight(y)
				.tickValues(y.ticks().filter(tick => Number.isInteger(tick) && tick !== 0 && tick <= 11))
				.tickFormat(function (d) { if (d >= 11) { return '10+'; } else { return d; } });
			yAxis = d3.axisLeft(y)
				.tickValues(y.ticks().filter(tick => Number.isInteger(tick) && tick !== 0 && tick <= 11))
				.tickFormat(function (d) { if (d >= 11) { return '10+'; } else { return d; } });
            focus.select(".axis--x").call(d3.axisBottom(x).tickFormat(xAxisTickFormat(xScale.domain())));
			focus.select(".axis--y").call(yAxis);
			focus.select(".axis--y.right").call(yAxisRight);
			
			//recreate bar chart with new x scale and change bar width according to scale
			Bar_chart.selectAll(".bar")
				.attr("y", function (d) { if (d[trace] != null) { return y(d[trace]); } else { return y(y_domain_max + 1); } })
				.attr("height", function (d) { if (d[trace] != null) { return height - y(d[trace]); } else { return height - y(y_domain_max + 1); } })
				.attr("stroke","black")
				.attr("opacity", function (d) { if (d[trace] != null) { return 1; } else { return 0.3; } });
				
			//update brush clip box
			context.select(".brush").call(brush.move, x.range().map(t.invertX, t));

			drawIndexLevelBackgroundColor(height, width, margin.left, margin.top, svg);

			
			//update grids
			xGrid.transition().call(
				d3.axisBottom(x)
					.tickSize(-height)
					.tickFormat("")
			);

			yGrid.transition().call(d3.axisLeft(y)
				.tickValues(y.ticks().filter(tick => Number.isInteger(tick)))
				.tickSize(-width)
				.tickFormat(""));

			
			var scale = d3.event.transform.k; //find scale of zoom
			
			//changing bar width and shift bar based on scale
			Bar_chart.selectAll(".bar")
				.attr("width",xScale.bandwidth() * scale)
				.attr("x", function(d) { return x(d.DATE_LOCAL) - xScale.bandwidth() * scale; })

			//show bar colours and border around bars only if scale >= 3, does not apply for hours with missing AQHI
			if (scale >=3) {
				Bar_chart.selectAll(".bar")
					.attr("fill", function (d) { if (d[trace] != null) { return barColours(d[trace]); } else { return "url(#xhatch)"; } })
					.attr("stroke-width", function (d) { if (d[trace] != null) { return 1; } else { return 0; } })	
			} else {
				Bar_chart.selectAll(".bar")
					.attr("fill", function (d) { if (d[trace] != null) { return barColours(d[trace]); } else { return "url(#xhatch)"; } }) 
					.attr("stroke-width",0)
			}
		} else {
			//time period selected has missing AQHI for all hours, zoom out to full graph
			svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
				.scale(1));
		}
	
    }

    // Updates the month label for the x-axis
    function updateXAxisLabel(domain) {
        const startDate = domain[0];
        const endDate = domain[1];

        if (startDate.getMonth() === endDate.getMonth()) {
          // If start and end dates are the same month, just display that month
          xAxisLabel.text(d3.timeFormat('%B')(startDate));
        } else {
          // Otherwise, compute the number of days in each month within the domain
          const monthDays = {};
      
          d3.timeDays(startDate, endDate).forEach(date => {
            const month = d3.timeFormat('%B')(date);
            monthDays[month] = (monthDays[month] || 0) + 1;
          });
      
          // Find the month with the most days in the domain
          const month = Object.keys(monthDays).reduce((acc, cur) => {
            return monthDays[cur] > monthDays[acc] ? cur : acc;
          });
      
          // Update the x-axis label text to show the name of the selected month
          xAxisLabel.text(month);
        }
      }

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

// This function formats x-axis ticks to place the day/day number at 12am
// and hours everywhere else.
function xAxisTickFormat(domain) {
    const bisect = d3.bisector(d => d).left;
    const format12Hour = d3.timeFormat("%I %p");
    const formatDay = d3.timeFormat("%a %d");

    return function(date) {
        const index = bisect(domain, date);
        const isDuplicate = domain[index - 1] && domain[index - 1].getDate() === date.getDate();

        if (isDuplicate) {
            if (date.getHours() === 0) {
                return formatDay(date);
            } else {
                return format12Hour(date);
            }
        } else {
            return formatDay(date);
        }
    }
  }
  