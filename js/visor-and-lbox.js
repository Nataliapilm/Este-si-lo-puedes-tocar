
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
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}  
var number=30;
var rows=number/4;
var k=number%4;
var contchangerow=1;	
var i=0;
var divinit="<div class='column'>";
var temp=divinit;
//document.getElementById("collage").innerHTML=divinit; 
function chargeImg() {		
	for(i = 1; i <=number; i++){
	    temp += "<div class='container'> <img src='../fotos/Parques/parques ("+ i
	     + ").jpg' alt='Descripcion de Sangil foto #"+i+"' onclick='openModal(this)'></div>";
	    if(contchangerow>=rows){
	    	if(k>0 && contchangerow==rows){
	    		k-=1;	    			
	    	}else{	    		
	    		closeDiv();  		
	    	}	    	
	    }
	    contchangerow++;
	}		// body...
	console.log(temp);
	document.getElementById("collage").innerHTML=temp; 
}

function closeDiv() {
	contchangerow=0;	
	temp +="</div>";
	if(i!=number){
		temp +=divinit;
	}	   
}
chargeImg();