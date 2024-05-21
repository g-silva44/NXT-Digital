var cycle = 1;
var allBackgrounds = [
  "portfolio_preview_2.webp",
  "portfolio_preview.webp",
  "portfolio_preview_3.webp",
];

setInterval(function () {
  if (cycle < 3) {
    document.getElementById("portfolio_img").src =
      "src/assets/imgs/" + allBackgrounds[cycle] + "";
    cycle += 1;
    console.log(cycle);
  } else {
    cycle = 0;
  }
}, 3000);
