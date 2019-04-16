
var imagesArray = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg"];

var minimum = 0;
var maximum = imagesArray.length - 1;  // this allows an unlimited number of images
var currentPosition = 0;
var likesArray = [0, 0, 0, 0, 0, 0];


// IMAGES ---------------------------- //
// ------- NEXT ---------------------- //

$("#next").on("click", function () {
	currentPosition += 1; // currentPostion = currentPostion + 1
	$("#prev").attr("disabled", false);
	if(currentPosition >= maximum) {
		$(this).attr("disabled", true);
	}
	$("#image-to-vote-on").attr("src", "images/" + imagesArray[currentPosition]);
	$("#votes").html("Likes: " + likesArray[currentPosition]);

	console.log("click");
});

// ------- PREV ----------------------- //

$("#prev").on("click", function () {
	currentPosition -= 1; // currentPostion = currentPostion + 1
	$("#next").attr("disabled", false);	
	if(currentPosition == minimum) {
		$(this).attr("disabled", true);
	}
	$("#image-to-vote-on").attr("src", "images/" + imagesArray[currentPosition]);
	$("#votes").html("Likes: " + likesArray[currentPosition]);

	console.log("click");
});


// FINGERS ----------------------------- //
// ------- UP ---------------------- //

$("#upvote").on("click", function() {
	likesArray[currentPosition] += 1;
	$("#votes").html("Likes: " + likesArray[currentPosition]);



	console.log(likesArray);
});

// ------- DOWN ---------------------- //

$("#downvote").on("click", function() {
	likesArray[currentPosition] -= 1;
	$("#votes").html("Likes: " + likesArray[currentPosition]);


	console.log(likesArray);
});











