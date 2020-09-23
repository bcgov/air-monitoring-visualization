// Version Nov. 7th, 2019 - RJT
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

var aqhi_banner_key = ['AQHI_PLUS', 'AQHI_RP', 'AQHI_GP']

// These are the short names and units for each measurement
d3.csv('labels-widget.csv', function (err, data) {
    labels = data
});

d3.csv('http://www.env.gov.bc.ca/epd/bcairquality/aqo/csv/AQHIWeb.csv', function (err, data) {
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
            'AQHI': 'Not Available',
            'FORECAST_TODAY': 'Not Available',
            'FORECAST_TONIGHT': 'Not Available',
            'FORECAST_TOMORROW': 'Not Available'
        }

        aqhi_banner_text = {
            'AQHI_PLUS': 'Not Available',
            'AQHI_RP': 'Not Available',
            'AQHI_GP': 'Not Available'
        }

        initAQHIText(QueryString.replace("AQHI-", ""));


        //get the date range 
        var xx_min = d3.min(data, function (d) {
            return new Date(d.DATE_LOCAL);
        });
        var xx_max = d3.max(data, function (d) {
            return new Date(d.DATE_LOCAL);
        });
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
        //revised: assumes input data length is number of hours
        //var diff_hours = data.length + 1; 

        //populate a new date array with each time slot
        var date_array = [];
        date_array.push(xx_min);
        for (var i = 0; i <= diff_hours; i++) {

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
            if (aqhi_data && aqhi_data.AQHI !== '') {
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

    // Don't show these as buttons
    var exclude = ['DATE_PST', 'LATITUDE', 'LONGITUDE', 'STATION', 'DATE_LOCAL', 'DATE', 'EMS_ID', 'AQHI_AREA', 'STATION_NAME', 'NOx', 'NOX_24', 'NO', 'NO_24', 'NO2_24', 'SO_24', 'SO2_24', 'AQHI_CHAR', 'AQHIPLUSPARAMETER', 'SO2_OVER']

    $.each(data[0], function (key, value) {
        if (!(exclude.includes(key))) {
            ind = _(labels).filter(function (d) {
                return d['Data Source'] === key;
            });
            // unicode for some units
            if (ind.length > 0) {

                meas.push({
                    source: ind[0]['Data Source'],
                    short: ind[0]['Short Name'],
                    decimal: ind[0]['Decimal']
                })
            }
            list_of_aq_measures.push(key)
        }
    });

    var result = []
    
    

    makeButtons(list_of_aq_measures, data);
    makeGraphs(initGas, data)

    //Title and date range titles



    if (QueryString.includes('AQHI')) {
        d3.select(".current-cond").html(data[0]["AQHI_AREA"]);
    } else {
        d3.select(".current-cond").html(data[0]["STATION"]);
    }
    d3.select(".current-date").html('Latest data at: <strong>' + data[data.length - 1].DATE + '</strong>.');

    document.querySelector.apply(document, ['title']).innerHTML = '' + data[0]["AQHI_AREA"] + ' - Air Quality Health Index - Province of British Columbia';

});

function initAQHIText(region) {
    if (aqhi_data) {
        aqhi_data.forEach(function (a) {
            var region_lc = a["AQHI_AREA"].toLowerCase();
            if (region_lc == region.toLowerCase().replace(/_/g, " ")) {
                aqhi_btn_text['AQHI'] = a['VALUE_CHAR'] + " - " + a['AQHICURRENT_Text1'];
                aqhi_btn_text['FORECAST_TODAY'] = a['FORECAST_TODAY_CHAR'] + " - " + a['AQHITODAY_Text1'];
                aqhi_btn_text['FORECAST_TONIGHT'] = a['FORECAST_TONIGHT_CHAR'] + " - " + a['AQHITONIGHT_Text1'];
                aqhi_btn_text['FORECAST_TOMORROW'] = a['FORECAST_TOMORROW_CHAR'] + " - " + a['AQHITOMORROW_Text1'];
                
            }
        });
    }
};


// make button active
function makeActive(selection) {

    d3.selectAll(".active").classed("active", false).attr('style', 'border: solid 0px black !important;')
    selection.classed("active", true).attr('style',
        function (d) {
            return 'display:block;' +'box-shadow: none;'
        })
}

t = 0

function makeButtons(keys, data) {
    var isAqhi = false;
    var buttons = d3.select('.button').selectAll('.button')
        .data(keys)
        .enter()
        .append("div")
        .attr("class", "btn btn-default-aqhi")
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

    var svg = d3.select("svg")


    svg.append("rect")


}
