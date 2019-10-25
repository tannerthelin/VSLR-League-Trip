function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1uTCWL2DPvSXC_StqPopDXQxbozDYJGRw6G3Qwv6GbWI/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
var counter = 1;

var grit = ["IL-01", "NJ-02", "PA-02", "NJ-01", "NY-05", "NY-03", "NJ-03", "NJ-04", "NY-02" ];
var legion = ["FL-02", "MD-02", "VA-01", "MD-01", "MD-04", "MD-05", "FL-01"];
var new_england = ["MA-01", "CT-01", "MA-05", "MA-02", "MA-03", "MA-04"];
var norcal = ["CA-20", "CA-03", "CA-07", "CA-18", "CA-01", "CA-16", "CA-30", "CA-11", "HI-01", "HI-02", "CA-05"];
var socal = ["CA-14", "CA-21", "CA-09", "CA-02", "CA-04", "CA-12", "CA-10", "CA-06", "CA-15", "CA-13", "CA-17"];
var southwest = ["NV-03", "UT-01", "CO-01", "NM-01", "AZ-02", "CA-Vi", "NV-Vi", "AZ-Vi", "CO-Vi", "NM-Vi", "FL-Vi", "IL-Vi", "NJ-Vi"];

var westcoast = norcal.concat(socal).concat(southwest);
var eastarray = [];
var eastcoast = grit.concat(legion).concat(new_england);

for (var i = 0; i < data.length; i++) {
	if (eastcoast.includes(data[i].office)) {
		eastarray.push(data[i]);
	}
}

for (var i = 0; i < 4; i++) {	
	$("#table-body").append(
	'<tr class="row">' +
	'<td class="name-column">' + eastarray[i].name + '</td>' +
	'<td class="office-column">' + eastarray[i].office + '</td>' +
	'<td class="current_points">' + eastarray[i].score + '</td>' +
	'<td class="pace_prize">' + "VIP" + '</td>' +
	'</tr>' 
	);
}

for (var i = 4; i < 10; i++) {	
	$("#table-body").append(
	'<tr class="row section-2">' +
	'<td class="name-column">' + eastarray[i].name + '</td>' +
	'<td class="office-column">' + eastarray[i].office + '</td>' +
	'<td class="current_points">' + eastarray[i].score + '</td>' +
	'<td class="pace_prize">' + "Diamond" + '</td>' +
	'</tr>' 
	);
}

for (var i = 10; i < 18; i++) {	
	$("#table-body").append(
	'<tr class="row section-3">' +
	'<td class="name-column">' + eastarray[i].name + '</td>' +
	'<td class="office-column">' + eastarray[i].office + '</td>' +
	'<td class="current_points">' + eastarray[i].score + '</td>' +
	'<td class="pace_prize">' + "Platinum" + '</td>' +
	'</tr>' 
	);
}

for (var i = 18; i < 50; i++) {	
	$("#table-body").append(
	'<tr class="row section-4">' +
	'<td class="name-column">' + eastarray[i].name + '</td>' +
	'<td class="office-column">' + eastarray[i].office + '</td>' +
	'<td class="current_points">' + eastarray[i].score + '</td>' +
	'<td class="pace_prize">' + "Gold" + '</td>' +
	'</tr>' 
	);
}

console.log(eastarray);
}