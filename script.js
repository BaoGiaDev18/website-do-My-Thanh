function showMessage() {
  document.getElementById("message").textContent = "Cảm ơn bạn đã tha thứ!";
}

function moveButton(button) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  button.style.transform = `translate(${x}px, ${y}px)`;
}
