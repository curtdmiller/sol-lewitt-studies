const inks = document.getElementsByClassName("ink");

Array.from(inks).forEach((ink, i) => {
  ink.style.width = `${98 - (98 / 39) * i}%`;
  ink.style.height = `${98 - 1.6 * i}%`;
});
