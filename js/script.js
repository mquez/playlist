// quick fix for Cloud9 warning:
/* global $ */

// Class 1:
// Customize the mySong variable with information about your favorite song.
// Complete displaySong function to append a single song to the list on the page.
// Make sure the displaySong function is called when the page loads.

// Class 2:
// Complete displayList function to append all the songs to the list on the page.
// Make sure the displayList function is called when the page loads.
// Complete clearList function to remove everything inside the list on the page (optional).

// Class 3:
// Complete the addSong function to:
//	  take inputs from the input boxes,
//    push the new song to the playlist array,
// 	  and display the new song in the list on the page.
// Make sure the addSong function is triggered when a user clicks the Add Song button.

// *************************** YOUR CODE BELOW *******************************
//************ CHECK YOUR WORK EARLY AND OFTEN WITH console.log() ************

// Data
var mySong = {
	"title":"24K Magic",
	"artist":"Bruno Mars",
	"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	// everything inside this function happens as soon as the page loads!



});

// displaySong uses the properties in the songObject to create an HTML element for a single song
//	  and appends the element to the playlist on the page
function displaySong(songObject){



}

// displayList takes in an array of song objects, and it uses the information from each song object
//    to create an HTML element and append it to the playlist on the page
function displayList(songsArray){



}

// clearList removes all the content from the playlist on the page
function clearList(){



}

// addSong takes inputs from the input boxes, organizes them into a new song object, and
//    pushes a new song to the playlist array
function addSong(){



}
