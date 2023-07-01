// Write your JS in here
var pics = [
	"Savannah cat/Savannah_Cat1.jpg",	    //0
	"Savannah cat/laying_bored.jpg",    //1
	"Savannah cat/Savannah.jpg",    //2
	"Savannah cat/savannah_cat_F1.jpg", //3
	"Savannah cat/Long_boy.jpg",        //4
	"Savannah cat/Savannah_Cat_portrait.jpg",//5
	"Savannah cat/baby_savannah.jpg", //6
	"Savannah cat/good_boy.jpg" //7
];
let length = pics.length;
// to enable the button to switch among pics going forward
// var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;

function Button1(){
	counter = counter + 1;
	if(counter === 8) {
		counter = 0; 
	}
	img.src = pics[counter];
}

// to enable the botton to switch among pics going backwards
function Button2(){
	counter = counter - 1;
	if(counter < 0){
		counter = length - 1;		
	}
	img.src = pics[counter];
}
