/***********************************************
      STRING DATA TYPE
***********************************************/

var firstName = "Paul";
var lastName = "Elliott";

var message = firstName + " " + lastName;
/*
var string1 = document.getElementById("string1");
string1.innerHTML = message;
*/

var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);


/***********************************************
      NUMBER DATA TYPE
***********************************************/

var level = 1;
var level = 2;
var ssNumber = 2342232222; // this is an integer
var cost = 1.50; //this is a float type number

var cost1 = 50;
var cost2 = "25";
var total = cost1 / cost2;
console.log(total);

/***********************************************
      ARRAY DATA TYPE - a variable that can contain multiple values; a list
***********************************************/

// create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList[0]);

imageList.push("images/oil/thumbs/artwork_8.jpg");
console.log(imageList.length);

/***********************************************
      BOOLEAN DATA TYPE
***********************************************/
var oldEnough = false;

var age=18;

if(age < 20) {
    //too young
    oldEnough = false;
} else {
    oldEnough = true; 
}

function dynamicGreeting() {
    //create the built-in date object
    var now = new Date();
    var time = now.getHours();//extract the hours
    
    if(time < 12) {
        alert("Good morning.");
    }
    if (time==12) {
        alert("Time to have lunch.");
    }
    if (time > 12) {
        alert("Good afternoon, the time is ...." );
    }
    
        
    for(var i=0; i < 50; i++) {
        console.log("the loop as run for " + i + " times.");
    }
}
