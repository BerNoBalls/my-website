const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("inputData");

let entries = [];

textarea.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Ngăn xuống dòng
    const lines = textarea.value.trim().split("\n");
    entries = lines.filter(line => line.trim() !== "");
    drawWheel();
  }
});

function drawWheel() {
  const total = entries.length;
  const radius = canvas.width / 2;
  const angleStep = (2 * Math.PI) / total;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < total; i++) {
    const angle = i * angleStep;
    // random màu
    ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, angle, angle + angleStep);
    ctx.closePath();
    ctx.fill();

    // text
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle + angleStep / 2);
    ctx.fillStyle = "#000";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(entries[i], radius - 10, 5);
    ctx.restore();
  }
}
