function openModal(src) {
  document.getElementById("modalImg").src = src;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});
