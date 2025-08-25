
const le = document.querySelector(".le");
const p = document.querySelector(".p");

p.addEventListener("click", () => {
  const currentDisplay = getComputedStyle(le).display;

  if (currentDisplay === "none") {
    le.style.display = "block";
  } else {
    le.style.display = "none";
  }
});
