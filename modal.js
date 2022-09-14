const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const openBtn = document.getElementById("openModal");
const modalOut = document.querySelector(".modal__output");

closeBtn.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});

openBtn.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
  modalOut.innerHTML = "";
  const calcs = JSON.parse(sessionStorage.getItem("Calculations"));
  calcs.forEach((el, i) => {
    const elem = document.createElement("p");
    elem.textContent = el;
    modalOut.append(elem);
  });
});

document.body.addEventListener(
  "click",
  (e) => {
    modal.classList.add("hidden");
  },
  true
);
