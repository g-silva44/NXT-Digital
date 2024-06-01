var cycle = 1;
var allImages = [
  "portfolio_preview_2.webp",
  "portfolio_preview_1.webp",
  "portfolio_preview_3.webp",
];

setInterval(function () {
  if (cycle < 3) {
    document.getElementById("portfolio_img").src =
      "src/assets/imgs/" + allImages[cycle] + "";
    cycle += 1;
  } else {
    cycle = 0;
  }
}, 3000);
