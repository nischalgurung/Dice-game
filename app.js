const heading = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btn = document.querySelector("button");

function RollDice() {
  let img1Random = Math.floor(Math.random() * 6) + 1;
  let img2Random = Math.floor(Math.random() * 6) + 1;
  img1.setAttribute("src", `./Images/dice${img1Random}.png`);
  img2.setAttribute("src", `./Images/dice${img2Random}.png`);
  if (img1Random > img2Random) {
    heading.textContent = "🚩Player 1 wins!";
  } else if (img1Random < img2Random) {
    heading.textContent = "Player 2 wins!🚩";
  } else {
    heading.textContent = "🌠Its a tie🌠";
  }
}
btn.addEventListener("click", RollDice);
