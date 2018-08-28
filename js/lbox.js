
function openModal(e) {
	document.getElementById("preview").src=e.src;
  document.getElementById('myModal').style.display = "block";
  showSlides(e);
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


function showSlides(e) {
	var slide=document.getElementById("principal");
	var captionText = document.getElementById("caption");  
	slide.style.display = "block";
	captionText.innerHTML= e.getAttribute('alt');
}