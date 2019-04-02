class Frog {
  constructor() {
  }
  randomImage() {
    var $theImage = document.getElementsByClassName('divID');
    var $placeIndex = Math.floor(Math.random() * $theImage.length);
    var $frogArray = ['./Images/bomb.png', './Images/little-frog-1.png', './Images/animal-frog-001-s.png']
    var $frogIndex = Math.floor(Math.random() * $frogArray.length);

    $theImage[$placeIndex].style.backgroundImage = "url(" + $frogArray[$frogIndex] + ")"
    setTimeout(() => {
      $theImage[$placeIndex].style.backgroundImage = "";
    }, 1000);
  }

}


