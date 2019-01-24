'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	projectClick();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	$("#testjs").click(function(e) {
		var containingProject = "#project1"; //$(this).closest(".project");
		var description = $(containingProject).find(".project-description");
		$("#testjs").text("This button is mine");
		$("#testjs").addClass("active");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(description).html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
	});
}