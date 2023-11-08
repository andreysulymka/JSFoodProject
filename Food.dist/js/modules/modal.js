function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "none";
  document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerTd) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  if (modalTimerTd) {
    clearTimeout(modalTimerTd);
  }
}

function modal(triggerSelector, modalSelector, modalTimerTd) {
  //Modal

  const modal = document.querySelector(modalSelector);
  const openBtns = document.querySelectorAll(triggerSelector);
  // const closeBtn = document.querySelector("[data-close]");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimerTd));
  });

  // closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, modalTimerTd);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };
