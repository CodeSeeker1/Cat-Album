// Write your JS in here
var pics = [
	"Savannah cat/F1_SavannahCat.jpg",  //0
	"Savannah cat/Savannah_Cat1.jpg",	    //1
	"Savannah cat/laying_bored.jpg",    //2
	"Savannah cat/Savannah.jpg",    //3
	"Savannah cat/savannah_cat_F1.jpg", //4
	"Savannah cat/Long_boy.jpg",        //5
	"Savannah cat/Savannah_Cat_portrait.jpg",//6
	"Savannah cat/baby_savannah.jpg", //7
	"Savannah cat/good_boy.jpg" //8
];
// to enable the button to switch among pics going forward
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
	if(counter === 8) {
		counter = 0; 
	}
	{
	img.src = pics[counter];
	counter = counter + 1;
	}
});
// to enable the botton to switch among pics going backwards
var btn2 = document.querySelector("button2");
btn2.addEventListener("click",function(){
	if(counter === 0){
		counter = 8;
	}
	{
	img.src = pics[counter];
	counter = counter - 1;
	}	

	
});
