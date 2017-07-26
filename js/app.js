//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var resturants= [
  {place: "Mcdonald's",
  secretItem: "Air Lands Sea Burger 5.99"},
  {place: "Starbucks",
  secretItem: "Red Velvet Frappuccino 7.99"},
  {place: "Taco Bell",
  secretItem: "Chilli Cheese Burrito 1.99"},
  {place:"Subway",
  secretItem: "Pizza Sub 4.99"},
  {place:"Burger King",
  secretItem: "Suicide Burger 19.99"}
  ];
  


var placeElem = document.getElementsByClassName("name");
for(var i = 0; i<placeElem.length; i++){
 placeElem[i].addEventListener("click", showSecret); 
}

function showSecret(){
  var secretElem = this.querySelectorAll(".menu")[0];
  if(secretElem.style.display === "none"){
    secretElem.style.display = "block";
  }else{
    secretElem.style.display = "none";
  }
}

 

  

 
