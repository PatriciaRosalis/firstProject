// let $buttonTags = document.querySelectorAll('button')

// for (let i = 0; i < $buttonTags.length; i++) {
//   $buttonTags[i].onclick = function(event) {
//     event.preventDefault() // Stop the default behavior: stop the redirection to another page
//     console.log('I was clicked!')
//     // Falta código AQUI
//   }
// }

// function myImg() {
//   var x = document.createElement("IMG");
//   x.setAttribute("src", "./Images/animal-frog-001-s.png  ");
//   x.setAttribute("width", "304");
//   x.setAttribute("height", "228");
//   x.setAttribute("alt", "The Pulpit Rock");
//   document.body.appendChild(x);
// }
var lastIndex = 0;

function randomImage() {
  var theImage = document.getElementById('myimage');
  var imgDir = './Images/animal-frog-001-s.png';
  var imgArray = new array('./Images/bomb.png', 'little-frog-1.png');
  var imgIndex = 0;
  if (imgArray.length > 1) {
    while (imgIndex === lastIndex) {
      imgIndex = Math.floor(Math.random() * imgArray.length);
    }
    lastIndex = imgIndex;
  }
}

var elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('cursor url with protocol'), auto";

window.onload = function () {
  document.getElementById('close').onclick = function () {
    this.parentNode.parentNode.parentNode
      .removeChild(this.parentNode.parentNode);
    return false;
  };
};