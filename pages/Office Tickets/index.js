function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1bzKFIQMBg9FnYBOXpiteqwrdljTkWmHVijo68YnUHvY/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);

var atomic = ["CA-04", "CA-09", "CA-23"];
var core = ["CA-18", "CA-07", "CA-01", "CA-05", "CA-30"];
var flow = ["CA-14", "CA-02", "CA-13", "CA-15"];
var grit = ["IL-05", "NJ-02", "NJ-01", "IL-04", "PA-02", "NY-05", "NY-03", "NY-02"];
var legion = ["VA-01", "FL-01", "MD-02", "MD-01", "MD-04"];
var new_england = ["MA-01", "CT-01", "MA-05", "MA-02", "MA-03", "MA-04"];
var originals = ["CA-21", "CA-10", "CA-12", "CA-06", "CA-36"];
var republic = ["CA-03", "CA-20", "CA-16", "CA-11"];
var topo = ["Hawaii", "CO-01", "NV-03", "AZ-02", "UT-01", "NM-01"];

for (var i = 0; i < data.length; i++) {
	$("#table-body").append(
	'<tr class="row">' +
	'<td class="name-column">' + data[i].office_name + '</td>' +
	'<td class="office-column">' + data[i].highest_division + '</td>' +
	'<td class="office-column">' + data[i].q4_pace + '</td>' +
	'<td class="current_points">' + data[i].q1_tix + '</td>' +
	'<td class="total_pace">' + data[i].q2_tix + '</td>' +
	'<td class="current_points">' + data[i].q3_tix + '</td>' +
	'</tr>'
); 
	
}

}