function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1sIbng4zCw4-mbTeJsl6PVozJ4VoNLFRzQ5XVXITf6v8/edit?usp=sharing',
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