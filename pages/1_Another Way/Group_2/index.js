function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/18r_i7YIyakBaIt2YNcqSv9XkpaM2WhAAOgxX-ozh7C4/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);

for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	// Offices in the GRIT REGION
	//var currentOffice = data[i]


	// if (grit.includes(data[i].office)) {
			$("#table-body").append(
			'<tr class="row">' +
			'<td class="name-column-long">' + data[i].name + '</td>' +
			'<td class="office-column">' + data[i].office + '</td>' +
			'<td class="pace_prize">' + data[i].score + '</td>' +
			'</tr>'
		); 
		// }
	
}

}