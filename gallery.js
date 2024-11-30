const modal = document.querySelector(".modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-img");
const gallery = document.querySelector(".container");

function modalShow(e) {
  if (e.target.nodeName != "IMG") return;

  //   console.dir(e.target.classList);

  const classes = e.target.classList;

  if (classes.contains("demo")) {
    return;
  }

  modalImage.src = e.target.src;
  modal.setAttribute("style", "display: flex;");
}

function modalHide() {
  modal.setAttribute("style", "display: none;");
}

gallery.addEventListener("click", modalShow);

modalClose.addEventListener("click", modalHide);
