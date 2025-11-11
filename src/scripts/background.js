window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let pageHeight = this.document.documentElement.scrollHeight;
  let videoBackground = document.getElementById("videoBackground");
  if (scrollPosition >= pageHeight / 2) {
    videoBackground.style.opacity = 1;
  } else {
    videoBackground.style.opacity = 0;
  }
});
