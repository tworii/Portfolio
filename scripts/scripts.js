/*
Adapated from the guide available at
https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
/*
var slideIndex = [0,0];
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("top_slides");
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 5000);
}

*/

var slideIndex = [0,0];

var slideId = ["top_slides", "top_slides_bkgd"];
showSlides();


function showSlides() {
	for (var i = 0; i < slideIndex.length; i++) {
		var slides = document.getElementsByClassName(slideId[i]);
		for (var j = 0; j < slides.length; j++) {slides[j].style.display = "none";}
		slideIndex[i]++;
		if (slideIndex[i] > slides.length) {slideIndex[i] = 1}
		slides[slideIndex[i]-1].style.display = "block";
	}
	setTimeout(showSlides, 5000);
}

/*
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
  setTimeout(plusSlides(1,no), 5000);
}
*/