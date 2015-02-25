(function (window, $, undefined) {
	var document = window.document,
		tableHeaderText = [],
		tableHeaders = document.querySelectorAll("#firm_bonus_table th"),
		tableBody = document.querySelector("#firm_bonus_table tbody");


	/**
	 * Create data attributes into firm bonus table table cells.
	 */
	for(var i = 0; i < tableHeaders.length; i++) {
		var current = tableHeaders[i];
		tableHeaderText.push(current.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row; row = tableBody.rows[i]; i++) {
		for (var j = 0, col; col = row.cells[j]; j++) {
			col.setAttribute("data-th", tableHeaderText[j]);
		}
	}

})( window, jQuery, undefined );