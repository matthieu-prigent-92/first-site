// 1- Sélecteurs
let btn = document.querySelectorAll("button");
let img = document.querySelectorAll("img");

// 2- Fonctions

function sliderTop() {
  for (i = 0; i < img.length; i++) {
    let src = img[i].getAttribute("src");

    switch (src) {
      case "img/chamarel-7couleurs1.jpg":
        img[i].setAttribute("src", "img/chamarel-7couleurs2.jpg");
        break;
      case "img/chamarel-7couleurs2.jpg":
        img[i].setAttribute("src", "img/chamarel-cascade1.jpg");
        break;
      case "img/chamarel-cascade1.jpg":
        img[i].setAttribute("src", "img/chamarel-cascade2.jpg");
        break;
      case "img/chamarel-cascade2.jpg":
        img[i].setAttribute("src", "img/chamarel-7couleurs1.jpg");
        break;
      case "img/grand-bassin-lac.jpg":
        img[i].setAttribute("src", "img/grand-bassin-durga.jpg");
        break;
      case "img/grand-bassin-durga.jpg":
        img[i].setAttribute("src", "img/grand-bassin-shiva.jpg");
        break;
      case "img/grand-bassin-shiva.jpg":
        img[i].setAttribute("src", "img/grand-bassin-lac.jpg");
        break;
      case "img/port-louis-caudan-waterfront.jpg":
        img[i].setAttribute("src", "img/port-louis-caudan-city.jpg");
        break;
      case "img/port-louis-caudan-city.jpg":
        img[i].setAttribute("src", "img/port-louis-caudan-parapluie.jpg");
        break;
      case "img/port-louis-caudan-parapluie.jpg":
        img[i].setAttribute("src", "img/port-louis-caudan-waterfront.jpg");
        break;
      case "img/ileauxcerfs-plage1.jpg":
        img[i].setAttribute("src", "img/ileauxcerfs-plage2.jpg");
        break;
      case "img/ileauxcerfs-plage2.jpg":
        img[i].setAttribute("src", "img/ileauxcerfs-plage3.jpg");
        break;
      case "img/ileauxcerfs-plage3.jpg":
        img[i].setAttribute("src", "img/ileauxcerfs-plage1.jpg");
        break;
    }
  }
}

function intervalTop() {
  window.setInterval(sliderTop, 5000);
}
for (i = 0; i < btn.length; i++) {
  btn[i].onclick = intervalTop;
}
