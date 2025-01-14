const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

// Open the popup
openPopupButton.addEventListener("click", () => {
  popupOverlay.classList.add("active");
});

// Close the popup
closePopupButton.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});

// Close the popup by clicking outside
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("active");
  }
});
