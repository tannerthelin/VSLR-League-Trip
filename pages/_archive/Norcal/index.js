function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1-t9owGMirWCaEdDfmJDcLAFU5ItvFAxoWq6mENZVyoc/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);

var grit = ["IL-01", "NJ-02", "PA-02", "NJ-01", "NY-05", "NY-03", "NJ-03", "NJ-04", "NY-02" ];
var legion = ["FL-02", "MD-02", "VA-01", "MD-01", "MD-04", "MD-05", "FL-01"];
var new_england = ["MA-01", "CT-01", "MA-05", "MA-02", "MA-03", "MA-04"];
var norcal = ["CA-20", "CA-03", "CA-07", "CA-18", "CA-01", "CA-16", "CA-30", "CA-11", "HI-01", "CA-05", "HI-02", "CA-04", "CA-23"];
var socal = ["CA-14", "CA-21", "CA-09", "CA-02", "CA-04", "CA-12", "CA-10", "CA-06", "CA-15", "CA-13", "CA-17"];
var southwest = ["NV-03", "UT-01", "CO-01", "NM-01", "AZ-02", "CA-Vi", "NV-Vi", "AZ-Vi", "CO-Vi", "NM-Vi", "FL-Vi", "IL-Vi"];

for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	// Offices in the GRIT REGION
	//var currentOffice = data[i]


	if (norcal.includes(data[i].office)) {
		
			$("#table-body").append(
			'<tr class="row">' +
			'<td class="name-column">' + data[i].name + '</td>' +
			'<td class="office-column">' + data[i].office + '</td>' +
			'<td class="current_points">' + data[i].score + '</td>' +
			'<td class="total_pace">' + data[i].pace + '</td>' +
			'<td class="pace_prize">' + data[i].pace_prize + '</td>' +
			'</tr>'
		); 
		}
	
}

}