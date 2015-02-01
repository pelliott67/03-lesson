/***********************************************
      Practice page code
***********************************************/

function changeImage() {
    
    var imageList = new Array; 
    imageList[0] = "images/oil/thumbs/artwork_1.jpg";
    imageList[1] = "images/oil/thumbs/artwork_2.jpg";
    imageList[2] = "images/oil/thumbs/artwork_3.jpg";
    imageList[3] = "images/oil/thumbs/artwork_4.jpg";
    imageList[4] = "images/oil/thumbs/artwork_5.jpg";
    imageList[5] = "images/oil/thumbs/artwork_6.jpg";
   
    var image = document.getElementById("placeholder"); // get the image object
    var currentImagePath = image.getAttribute("src"); // get the src attribute of that object
    var regex = /[0-9]/;
    var currentImageNumber = Number(currentImagePath.match(regex)); // get the number from current image's src
    var imageIndex = (currentImageNumber - 1); 

    if (imageIndex == (imageList.length) - 1) { // if you're alread on the last image, go back to the first one
        imageToDisplay = imageList[0];
        
    } else {
        nextImage = imageList[(currentImageNumber)];
        imageToDisplay = nextImage; 
    }
    
    image.setAttribute("src", imageToDisplay);

}
