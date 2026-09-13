// function toggleColor (){
// var image = document.getElementById("image");
// image.setAttribute("class", "red");
// }

//  function toggleColor() {
//     var image = document.getElementById("image");

//     if (image.classList.contains("green")) {
//       image.setAttribute("class", "red");
//     } else {
//       image.setAttribute("class", "green");
//     }
//   }

  // var image = document.getElementById('image');

  //   if (image.className == 'green') {
  //     image.setAttribute('class', 'red');
  //   } else {
  //     image.setAttribute('class', 'green');
  //   }

//  function toggleColor() {
//       var image = document.getElementById("image");

//       if (image.getAttribute("class") == "green") {
//         image.setAttribute("class", "red");
//       }

//       if (image.getAttribute("class") == "red") {
//         image.setAttribute("class", "green");
//       }
//     }

function toggleColor() {
    var image = document.getElementById("image");

    if (image.getAttribute("class") == "green") {
        image.setAttribute("class", "red");
        return;
    }

    if (image.getAttribute("class") == "red") {
        image.setAttribute("class", "green");
    }
}
