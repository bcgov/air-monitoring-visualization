function addAqhiTableRow(station_url, station_name, current_index, first_forecast_period_index, second_forecast_period_index, third_forecast_period_index, fourth_forecast_period_index, date, header_first_forecast, header_second_forecast, header_third_forecast, header_fourth_forecast) {

    var row_html = '<div>' +
        '<div id="blockLeft">' +
        '<h1 class="headerStnName">' + station_name + '</h1>' +
        '<div class="aqhiRowDate">Calculated at: ' + formatDate(date) + '</div>' + '<div class="aqhiGraph"><span class="glyphicon glyphicon-stats" aria-hidden="true"></span> <a name="' + station_name + '" href="' + station_url + '" target="_parent">View graph of observed AQHI values.</a></div><div class="clearAll"></div>' +
        '</div>' +
        '<div id="blockRight">' +
        '<div id="aqhiReadingContainer">' +
        '<h2 class="forecastLabel">Latest observed conditions</h2>' +
        getIndexDescription(current_index) +
        '<div id="forcastSection"><h2 class="maximumLabel">Maximum AQHI forecast</h2><div class="forecastLabel2">' + header_first_forecast + '</div>' +
        getIndexDescription(first_forecast_period_index) +
        '<div class="forecastLabel2">' + header_second_forecast + '</div>' +
        getIndexDescription(second_forecast_period_index) +
        '<div class="forecastLabel2">' + header_third_forecast + '</div>' +
        getIndexDescription(third_forecast_period_index) +
        '<div class="forecastLabel2">' + header_fourth_forecast + '</div>' +
        getIndexDescription(fourth_forecast_period_index) +
        '</div></div>' +
        '</div>' +
        '</div>';
    $('#aqhi_table').append(row_html);
}

function getIndexDescription(index) {
    var result = '';
    switch (index) {
        case 'n/a':
            result = '<div class="aqhiReading unavailable">N/A</div>';
            break;
        case 'N/A':
            result = '<div class="aqhiReading unavailable">N/A</div>';
            break;
        case 'NA':
            result = '<div class="aqhiReading unavailable">N/A</div>';
            break;
        case '1':
            result = '<div class="aqhiReading aqhi1"> <span style = "display:block;" > ' + index + ' - Low risk</span></div >';
            break;
        case '1*':
            result = '<div class="aqhiReading aqhi1"> <span style = "display:block;" > ' + index + ' - Low risk</span></div >';
            break;
        case '2':
            result = '<div class="aqhiReading aqhi2"> <span style = "display:block;" > ' + index + ' - Low risk</span></div >';
            break;
        case '2*':
            result = '<div class="aqhiReading aqhi2"> <span style = "display:block;" > ' + index + ' - Low risk</span></div >';
            break;
        case '3':
            result = '<div class="aqhiReading aqhi3"> <span style = "display:block;" > ' + index + ' - Low risk</span></div >';
            break;
        case '3*':
            result = '<div class="aqhiReading aqhi3"> <span style = "display:block;" > ' + index + ' - Low risk</span></div >';
            break;
        case '4':
            result = '<div class="aqhiReading aqhi4"> <span style = "display:block;" > ' + index + ' - Moderate risk</span></div >';
            break;
        case '4*':
            result = '<div class="aqhiReading aqhi4"> <span style = "display:block;" > ' + index + ' - Moderate risk</span></div >';
            break;
        case '5':
            result = '<div class="aqhiReading aqhi5"> <span style = "display:block;" > ' + index + ' - Moderate risk</span></div >';
            break;
        case '5*':
            result = '<div class="aqhiReading aqhi5"> <span style = "display:block;" > ' + index + ' - Moderate risk</span></div >';
            break;
        case '6':
            result = '<div class="aqhiReading aqhi6"> <span style = "display:block;" > ' + index + ' - Moderate risk</span></div >';
            break;
        case '6*':
            result = '<div class="aqhiReading aqhi6"> <span style = "display:block;" > ' + index + ' - Moderate risk</span></div >';
            break;
        case '7':
            result = '<div class="aqhiReading aqhi7"> <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '7*':
            result = '<div class="aqhiReading aqhi7"> <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '8':
            result = '<div class="aqhiReading aqhi8"> <span style = "display:block;" > ' + index + '- High risk</span></div >';
            break;
        case '8*':
            result = '<div class="aqhiReading aqhi8"> <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '9':
            result = '<div class="aqhiReading aqhi9"> <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '9*':
            result = '<div class="aqhiReading aqhi9"> <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '10':
            result = '<div class="aqhiReading aqhi10"> <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '10*':
            result = '<div class="aqhiReading aqhi10" > <span style = "display:block;" > ' + index + ' - High risk</span></div >';
            break;
        case '10+':
            result = '<div class="aqhiReading aqhi11"> <span style = "display:block;" > ' + index + ' - Very high risk</span></div >';
            break;
        case '11':
            result = '<div class="aqhiReading aqhi11"> <span style = "display:block;" > ' + index + ' - Very high risk</span></div >';
            break;
        default:
            result = '<div class="aqhiReading unavailable">Not Available<sup>*</sup></div>';
            break;
    }

    return result;
}
// For Time Change, change to PST or PDT
function formatDate(d) {
    var date_str = d.split(" ")[0];
    var hour_str = d.split(" ")[1];
    var date = new Date(date_str.split("-")[0], date_str.split("-")[1] - 1, date_str.split("-")[2], hour_str.split(":")[0]);
    return getMonthDes(date.getMonth()) + '. ' + date.getDate() + ', ' + date.getFullYear() + ', ' + (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + (date.getHours() >= 12 ? 'pm' : 'am') + ' PDT';
}

function getMonthDes(m) {
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[m];
}
