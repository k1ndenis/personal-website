document.addEventListener("DOMContentLoaded", () => {
  const randomBtn = document.getElementById("random-btn");
  const hideBtn = document.getElementById("hide-btn");
  const result = document.getElementById("random-result");

  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const closeBtn = document.getElementById("close");

  const cards = document.querySelectorAll(".row .card");

  function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    const clone = randomCard.cloneNode(true);

    clone.style.display = "inline-block";
    clone.style.width = "18rem";
    clone.classList.add("shadow", "mt-3");

    result.innerHTML = "";
    result.appendChild(clone);
    hideBtn.style.display = "inline-block";
  }

  function hideResult() {
    result.innerHTML = "";
    hideBtn.style.display = "none";
  }

  randomBtn && randomBtn.addEventListener("click", showRandomCard);
  hideBtn && hideBtn.addEventListener("click", hideResult);

  document.addEventListener("click", (e) => {
    const link = e.target.closest && e.target.closest(".zoom-link");
    if (!link) return;

    e.preventDefault();

    const imgSrc = link.dataset.img || link.getAttribute("data-img");
    if (!imgSrc) {
      console.warn("Нету data-img в .zoom-link", link);
      return;
    }

    overlayImg.src = imgSrc;
    overlay.style.display = "flex";
  });

  closeBtn &&
    closeBtn.addEventListener("click", () => {
      if (overlay) overlay.style.display = "none";
      if (overlayImg) overlayImg.src = "";
    });

  overlay &&
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
        overlayImg && (overlayImg.src = "");
      }
    });
});
